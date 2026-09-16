import { useState, useEffect } from 'react'
import { saveScore } from '../services/leaderboard'
import { GameState } from '../types/game'

interface SaveScoreModalProps {
    mode: 'free-play' | 'daily'
    isPreview?: boolean
    isOpen: boolean
    onClose: () => void
    onSaveSuccess: () => void
    gameState: GameState
}

export const SaveScoreModal = ({
    mode,
    isPreview = false,
    isOpen,
    onClose,
    onSaveSuccess,
    gameState,
}: SaveScoreModalProps) => {
    const [playerName, setPlayerName] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const [error, setError] = useState('')
    const [shareMessage, setShareMessage] = useState('')

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

    if (
        !isOpen ||
        gameState.gameStatus === 'playing' ||
        !gameState.endTime ||
        !gameState.startTime
    )
        return null

    const timeSeconds = Math.floor(
        (gameState.endTime - gameState.startTime) / 1000,
    )
    const minutes = Math.floor(timeSeconds / 60)
    const seconds = timeSeconds % 60
    const resultText = `You solved ${gameState.solvedBoards.size} out of ${gameState.targetWords.length} boards in ${gameState.guesses.length} guesses and ${minutes}:${seconds.toString().padStart(2, '0')}!`

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (mode === 'free-play' && !playerName.trim()) {
            setError('Please enter your name')
            return
        }

        setIsSaving(true)
        setError('')
        setShareMessage('')

        try {
            if (mode === 'daily') {
                const text = `Superwordle Daily\n${resultText}\nhttps://superwordle.com`
                if (navigator.share) {
                    await navigator.share({ text })
                } else {
                    await navigator.clipboard.writeText(text)
                    setShareMessage('Result copied to clipboard.')
                }
                return
            }

            if (!isPreview) {
                await saveScore({
                    playerName: playerName.trim(),
                    attempts: gameState.guesses.length,
                    timeSeconds,
                    completedAt: new Date(gameState.endTime!),
                    targetWords: gameState.targetWords,
                })
            }

            onSaveSuccess()
        } catch (err) {
            if (err instanceof DOMException && err.name === 'AbortError') {
                return
            }
            setError(
                mode === 'daily'
                    ? 'Failed to share result. Please try again.'
                    : 'Failed to save score. Please try again.',
            )
            console.error('Error submitting result:', err)
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="save-score-title"
                className="relative bg-gradient-to-br from-game-accent/[0.06] via-game-surface to-game-surface bg-game-surface border border-game-line/80 rounded-3xl p-6 sm:p-10 max-w-2xl w-full max-h-[90dvh] overflow-y-auto shadow-[0_24px_100px_rgba(0,0,0,0.6)]"
            >
                <div className="flex justify-between items-center gap-3 mb-8 sm:mb-10">
                    <span className="rounded-full border border-game-line/60 bg-game-canvas/30 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-game-muted">
                        {mode === 'daily' ? 'Daily' : 'Free play'}
                    </span>
                    <button
                        onClick={onClose}
                        disabled={isSaving}
                        aria-label="Close result"
                        className="h-10 w-10 shrink-0 rounded-full text-game-muted hover:bg-game-tile hover:text-game-text text-2xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ×
                    </button>
                </div>
                <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-7 mb-8 sm:mb-10">
                    <h2
                        id="save-score-title"
                        className="text-center sm:text-left font-normal text-game-muted"
                    >
                        <span className="block text-base">You solved</span>
                        <span className="mt-2 block text-3xl sm:text-4xl font-semibold tracking-tight text-game-text">
                            <span className="text-game-accent">
                                {gameState.solvedBoards.size}
                            </span>{' '}
                            <span className="text-lg sm:text-xl font-normal text-game-muted">
                                out of
                            </span>{' '}
                            {gameState.targetWords.length}{' '}
                            <span className="text-lg sm:text-xl font-normal">
                                boards
                            </span>
                        </span>
                        <span className="mt-4 block text-base leading-relaxed">
                            in{' '}
                            <span className="font-semibold tabular-nums text-game-text">
                                {gameState.guesses.length}
                            </span>{' '}
                            guesses and{' '}
                            <span className="font-semibold tabular-nums text-game-text">
                                {minutes}:{seconds.toString().padStart(2, '0')}
                            </span>
                            !
                        </span>
                    </h2>
                    <div
                        aria-hidden="true"
                        className="grid grid-cols-4 gap-1.5 shrink-0 rounded-2xl border border-game-line/40 bg-game-canvas/30 p-3"
                    >
                        {gameState.targetWords.map((_, index) => (
                            <span
                                key={index}
                                className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-md border text-[10px] font-medium tabular-nums ${
                                    gameState.solvedBoards.has(index)
                                        ? 'border-game-correct/60 bg-game-correct/20 text-game-accent'
                                        : 'border-game-line/60 bg-game-absent text-game-muted'
                                }`}
                            >
                                {index + 1}
                            </span>
                        ))}
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="border-t border-game-line/60 pt-7 sm:pt-8"
                >
                    {mode === 'free-play' && (
                        <div className="mb-6 sm:mb-8">
                            <label
                                htmlFor="playerName"
                                className="block text-sm font-medium text-game-muted mb-3"
                            >
                                Enter your name for the leaderboard:
                            </label>
                            <input
                                type="text"
                                id="playerName"
                                value={playerName}
                                onChange={(e) => setPlayerName(e.target.value)}
                                className="w-full px-4 py-4 bg-game-canvas/60 border border-game-line text-game-text rounded-xl placeholder:text-game-muted focus:outline-none focus:ring-2 focus:ring-game-accent"
                                placeholder="Your name"
                                maxLength={50}
                                disabled={isSaving}
                            />
                        </div>
                    )}
                    {error && (
                        <p role="alert" className="mb-4 text-sm text-red-400">
                            {error}
                        </p>
                    )}
                    {shareMessage && (
                        <p
                            role="status"
                            className="mb-4 text-sm text-game-accent"
                        >
                            {shareMessage}
                        </p>
                    )}

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="flex-1 bg-game-accent text-game-canvas font-semibold px-4 py-4 rounded-xl hover:bg-game-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {mode === 'daily'
                                ? isSaving
                                    ? 'Sharing...'
                                    : 'Share'
                                : isSaving
                                  ? 'Saving...'
                                  : 'Save Score'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSaving}
                            className="flex-1 border border-game-line bg-transparent text-game-text px-4 py-4 rounded-xl hover:bg-game-tile transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
