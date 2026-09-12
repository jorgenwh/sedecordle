import { useEffect, useState } from 'react'
import {
    getTopScores,
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
}

interface LeaderboardTableProps {
    scores: Score[]
    loading: boolean
}

const PODIUM_STYLES = [
    {
        label: '1st place, gold crown',
        badge: 'text-amber-300 bg-amber-300/10 ring-amber-300/20',
        row: 'bg-amber-300/[0.06]',
    },
    {
        label: '2nd place, silver medal',
        badge: 'text-slate-200 bg-slate-200/10 ring-slate-200/20',
        row: 'bg-slate-200/[0.05]',
    },
    {
        label: '3rd place, bronze medal',
        badge: 'text-orange-300 bg-orange-300/10 ring-orange-300/20',
        row: 'bg-orange-300/[0.06]',
    },
]

const PodiumIcon = ({ rank }: { rank: number }) => (
    <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        {rank === 1 ? (
            <>
                <path
                    d="m3 7 4.5 3L12 4l4.5 6L21 7l-2 11H5L3 7Z"
                    fill="currentColor"
                    fillOpacity={0.25}
                />
                <path d="M6 21h12" />
                <circle cx="12" cy="14" r="1" fill="currentColor" />
            </>
        ) : (
            <>
                <path
                    d="M6 3h4l2 5 2-5h4l-4 8h-4L6 3Z"
                    fill="currentColor"
                    fillOpacity={0.2}
                />
                <circle
                    cx="12"
                    cy="15"
                    r="6"
                    fill="currentColor"
                    fillOpacity={0.2}
                />
                <text
                    x="12"
                    y="17.5"
                    textAnchor="middle"
                    fontSize="7"
                    fontWeight="700"
                    fill="currentColor"
                    stroke="none"
                >
                    {rank}
                </text>
            </>
        )}
    </svg>
)

