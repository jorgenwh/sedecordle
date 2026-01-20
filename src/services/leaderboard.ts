import {
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    getDocs,
    Timestamp,
    where,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import { Score } from '../types/game'

const COLLECTION_NAME = 'leaderboard'

export type TimePeriod = 'overall' | 'today' | 'week' | 'month' | 'year'

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
        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            ...score,
            completedAt: Timestamp.fromDate(score.completedAt),
        })
        return docRef.id
    } catch (error) {
        console.error('Error saving score:', error)
        throw new Error('Failed to save score')
    }
}

export const getTopScoresByGuesses = async (
    limitCount = 10,
    period: TimePeriod = 'overall',
): Promise<Score[]> => {
    try {
        const startDate = getStartDate(period)
        let scoresQuery

        if (startDate) {
            // Time-filtered query: fetch recent entries, sort in memory
            scoresQuery = query(
                collection(db, COLLECTION_NAME),
                where('completedAt', '>=', Timestamp.fromDate(startDate)),
                orderBy('completedAt', 'desc'),
                limit(100),
            )
        } else {
            // Overall: use original optimized query
            scoresQuery = query(
                collection(db, COLLECTION_NAME),
                orderBy('attempts', 'asc'),
                orderBy('timeSeconds', 'asc'),
                limit(limitCount),
            )
        }

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

        // Sort by guesses, then time
        if (startDate) {
            scores.sort((a, b) => {
                if (a.attempts !== b.attempts) return a.attempts - b.attempts
                return a.timeSeconds - b.timeSeconds
            })
        }

        return scores.slice(0, limitCount)
    } catch (error) {
        console.error('Error fetching scores:', error)
        return []
    }
}

export const getTopScoresBySpeed = async (
    limitCount = 10,
    period: TimePeriod = 'overall',
): Promise<Score[]> => {
    try {
        const startDate = getStartDate(period)
        let scoresQuery

        if (startDate) {
            // Time-filtered query: fetch recent entries, sort in memory
            scoresQuery = query(
                collection(db, COLLECTION_NAME),
                where('completedAt', '>=', Timestamp.fromDate(startDate)),
                orderBy('completedAt', 'desc'),
                limit(100),
            )
        } else {
            // Overall: use original optimized query
            scoresQuery = query(
                collection(db, COLLECTION_NAME),
                orderBy('timeSeconds', 'asc'),
                orderBy('attempts', 'asc'),
                limit(limitCount),
            )
        }

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

        // Sort by time, then guesses
        if (startDate) {
            scores.sort((a, b) => {
                if (a.timeSeconds !== b.timeSeconds)
                    return a.timeSeconds - b.timeSeconds
                return a.attempts - b.attempts
            })
        }

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
