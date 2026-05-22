import { useEffect, useState } from 'react'
import {
    getTopScores,
    getCollectionName,
    formatTime,
    computeScore,
    TimePeriod,
} from '../services/leaderboard'
import { Score } from '../types/game'

const TIME_PERIOD_LABELS: Record<TimePeriod, string> = {
    overall: 'Overall',
    today: 'Today',
    week: 'Last week',
    month: 'Last month',
    year: 'Last year',
}

interface LeaderboardProps {
    isOpen: boolean
    onClose: () => void
    hornyMode: boolean
}

interface LeaderboardTableProps {
    scores: Score[]
    loading: boolean
}

const truncateName = (name: string, maxLength = 12) => {
    return name.length > maxLength ? name.slice(0, maxLength - 1) + '…' : name
}

const LeaderboardTable = ({ scores, loading }: LeaderboardTableProps) => {
    if (loading) {
        return (
            <div className="text-center text-gray-400 py-8">
                Loading scores...
            </div>
        )
    }

    return (
        <table className="w-full table-fixed">
            <thead>
                <tr className="border-b border-gray-700">
                    <th className="w-10 text-left text-gray-400 pb-2">#</th>
                    <th className="w-32 text-left text-gray-400 pb-2">Name</th>
                    <th className="w-20 text-center text-gray-400 pb-2">
                        Score
                    </th>
                    <th className="w-20 text-center text-gray-400 pb-2">
                        Guesses
                    </th>
                    <th className="w-20 text-center text-gray-400 pb-2">
                        Time
                    </th>
                    <th className="w-24 text-right text-gray-400 pb-2">Date</th>
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
                            <td className="py-2 text-gray-400">{index + 1}</td>
                            <td className="py-2 text-white">
                                {score ? truncateName(score.playerName) : '-'}
                            </td>
                            <td className="py-2 text-center text-white">
                                {score ? computeScore(score) : '-'}
                            </td>
                            <td className="py-2 text-center text-white">
                                {score ? `${score.attempts}/21` : '-'}
                            </td>
                            <td className="py-2 text-center text-white">
                                {score ? formatTime(score.timeSeconds) : '-'}
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
    )
}

type ScoresCache = Record<TimePeriod, Score[]>

const EMPTY_CACHE: ScoresCache = {
    overall: [],
    today: [],
    week: [],
    month: [],
    year: [],
}

const TIME_PERIODS: TimePeriod[] = ['overall', 'today', 'week', 'month', 'year']

const Leaderboard = ({ isOpen, onClose, hornyMode }: LeaderboardProps) => {
    const [scoresCache, setScoresCache] = useState<ScoresCache>(EMPTY_CACHE)
    const [loading, setLoading] = useState(true)
    const [timePeriod, setTimePeriod] = useState<TimePeriod>('overall')

    useEffect(() => {
        if (isOpen) {
            loadAllScores()
        } else {
            setScoresCache(EMPTY_CACHE)
            setTimePeriod('overall')
        }
    }, [isOpen, hornyMode])

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

    const loadAllScores = async () => {
        try {
            setLoading(true)
            const collectionName = getCollectionName(hornyMode)

            const results = await Promise.all(
                TIME_PERIODS.map(async (period) => {
                    const scores = await getTopScores(
                        10,
                        period,
                        collectionName,
                    )
                    return { period, scores }
                }),
            )

            const newCache = { ...EMPTY_CACHE }
            results.forEach(({ period, scores }) => {
                newCache[period] = scores
            })
            setScoresCache(newCache)
        } catch (error) {
            console.error('Error loading scores:', error)
        } finally {
            setLoading(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-black rounded-xl border border-gray-700 p-6 w-full max-w-[700px] mx-4 max-h-[80vh] overflow-hidden">
                <div className="relative mb-4">
                    <button
                        onClick={onClose}
                        className="absolute right-0 top-0 text-gray-400 hover:text-white text-2xl"
                    >
                        ×
                    </button>
                    <h2 className="text-2xl font-bold text-white text-center mb-2">
                        {hornyMode ? '🔥 Horny Leaderboard' : 'Leaderboard'}
                    </h2>
                    <div className="flex justify-center">
                        <div className="inline-flex rounded-lg border border-gray-700 p-1">
                            {Object.entries(TIME_PERIOD_LABELS).map(
                                ([value, label]) => (
                                    <button
                                        key={value}
                                        onClick={() =>
                                            setTimePeriod(value as TimePeriod)
                                        }
                                        className={`px-3 py-1 text-sm rounded-md transition-colors ${
                                            timePeriod === value
                                                ? 'bg-gray-700 text-white'
                                                : 'text-gray-400 hover:text-white'
                                        }`}
                                    >
                                        {label}
                                    </button>
                                ),
                            )}
                        </div>
                    </div>
                </div>

                <div className="overflow-y-auto max-h-[60vh]">
                    <LeaderboardTable
                        scores={scoresCache[timePeriod]}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    )
}

export default Leaderboard
