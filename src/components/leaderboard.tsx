import { useEffect, useState } from 'react'
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'
import { db, Score } from '../config/firebase'

interface LeaderboardProps {
    isOpen: boolean
    onClose: () => void
}

const Leaderboard = ({ isOpen, onClose }: LeaderboardProps) => {
    const [scores, setScores] = useState<Score[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (isOpen) {
            loadScores()
        }
    }, [isOpen])

    const loadScores = async () => {
        try {
            setLoading(true)
            const scoresRef = collection(db, 'scores')
            const q = query(
                scoresRef,
                orderBy('attempts', 'asc'),
                orderBy('timeSeconds', 'asc'),
                limit(50),
            )
            const snapshot = await getDocs(q)
            const scoreData = snapshot.docs.map((doc) => ({
                ...doc.data(),
                completedAt: doc.data().completedAt.toDate(),
            })) as Score[]
            setScores(scoreData)
        } catch (error) {
            console.error('Error loading scores:', error)
        } finally {
            setLoading(false)
        }
    }

    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">
                        Leaderboard
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white text-2xl"
                    >
                        ×
                    </button>
                </div>

                <div className="overflow-y-auto max-h-[60vh]">
                    {loading ? (
                        <div className="text-center text-gray-400 py-8">
                            Loading scores...
                        </div>
                    ) : scores.length === 0 ? (
                        <div className="text-center text-gray-400 py-8">
                            No scores yet. Be the first!
                        </div>
                    ) : (
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="text-left text-gray-400 pb-2">
                                        #
                                    </th>
                                    <th className="text-left text-gray-400 pb-2">
                                        Name
                                    </th>
                                    <th className="text-center text-gray-400 pb-2">
                                        Attempts
                                    </th>
                                    <th className="text-center text-gray-400 pb-2">
                                        Time
                                    </th>
                                    <th className="text-right text-gray-400 pb-2">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {scores.map((score, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-800"
                                    >
                                        <td className="py-2 text-gray-400">
                                            {index + 1}
                                        </td>
                                        <td className="py-2 text-white">
                                            {score.playerName}
                                        </td>
                                        <td className="py-2 text-center text-white">
                                            {score.attempts}/21
                                        </td>
                                        <td className="py-2 text-center text-white">
                                            {formatTime(score.timeSeconds)}
                                        </td>
                                        <td className="py-2 text-right text-gray-400">
                                            {new Date(
                                                score.completedAt,
                                            ).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Leaderboard
