import { useEffect, useState } from 'react'
import { GameState } from '../types/game'

interface GameStatsProps {
    gameState: GameState
    onShowLeaderboard: () => void
}

export const GameStats = ({ gameState, onShowLeaderboard }: GameStatsProps) => {
    const [elapsedTime, setElapsedTime] = useState(0)

    useEffect(() => {
        if (!gameState.startTime || gameState.gameStatus !== 'playing') {
            return
        }

        const interval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - gameState.startTime!) / 1000)
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
        <div className="flex justify-center items-center w-full px-4 py-3 bg-gray-800">
            <div className="flex-1 text-left">
                <span className="text-gray-400">Boards: </span>
                <span className="text-white font-semibold">
                    {gameState.solvedBoards.size}/16
                </span>
            </div>
            <div className="flex-1 text-center">
                <span className="text-gray-400">Guesses: </span>
                <span className="text-white font-semibold">
                    {gameState.guesses.length}/21
                </span>
            </div>
            <div className="flex-1 text-right">
                <span className="text-gray-400">Time: </span>
                <span className="text-white font-semibold">
                    {gameState.startTime ? displayTime() : '0:00'}
                </span>
            </div>
            <button
                onClick={onShowLeaderboard}
                className="ml-4 text-gray-400 hover:text-white"
                title="Leaderboard"
            >
                📊
            </button>
        </div>
    )
}