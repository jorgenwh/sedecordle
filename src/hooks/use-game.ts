import { useState, useCallback } from 'react'
import { getRandomWords, isValidWord } from '../utils/words'
import { GameState, UsedLetterStatus, LetterBoardStatus } from '../types/game'

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
    const [letterBoardStatus, setLetterBoardStatus] = useState<
        Map<string, LetterBoardStatus>
    >(new Map())
    const [message, setMessage] = useState('')
    const [flashType, setFlashType] = useState<
        'correct' | 'incorrect' | null
    >(null)

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
        setLetterBoardStatus(new Map())
        setMessage('')
        setFlashType(null)
        setIsLoading(false)
    }

    const updateUsedLetters = useCallback(
        (guess: string, targetWords: string[], solvedBoards: Set<number>) => {
            const newUsedLetters = new Map(usedLetters)
            const newLetterBoardStatus = new Map(letterBoardStatus)

            // Process each letter in the guess
            for (const letter of guess) {
                let overallStatus: UsedLetterStatus = 'absent'
                const boardStatuses = new Map<number, UsedLetterStatus>()

                // Check each board for this letter
                for (
                    let boardIndex = 0;
                    boardIndex < targetWords.length;
                    boardIndex++
                ) {
                    if (solvedBoards.has(boardIndex)) continue

                    const target = targetWords[boardIndex]
                    let boardStatus: UsedLetterStatus = 'absent'

                    // Check if letter is in correct position
                    for (let pos = 0; pos < target.length; pos++) {
                        if (target[pos] === letter) {
                            if (guess[pos] === letter) {
                                boardStatus = 'correct'
                                overallStatus = 'correct'
                                break
                            } else if (boardStatus === 'absent') {
                                boardStatus = 'present'
                                if (overallStatus === 'absent') {
                                    overallStatus = 'present'
                                }
                            }
                        }
                    }

                    // Store the status for this board (including absent)
                    boardStatuses.set(boardIndex, boardStatus)
                }

                // Update overall letter status
                const currentStatus = newUsedLetters.get(letter)
                if (
                    !currentStatus ||
                    (currentStatus === 'absent' &&
                        overallStatus !== 'absent') ||
                    (currentStatus === 'present' && overallStatus === 'correct')
                ) {
                    newUsedLetters.set(letter, overallStatus)
                }

                // Update or merge board-specific statuses
                const existingBoardStatus = newLetterBoardStatus.get(letter)
                if (existingBoardStatus) {
                    // Merge with existing board statuses
                    boardStatuses.forEach((status, boardIndex) => {
                        const existing =
                            existingBoardStatus.boardStatuses.get(boardIndex)
                        if (
                            !existing ||
                            status === 'correct' ||
                            (existing === 'absent' && status === 'present')
                        ) {
                            existingBoardStatus.boardStatuses.set(
                                boardIndex,
                                status,
                            )
                        }
                    })
                } else if (boardStatuses.size > 0) {
                    newLetterBoardStatus.set(letter, {
                        boardStatuses: boardStatuses,
                    })
                }
            }

            setUsedLetters(newUsedLetters)
            setLetterBoardStatus(newLetterBoardStatus)
        },
        [usedLetters, letterBoardStatus],
    )

    const submitGuess = useCallback(() => {
        if (gameState.currentGuess.length !== 5) return false

        if (!isValidWord(gameState.currentGuess)) {
            return false
        }

        const newGuesses = [...gameState.guesses, gameState.currentGuess]
        const newSolvedBoards = new Set(gameState.solvedBoards)
        const previousSolvedCount = gameState.solvedBoards.size

        updateUsedLetters(
            gameState.currentGuess.toUpperCase(),
            gameState.targetWords,
            gameState.solvedBoards,
        )

        gameState.targetWords.forEach((target, index) => {
            if (target === gameState.currentGuess.toUpperCase()) {
                newSolvedBoards.add(index)
            }
        })

        const solvedAnyBoard = newSolvedBoards.size > previousSolvedCount

        updateUsedLetters(
            gameState.currentGuess.toUpperCase(),
            gameState.targetWords,
            gameState.solvedBoards,
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
            setFlashType('correct')
        } else if (newGuesses.length >= 21) {
            setMessage(
                `Game Over! You solved ${newSolvedBoards.size}/16 boards.`,
            )
        } else if (solvedAnyBoard) {
            setFlashType('correct')
        } else {
            setFlashType('incorrect')
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

    const clearFlash = useCallback(() => {
        setFlashType(null)
    }, [])

    return {
        isLoading,
        gameState,
        usedLetters,
        letterBoardStatus,
        message,
        flashType,
        initializeGame,
        submitGuess,
        updateCurrentGuess,
        deleteLastLetter,
        addLetter,
        clearFlash,
    }
}
