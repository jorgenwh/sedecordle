import { useEffect, useState } from 'react'
import { GameState } from '../types/game'

interface GameStatsProps {
    gameState: GameState
    onShowLeaderboard?: () => void
    onNewGame?: () => void
}

export const GameStats = ({
    gameState,
    onShowLeaderboard,
    onNewGame,
}: GameStatsProps) => {
    const [elapsedTime, setElapsedTime] = useState(0)

    useEffect(() => {
        if (!gameState.startTime || gameState.gameStatus !== 'playing') {
            return
        }

        const interval = setInterval(() => {
            const elapsed = Math.floor(
                (Date.now() - gameState.startTime!) / 1000,
            )
            setElapsedTime(elapsed)
        }, 1000)

        return () => clearInterval(interval)
    }, [gameState.startTime, gameState.gameStatus])

    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const displayTime = () => {
        if (gameState.endTime && gameState.startTime) {
            return formatTime(
                Math.floor((gameState.endTime - gameState.startTime) / 1000),
            )
        }
        return formatTime(elapsedTime)
    }

    return (
        <div className="flex flex-wrap justify-between items-center gap-3 border-b border-game-line/60 px-2 pb-3 pt-1 sm:px-4">
            <dl className="flex items-center gap-5 sm:gap-8">
                <div>
                    <dt className="text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-game-muted">
                        Solved
                    </dt>
                    <dd className="mt-0.5 text-base font-semibold tabular-nums text-game-accent">
                        {gameState.solvedBoards.size}
                        <span className="text-xs font-normal text-game-muted">
                            {' '}
                            / 16
                        </span>
                    </dd>
                </div>
                <div>
                    <dt className="text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-game-muted">
                        Guesses
                    </dt>
                    <dd className="mt-0.5 text-base font-semibold tabular-nums">
                        {gameState.guesses.length}
                        <span className="text-xs font-normal text-game-muted">
                            {' '}
                            / 21
                        </span>
                    </dd>
                </div>
                <div>
                    <dt className="text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-game-muted">
                        Time
                    </dt>
                    <dd className="mt-0.5 text-base font-semibold tabular-nums">
                        {gameState.startTime ? displayTime() : '0:00'}
                    </dd>
                </div>
            </dl>
            {(onNewGame || onShowLeaderboard) && (
                <div className="flex items-center gap-2">
                    {onNewGame && (
                        <button
                            onClick={onNewGame}
                            onKeyDown={(event) => event.stopPropagation()}
                            className={`flex h-10 items-center justify-center gap-2 rounded-lg border px-3 text-xs font-medium transition-colors ${
                                gameState.gameStatus === 'playing'
                                    ? 'border-game-line text-game-muted hover:bg-game-tile hover:text-game-text'
                                    : 'border-game-accent bg-game-accent text-game-canvas hover:bg-game-accent/90'
                            }`}
                        >
                            <svg
                                aria-hidden="true"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 7v5h-5M20 12a8 8 0 1 0-2 5" />
                            </svg>
                            New game
                        </button>
                    )}
                    {onShowLeaderboard && (
                        <button
                            onClick={onShowLeaderboard}
                            className="flex h-10 items-center justify-center gap-2 rounded-lg border border-game-line px-3 text-xs font-medium text-game-muted transition-colors hover:bg-game-tile hover:text-game-text"
                            title="Leaderboard"
                            aria-label="Open leaderboard"
                        >
                            <svg
                                aria-hidden="true"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M8 3h8v5a4 4 0 0 1-8 0V3Z" />
                                <path d="M8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 1v5m-4 3h8m-6-3h4v3" />
                            </svg>
                            <span className="hidden sm:inline">
                                Leaderboard
                            </span>
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}
