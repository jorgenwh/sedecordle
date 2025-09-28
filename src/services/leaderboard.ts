import {
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    getDocs,
    Timestamp,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import { Score } from '../types/game'

const COLLECTION_NAME = 'leaderboard'

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

export const getTopScores = async (limitCount = 10): Promise<Score[]> => {
    try {
        const scoresQuery = query(
            collection(db, COLLECTION_NAME),
            orderBy('attempts', 'asc'),
            orderBy('timeSeconds', 'asc'),
            limit(limitCount),
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

        return scores
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
