import { useEffect, useState } from 'react'
import { getTopScores, formatTime } from '../services/leaderboard'
import { Score } from '../types/game'

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

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey)
            return () => {
                document.removeEventListener('keydown', handleEscKey)
            }
        }
    }, [isOpen, onClose])

    const loadScores = async () => {
        try {
            setLoading(true)
            const scoreData = await getTopScores(100)
            setScores(scoreData)
        } catch (error) {
            console.error('Error loading scores:', error)
        } finally {
            setLoading(false)
        }
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
