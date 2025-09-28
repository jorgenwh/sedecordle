import { useEffect, useCallback } from 'react'

export const useKeyboardHandler = (
    gameStatus: string,
    onEnter: () => void,
    onBackspace: () => void,
    onLetter: (letter: string) => void,
) => {
    const handleKeyPress = useCallback(
        (key: string) => {
            if (gameStatus !== 'playing') return

            if (key === 'ENTER') {
                onEnter()
            } else if (key === 'BACKSPACE') {
                onBackspace()
            } else if (key.length === 1) {
                onLetter(key.toUpperCase())
            }
        },
        [gameStatus, onEnter, onBackspace, onLetter],
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

    return handleKeyPress
}
