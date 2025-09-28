import { useState, useEffect } from 'react'
import { saveScore } from '../services/leaderboard'
import { GameState } from '../types/game'

interface SaveScoreModalProps {
    isOpen: boolean
    onClose: () => void
    gameState: GameState
}

export const SaveScoreModal = ({
    isOpen,
    onClose,
    gameState,
}: SaveScoreModalProps) => {
    const [playerName, setPlayerName] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen && !isSaving) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey)
            return () => {
                document.removeEventListener('keydown', handleEscKey)
            }
        }
    }, [isOpen, onClose, isSaving])

    if (!isOpen || !gameState.endTime || !gameState.startTime) return null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!playerName.trim()) {
            setError('Please enter your name')
            return
        }

        setIsSaving(true)
        setError('')

        try {
            const timeSeconds = Math.floor(
                (gameState.endTime! - gameState.startTime!) / 1000,
            )

            const boardsSolved = gameState.guesses
                .map((guess, guessIndex) => {
                    const solvedAtThisGuess: number[] = []
                    gameState.targetWords.forEach((target, boardIndex) => {
                        if (
                            guess === target &&
                            !gameState.guesses
                                .slice(0, guessIndex)
                                .includes(target)
                        ) {
                            solvedAtThisGuess.push(boardIndex)
                        }
                    })
                    return solvedAtThisGuess
                })
                .flat()

            await saveScore({
                playerName: playerName.trim(),
                attempts: gameState.guesses.length,
                timeSeconds,
                completedAt: new Date(gameState.endTime!),
                boards: boardsSolved,
                targetWords: gameState.targetWords,
            })

            onClose()
        } catch (err) {
            setError('Failed to save score. Please try again.')
            console.error('Error saving score:', err)
        } finally {
            setIsSaving(false)
        }
    }

    const timeSeconds = Math.floor(
        (gameState.endTime - gameState.startTime) / 1000,
    )
    const minutes = Math.floor(timeSeconds / 60)
    const seconds = timeSeconds % 60

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold text-white mb-4">
                    🎉 Congratulations!
                </h2>
                <p className="text-gray-300 mb-6">
                    You solved all 16 boards in {gameState.guesses.length}{' '}
                    guesses and {minutes}:{seconds.toString().padStart(2, '0')}!
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="playerName"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Enter your name for the leaderboard:
                        </label>
                        <input
                            type="text"
                            id="playerName"
                            value={playerName}
                            onChange={(e) => setPlayerName(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your name"
                            maxLength={50}
                            disabled={isSaving}
                        />
                        {error && (
                            <p className="mt-2 text-sm text-red-400">{error}</p>
                        )}
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSaving ? 'Saving...' : 'Save Score'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSaving}
                            className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Skip
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
