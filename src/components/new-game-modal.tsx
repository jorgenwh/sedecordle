import { useEffect, useRef } from 'react'

interface NewGameModalProps {
    onClose: () => void
    onConfirm: () => void
}

export const NewGameModal = ({ onClose, onConfirm }: NewGameModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current!
        dialog.showModal()
        return () => dialog.close()
    }, [])

    return (
        <dialog
            ref={dialogRef}
            onCancel={onClose}
            aria-labelledby="new-game-title"
            aria-describedby="new-game-description"
            className="w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-game-line bg-game-surface p-6 text-game-text shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm"
        >
            <h2 id="new-game-title" className="text-xl font-semibold">
                Start a new game?
            </h2>
            <p
                id="new-game-description"
                className="mt-3 text-sm text-game-muted"
            >
                Your current progress will be lost.
            </p>
            <div className="mt-6 flex gap-3">
                <button
                    autoFocus
                    onClick={onClose}
                    className="flex-1 rounded-lg bg-game-tile px-3 py-3 text-sm font-medium hover:bg-game-line"
                >
                    Keep playing
                </button>
                <button
                    onClick={onConfirm}
                    className="flex-1 rounded-lg bg-game-accent px-3 py-3 text-sm font-semibold text-game-canvas hover:bg-game-accent/90"
                >
                    New game
                </button>
            </div>
        </dialog>
    )
}
