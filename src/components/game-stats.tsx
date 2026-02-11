import { useEffect, useState } from 'react'
import { GameState } from '../types/game'

interface GameStatsProps {
    gameState: GameState
    onShowLeaderboard: () => void
    hornyMode: boolean
    onToggleHornyMode: () => void
}

export const GameStats = ({
    gameState,
    onShowLeaderboard,
    hornyMode,
    onToggleHornyMode,
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
        <div className="flex justify-between items-center w-full px-4 py-3 bg-black">
            <button
                onClick={onShowLeaderboard}
                className="text-gray-400 hover:text-white"
                title="Leaderboard"
            >
                🏆
            </button>
            <div className="flex justify-center items-center gap-8">
                <div>
                    <span className="text-gray-400">Boards: </span>
                    <span className="text-white font-semibold">
                        {gameState.solvedBoards.size}/16
                    </span>
                </div>
                <div>
                    <span className="text-gray-400">Guesses: </span>
                    <span className="text-white font-semibold">
                        {gameState.guesses.length}/21
                    </span>
                </div>
                <div>
                    <span className="text-gray-400">Time: </span>
                    <span className="text-white font-semibold">
                        {gameState.startTime ? displayTime() : '0:00'}
                    </span>
                </div>
            </div>
            <button
                onClick={onToggleHornyMode}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    hornyMode
                        ? 'bg-pink-600 text-white shadow-[0_0_10px_rgba(236,72,153,0.5)]'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
                title="Toggle horny mode"
            >
                <span>{hornyMode ? '🔥' : '😇'}</span>
                <span>Horny</span>
            </button>
        </div>
    )
}
