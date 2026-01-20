import { useEffect, useState } from 'react'
import {
    getTopScoresByGuesses,
    getTopScoresBySpeed,
    formatTime,
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

type ScoresCache = Record<TimePeriod, { guesses: Score[]; speed: Score[] }>

const EMPTY_CACHE: ScoresCache = {
    overall: { guesses: [], speed: [] },
    today: { guesses: [], speed: [] },
    week: { guesses: [], speed: [] },
    month: { guesses: [], speed: [] },
    year: { guesses: [], speed: [] },
}

const TIME_PERIODS: TimePeriod[] = ['overall', 'today', 'week', 'month', 'year']

const Leaderboard = ({ isOpen, onClose }: LeaderboardProps) => {
    const [scoresCache, setScoresCache] = useState<ScoresCache>(EMPTY_CACHE)
    const [loading, setLoading] = useState(true)
    const [timePeriod, setTimePeriod] = useState<TimePeriod>('overall')

    useEffect(() => {
        if (isOpen) {
            loadAllScores()
        } else {
            // Clear cache when modal closes
            setScoresCache(EMPTY_CACHE)
            setTimePeriod('overall')
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

    const loadAllScores = async () => {
        try {
            setLoading(true)

            // Load all time periods in parallel
            const results = await Promise.all(
                TIME_PERIODS.map(async (period) => {
                    const [guesses, speed] = await Promise.all([
                        getTopScoresByGuesses(10, period),
                        getTopScoresBySpeed(10, period),
                    ])
                    return { period, guesses, speed }
                }),
            )

            // Build the cache from results
            const newCache = { ...EMPTY_CACHE }
            results.forEach(({ period, guesses, speed }) => {
                newCache[period] = { guesses, speed }
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
            <div className="bg-black rounded-xl border border-gray-700 p-6 w-full max-w-[1000px] mx-4 max-h-[80vh] overflow-hidden">
                <div className="relative mb-4">
                    <button
                        onClick={onClose}
                        className="absolute right-0 top-0 text-gray-400 hover:text-white text-2xl"
                    >
                        ×
                    </button>
                    <h2 className="text-2xl font-bold text-white text-center mb-2">
                        Leaderboard
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
                    <div className="flex gap-8">
                        <LeaderboardTable
                            title="Guesses"
                            scores={scoresCache[timePeriod].guesses}
                            loading={loading}
                        />
                        <LeaderboardTable
                            title="Time"
                            scores={scoresCache[timePeriod].speed}
                            loading={loading}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard
