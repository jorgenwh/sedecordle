import {
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    getDocs,
    getCountFromServer,
    Timestamp,
    where,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import { Score, ScoreInput, ScoreStanding } from '../types/game'

const LEADERBOARD_COLLECTION = 'leaderboard'

// Higher score = better. Cost is seconds plus SECONDS_PER_GUESS per guess, so
// saving one guess is worth 60 seconds. Dividing SCORE_SCALE by cost keeps the
// score positive no matter how long a game takes.
const SECONDS_PER_GUESS = 60
// Each unsolved board adds 30 minutes, so a loss in 10 minutes still ranks
// below a full solve in 30 minutes.
const SECONDS_PER_UNSOLVED_BOARD = 30 * 60
const SCORE_SCALE = 1_000_000

export type TimePeriod = 'overall' | 'today' | 'week' | 'month' | 'year'

const MIN_ATTEMPTS = 16
const MAX_ATTEMPTS = 21

const computeCost = (score: ScoreInput) =>
    score.timeSeconds +
    score.attempts * SECONDS_PER_GUESS +
    (score.unsolvedBoards ?? 0) * SECONDS_PER_UNSOLVED_BOARD

export const computeScore = (score: ScoreInput) =>
    Math.round(SCORE_SCALE / computeCost(score))

// Inverse of the standard normal CDF (Abramowitz & Stegun 26.2.23). Error is
// below 0.00045, which is far below one IQ point.
const inverseNormal = (p: number) => {
    const t = Math.sqrt(-2 * Math.log(Math.min(p, 1 - p)))
    const z =
        t -
        (2.515517 + 0.802853 * t + 0.010328 * t * t) /
            (1 + 1.432788 * t + 0.189269 * t * t + 0.001308 * t * t * t)
    return p < 0.5 ? -z : z
}

// Counts saved games with a lower score than the given one. The score depends
// on two fields, so we run one count per possible guess count. isSaved tells
// whether the game itself is already part of the total.
export const getScoreStanding = async (
    score: ScoreInput,
    isSaved = false,
): Promise<ScoreStanding | null> => {
    try {
        const leaderboard = collection(db, LEADERBOARD_COLLECTION)
        const cost = computeCost(score)
        const attemptCounts = Array.from(
            { length: MAX_ATTEMPTS - MIN_ATTEMPTS + 1 },
            (_, index) => MIN_ATTEMPTS + index,
        )
        const [total, ...worse] = await Promise.all([
            getCountFromServer(leaderboard),
            ...attemptCounts.map((attempts) =>
                getCountFromServer(
                    query(
                        leaderboard,
                        where('attempts', '==', attempts),
                        where(
                            'timeSeconds',
                            '>',
                            cost - attempts * SECONDS_PER_GUESS,
                        ),
                    ),
                ),
            ),
        ])
        const otherCount = total.data().count - (isSaved ? 1 : 0)
        if (otherCount <= 0) return null

        const worseCount = worse.reduce(
            (sum, snapshot) => sum + snapshot.data().count,
            0,
        )
        // Place this game in the middle of its own rank among all games, so
        // the percentile never reaches 0 or 1.
        const percentile = (worseCount + 0.5) / (otherCount + 1)
        return {
            percentile,
            iq: Math.round(100 + 15 * inverseNormal(percentile)),
        }
    } catch (error) {
        console.error('Error fetching score standing:', error)
        return null
    }
}

const getStartDate = (period: TimePeriod): Date | null => {
    if (period === 'overall') return null

    const now = new Date()
    switch (period) {
        case 'today':
            return new Date(now.getFullYear(), now.getMonth(), now.getDate())
        case 'week': {
            const weekAgo = new Date(now)
            weekAgo.setDate(weekAgo.getDate() - 7)
            return weekAgo
        }
        case 'month': {
            const monthAgo = new Date(now)
            monthAgo.setMonth(monthAgo.getMonth() - 1)
            return monthAgo
        }
        case 'year': {
            const yearAgo = new Date(now)
            yearAgo.setFullYear(yearAgo.getFullYear() - 1)
            return yearAgo
        }
    }
}

export const saveScore = async (score: Omit<Score, 'id'>): Promise<string> => {
    try {
        const docRef = await addDoc(collection(db, LEADERBOARD_COLLECTION), {
            ...score,
            completedAt: Timestamp.fromDate(score.completedAt),
        })
        return docRef.id
    } catch (error) {
        console.error('Error saving score:', error)
        throw new Error('Failed to save score')
    }
}

export const getTopScores = async (
    limitCount = 10,
    period: TimePeriod = 'overall',
): Promise<Score[]> => {
    try {
        const startDate = getStartDate(period)
        // attempts is bounded to [MIN_ATTEMPTS, MAX_ATTEMPTS] for wins, so its contribution to the
        // score lies in a 300-second band. Fetching the 100 fastest entries
        // safely covers the top results once we sort by the merged score.
        const scoresQuery = startDate
            ? query(
                  collection(db, LEADERBOARD_COLLECTION),
                  where('completedAt', '>=', Timestamp.fromDate(startDate)),
                  orderBy('completedAt', 'desc'),
                  limit(100),
              )
            : query(
                  collection(db, LEADERBOARD_COLLECTION),
                  orderBy('timeSeconds', 'asc'),
                  limit(100),
              )

        const querySnapshot = await getDocs(scoresQuery)
        const scores: Score[] = []

        querySnapshot.forEach((doc) => {
            const data = doc.data()
            scores.push({
                id: doc.id,
                playerName: data.playerName,
                attempts: data.attempts,
                timeSeconds: data.timeSeconds,
                completedAt: data.completedAt.toDate(),
                targetWords: data.targetWords,
            })
        })

        scores.sort((a, b) => computeScore(b) - computeScore(a))
        return scores.slice(0, limitCount)
    } catch (error) {
        console.error('Error fetching scores:', error)
        return []
    }
}

export const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
}
