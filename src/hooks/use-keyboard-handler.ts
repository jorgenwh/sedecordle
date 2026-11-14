import { useEffect, useCallback } from 'react'

export const useKeyboardHandler = (
    gameStatus: string,
    onEnter: () => void,
    onBackspace: () => void,
    onLetter: (letter: string) => void,
    enabled = true,
    onNewGame?: () => void,
) => {
    const handleKeyPress = useCallback(
        (key: string) => {
            if (!enabled || gameStatus !== 'playing') return

            if (key === 'ENTER') {
                onEnter()
            } else if (key === 'BACKSPACE') {
                onBackspace()
            } else if (key.length === 1) {
                onLetter(key.toUpperCase())
            }
        },
        [enabled, gameStatus, onEnter, onBackspace, onLetter],
    )

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                handleKeyPress('ENTER')
            } else if (e.key === 'Backspace') {
                handleKeyPress('BACKSPACE')
            } else if (/^[a-zA-Z]$/.test(e.key)) {
                handleKeyPress(e.key.toUpperCase())
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyPress])

    useEffect(() => {
        if (!onNewGame) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Enter' || !(e.ctrlKey || e.metaKey)) return

            e.preventDefault()
            e.stopPropagation()
            if (!e.repeat) onNewGame()
        }

        window.addEventListener('keydown', handleKeyDown, true)
        return () => window.removeEventListener('keydown', handleKeyDown, true)
    }, [onNewGame])

    return handleKeyPress
}
