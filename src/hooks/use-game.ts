import { useState, useCallback } from 'react'
import { getRandomWords, isValidWord } from '../utils/words'
import { GameState, UsedLetterStatus } from '../types/game'

export const useGame = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [gameState, setGameState] = useState<GameState>({
        targetWords: [],
        guesses: [],
        currentGuess: '',
        gameStatus: 'playing',
        solvedBoards: new Set(),
        startTime: null,
        endTime: null,
    })
    const [usedLetters, setUsedLetters] = useState<
        Map<string, UsedLetterStatus>
    >(new Map())
    const [message, setMessage] = useState('')

    const initializeGame = async () => {
        setIsLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 500))

        const words = getRandomWords(16)
        setGameState({
            targetWords: words,
            guesses: [],
            currentGuess: '',
            gameStatus: 'playing',
            solvedBoards: new Set(),
            startTime: null,
            endTime: null,
        })
        setUsedLetters(new Map())
        setMessage('')
        setIsLoading(false)
    }

    const updateUsedLetters = useCallback(
        (guess: string, targetWords: string[]) => {
            const newUsedLetters = new Map(usedLetters)

            for (let i = 0; i < guess.length; i++) {
                const letter = guess[i]
                let status: UsedLetterStatus = 'absent'

                for (const target of targetWords) {
                    if (target[i] === letter) {
                        status = 'correct'
                        break
                    } else if (target.includes(letter) && status === 'absent') {
                        status = 'present'
                    }
                }

                const currentStatus = newUsedLetters.get(letter)
                if (
                    !currentStatus ||
                    (currentStatus === 'absent' && status !== 'absent') ||
                    (currentStatus === 'present' && status === 'correct')
                ) {
                    newUsedLetters.set(letter, status)
                }
            }

            setUsedLetters(newUsedLetters)
        },
        [usedLetters],
    )

    const submitGuess = useCallback(() => {
        if (gameState.currentGuess.length !== 5) return false

        if (!isValidWord(gameState.currentGuess)) {
            return false
        }

        const newGuesses = [...gameState.guesses, gameState.currentGuess]
        const newSolvedBoards = new Set(gameState.solvedBoards)

        gameState.targetWords.forEach((target, index) => {
            if (target === gameState.currentGuess.toUpperCase()) {
                newSolvedBoards.add(index)
            }
        })

        updateUsedLetters(
            gameState.currentGuess.toUpperCase(),
            gameState.targetWords,
        )

        const startTime = gameState.startTime || Date.now()
        const allSolved = newSolvedBoards.size === 16
        const gameOver = allSolved || newGuesses.length >= 21

        setGameState({
            ...gameState,
            guesses: newGuesses,
            currentGuess: '',
            solvedBoards: newSolvedBoards,
            gameStatus: allSolved
                ? 'won'
                : newGuesses.length >= 21
                  ? 'lost'
                  : 'playing',
            startTime,
            endTime: gameOver ? Date.now() : null,
        })

        if (allSolved) {
            setMessage(
                `🎉 Congratulations! You solved all 16 boards in ${newGuesses.length} guesses!`,
            )
        } else if (newGuesses.length >= 21) {
            setMessage(
                `Game Over! You solved ${newSolvedBoards.size}/16 boards.`,
            )
        }

        return true
    }, [gameState, updateUsedLetters])

    const updateCurrentGuess = useCallback((newGuess: string) => {
        setGameState((prev) => ({
            ...prev,
            currentGuess: newGuess,
        }))
    }, [])

    const deleteLastLetter = useCallback(() => {
        setGameState((prev) => ({
            ...prev,
            currentGuess: prev.currentGuess.slice(0, -1),
        }))
    }, [])

    const addLetter = useCallback((letter: string) => {
        setGameState((prev) => {
            if (prev.currentGuess.length < 5) {
                return {
                    ...prev,
                    currentGuess: prev.currentGuess + letter.toUpperCase(),
                }
            }
            return prev
        })
    }, [])

    return {
        isLoading,
        gameState,
        usedLetters,
        message,
        initializeGame,
        submitGuess,
        updateCurrentGuess,
        deleteLastLetter,
        addLetter,
    }
}
