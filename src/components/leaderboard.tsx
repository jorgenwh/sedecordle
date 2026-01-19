import { useEffect, useState } from 'react'
import {
    getTopScoresByGuesses,
    getTopScoresBySpeed,
    formatTime,
} from '../services/leaderboard'
import { Score } from '../types/game'

interface LeaderboardProps {
    isOpen: boolean
    onClose: () => void
}

interface LeaderboardTableProps {
    title: string
    scores: Score[]
    loading: boolean
}

const LeaderboardTable = ({
    title,
    scores,
    loading,
}: LeaderboardTableProps) => {
    const truncateName = (name: string, maxLength = 12) => {
        return name.length > maxLength
            ? name.slice(0, maxLength - 1) + '…'
            : name
    }

    return (
        <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-3 text-center">
                {title}
            </h3>
            {loading ? (
                <div className="text-center text-gray-400 py-8">
                    Loading scores...
                </div>
            ) : (
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="border-b border-gray-700">
                            <th className="w-8 text-left text-gray-400 pb-2">
                                #
                            </th>
                            <th className="w-28 text-left text-gray-400 pb-2">
                                Name
                            </th>
                            <th className="w-20 text-center text-gray-400 pb-2">
                                Guesses
                            </th>
                            <th className="w-16 text-center text-gray-400 pb-2">
                                Time
                            </th>
                            <th className="w-20 text-right text-gray-400 pb-2">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 10 }).map((_, index) => {
                            const score = scores[index]
                            return (
                                <tr
                                    key={index}
                                    className="border-b border-gray-800 h-10"
                                >
                                    <td className="py-2 text-gray-400">
                                        {index + 1}
                                    </td>
                                    <td className="py-2 text-white">
                                        {score
                                            ? truncateName(score.playerName)
                                            : '-'}
                                    </td>
                                    <td className="py-2 text-center text-white">
                                        {score ? `${score.attempts}/21` : '-'}
                                    </td>
                                    <td className="py-2 text-center text-white">
                                        {score
                                            ? formatTime(score.timeSeconds)
                                            : '-'}
                                    </td>
                                    <td className="py-2 text-right text-gray-400">
                                        {score
                                            ? score.completedAt.toLocaleDateString()
                                            : '-'}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}

const Leaderboard = ({ isOpen, onClose }: LeaderboardProps) => {
    const [guessesScores, setGuessesScores] = useState<Score[]>([])
    const [speedScores, setSpeedScores] = useState<Score[]>([])
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
            const [guessesData, speedData] = await Promise.all([
                getTopScoresByGuesses(10),
                getTopScoresBySpeed(10),
            ])
            setGuessesScores(guessesData)
            setSpeedScores(speedData)
        } catch (error) {
            console.error('Error loading scores:', error)
        } finally {
            setLoading(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-black rounded-xl border border-gray-700 p-6 w-full max-w-[1000px] mx-4 max-h-[80vh] overflow-hidden">
                <div className="relative flex justify-center items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">
                        Leaderboard
                    </h2>
                    <button
                        onClick={onClose}
                        className="absolute right-0 text-gray-400 hover:text-white text-2xl"
                    >
                        ×
                    </button>
                </div>

                <div className="overflow-y-auto max-h-[60vh]">
                    <div className="flex gap-8">
                        <LeaderboardTable
                            title="Guesses"
                            scores={guessesScores}
                            loading={loading}
                        />
                        <LeaderboardTable
                            title="Time"
                            scores={speedScores}
                            loading={loading}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard
