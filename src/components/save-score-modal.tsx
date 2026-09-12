import { useState, useEffect } from 'react'
import { saveScore } from '../services/leaderboard'
import { GameState } from '../types/game'

interface SaveScoreModalProps {
    isOpen: boolean
    onClose: () => void
    onSaveSuccess: () => void
    gameState: GameState
}

export const SaveScoreModal = ({
    isOpen,
    onClose,
    onSaveSuccess,
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

            await saveScore({
                playerName: playerName.trim(),
                attempts: gameState.guesses.length,
                timeSeconds,
                completedAt: new Date(gameState.endTime!),
                targetWords: gameState.targetWords,
            })

            onSaveSuccess()
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
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="save-score-title"
                className="bg-game-surface border border-game-line rounded-2xl p-6 max-w-md w-full max-h-[90dvh] overflow-y-auto shadow-2xl"
            >
                <div className="flex justify-between items-center mb-4">
                    <h2
                        id="save-score-title"
                        className="text-2xl font-semibold tracking-tight text-game-text"
                    >
                        Beautifully solved.
                    </h2>
                    <button
                        onClick={onClose}
                        disabled={isSaving}
                        aria-label="Close save score"
                        className="h-8 w-8 rounded-lg text-game-muted hover:bg-game-tile hover:text-game-text text-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ×
                    </button>
                </div>
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
                            className="w-full px-3 py-3 bg-game-canvas border border-game-line text-game-text rounded-lg placeholder:text-game-muted focus:outline-none focus:ring-2 focus:ring-game-accent"
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
                            className="flex-1 bg-game-accent text-game-canvas font-semibold px-4 py-3 rounded-lg hover:bg-game-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSaving ? 'Saving...' : 'Save Score'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSaving}
                            className="flex-1 bg-game-tile text-game-text px-4 py-3 rounded-lg hover:bg-game-line disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Skip
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