const LeaderboardTable = ({ scores, loading }: LeaderboardTableProps) => {
    if (loading) {
        return (
            <div
                role="status"
                className="py-16 text-center text-sm text-game-muted"
            >
                <div
                    aria-hidden="true"
                    className="mx-auto mb-4 h-6 w-6 rounded-full border-2 border-game-line border-t-game-accent animate-spin"
                />
                Loading scores...
            </div>
        )
    }

    if (scores.length === 0) {
        return (
            <div role="status" className="px-4 py-16 text-center">
                <p className="font-semibold text-game-text">No scores yet</p>
                <p className="mt-2 text-sm text-game-muted">
                    Finish all 16 boards to claim a spot in this period.
                </p>
            </div>
        )
    }

    return (
        <table className="w-full table-fixed border-separate border-spacing-x-0 border-spacing-y-1 text-sm">
            <caption className="sr-only">Top 10 scores</caption>
            <thead>
                <tr className="text-[10px] sm:text-[11px] uppercase tracking-wider text-game-muted">
                    <th scope="col" className="w-12 pb-2 text-center">
                        #
                    </th>
                    <th scope="col" className="pb-2 pl-2 text-left">
                        Name
                    </th>
                    <th scope="col" className="w-20 pb-2 pr-2 text-right">
                        Score
                    </th>
                    <th
                        scope="col"
                        className="hidden w-20 pb-2 text-center sm:table-cell"
                    >
                        Guesses
                    </th>
                    <th
                        scope="col"
                        className="hidden w-16 pb-2 text-center sm:table-cell"
                    >
                        Time
                    </th>
                    <th
                        scope="col"
                        className="hidden w-24 pb-2 pr-3 text-right sm:table-cell"
                    >
                        Date
                    </th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 10 }).map((_, index) => {
                    const score = scores[index]
                    const podium = score ? PODIUM_STYLES[index] : undefined
                    return (
                        <tr
                            key={index}
                            className={`transition-colors ${podium ? podium.row : 'hover:bg-game-tile/30'}`}
                        >
                            <td className="rounded-l-lg border-b border-game-line/20 py-2 text-center tabular-nums text-game-muted">
                                {podium ? (
                                    <span
                                        role="img"
                                        aria-label={podium.label}
                                        className={`mx-auto flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-inset ${podium.badge}`}
                                    >
                                        <PodiumIcon rank={index + 1} />
                                    </span>
                                ) : (
                                    index + 1
                                )}
                            </td>
                            <td className="border-b border-game-line/20 py-2 pl-2 pr-2 text-game-text">
                                <span
                                    className="block truncate font-medium"
                                    title={score?.playerName}
                                >
                                    {score ? score.playerName : '—'}
                                </span>
                                {score && (
                                    <span className="mt-1 block text-[11px] text-game-muted sm:hidden">
                                        <span className="sr-only">
                                            Guesses:{' '}
                                        </span>
                                        {score.attempts}/21
                                        <span aria-hidden="true"> · </span>
                                        <span className="sr-only">Time: </span>
                                        {formatTime(score.timeSeconds)}
                                    </span>
                                )}
                            </td>
                            <td className="rounded-r-lg border-b border-game-line/20 py-2 pr-2 text-right tabular-nums sm:rounded-none">
                                <span className="text-lg font-bold leading-6 text-game-text">
                                    {score ? computeScore(score) : '—'}
                                </span>
                                {score && (
                                    <span className="mt-1 block text-[10px] text-game-muted sm:hidden">
                                        <span className="sr-only">
                                            Completed:{' '}
                                        </span>
                                        {score.completedAt.toLocaleDateString()}
                                    </span>
                                )}
                            </td>
                            <td className="hidden border-b border-game-line/20 py-2 text-center tabular-nums text-game-muted sm:table-cell">
                                {score ? `${score.attempts}/21` : '—'}
                            </td>
                            <td className="hidden border-b border-game-line/20 py-2 text-center tabular-nums text-game-muted sm:table-cell">
                                {score ? formatTime(score.timeSeconds) : '—'}
                            </td>
                            <td className="hidden rounded-r-lg border-b border-game-line/20 py-2 pr-3 text-right text-xs tabular-nums text-game-muted sm:table-cell">
                                {score
                                    ? score.completedAt.toLocaleDateString()
                                    : '—'}
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

const Leaderboard = ({ isOpen, onClose }: LeaderboardProps) => {
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

            const results = await Promise.all(
                TIME_PERIODS.map(async (period) => {
                    const scores = await getTopScores(10, period)
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 z-50">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="leaderboard-title"
                className="flex flex-col bg-gradient-to-br from-game-surface via-game-surface to-game-canvas rounded-2xl border border-game-line/80 p-4 sm:p-6 w-full max-w-[760px] max-h-[90dvh] overflow-hidden shadow-2xl shadow-black/60"
            >
                <div className="relative mb-5 shrink-0">
                    <button
                        onClick={onClose}
                        aria-label="Close leaderboard"
                        className="absolute right-0 top-0 h-9 w-9 rounded-lg text-game-muted hover:bg-game-tile hover:text-game-text text-2xl transition-colors"
                    >
                        ×
                    </button>
                    <h2
                        id="leaderboard-title"
                        className="text-2xl sm:text-3xl font-semibold tracking-tight text-game-text text-center px-9 mb-6"
                    >
                        <span className="text-game-correct">L</span>e
                        <span className="text-game-present">a</span>der
                        <span className="text-game-correct">b</span>o
                        <span className="text-game-present">a</span>rd
                    </h2>
                    <div className="flex justify-center">
                        <div
                            role="group"
                            aria-label="Leaderboard period"
                            className="grid w-full grid-cols-5 gap-1 rounded-xl border border-game-line/50 bg-game-canvas/60 p-1 sm:inline-flex sm:w-auto"
                        >
                            {Object.entries(TIME_PERIOD_LABELS).map(
                                ([value, label]) => (
                                    <button
                                        key={value}
                                        aria-label={label}
                                        aria-pressed={timePeriod === value}
                                        onClick={() =>
                                            setTimePeriod(value as TimePeriod)
                                        }
                                        className={`px-1 sm:px-3 min-h-10 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                                            timePeriod === value
                                                ? 'bg-game-accent text-game-canvas'
                                                : 'text-game-muted hover:bg-game-tile/40 hover:text-game-text'
                                        }`}
                                    >
                                        <span className="capitalize sm:hidden">
                                            {label.replace('Last ', '')}
                                        </span>
                                        <span className="hidden sm:inline">
                                            {label}
                                        </span>
                                    </button>
                                ),
                            )}
                        </div>
                    </div>
                </div>

                <div
                    className="game-scroll min-h-0 overflow-auto"
                    aria-busy={loading}
                >
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
