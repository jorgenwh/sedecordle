import { useState, useCallback, useEffect, useRef } from 'react'
import { getDailyWords, getRandomWords, isValidWord } from '../utils/words'
import { GameState, UsedLetterStatus, LetterBoardStatus } from '../types/game'
import { loadDailyProgress, saveDailyProgress } from '../utils/daily-progress'
import { getLetterStatuses } from '../utils/letter-status'

export const useGame = (mode: 'free-play' | 'daily') => {
    const [isLoading, setIsLoading] = useState(true)
    const [restoredCompletedGame, setRestoredCompletedGame] = useState(false)
    const dailyDate = useRef<string | null>(null)
    const [gameState, setGameState] = useState<GameState>({
        targetWords: [],
        guesses: [],
        currentGuess: '',
        gameStatus: 'playing',
        solvedBoards: new Set(),
        startTime: null,
        endTime: null,
    })
    const latestGameState = useRef(gameState)
    const pausedAt = useRef<number | null>(null)
    const [usedLetters, setUsedLetters] = useState<
        Map<string, UsedLetterStatus>
    >(new Map())
    const [letterBoardStatus, setLetterBoardStatus] = useState<
        Map<string, LetterBoardStatus>
    >(new Map())
    const [message, setMessage] = useState('')
    const [flashType, setFlashType] = useState<'correct' | 'incorrect' | null>(
        null,
    )

    useEffect(() => {
        latestGameState.current = gameState
        if (mode === 'daily' && !isLoading && dailyDate.current) {
            saveDailyProgress(
                dailyDate.current,
                gameState,
                pausedAt.current ?? Date.now(),
            )
        }
    }, [mode, isLoading, gameState])

    useEffect(() => {
        if (mode !== 'daily' || isLoading) return

        const saveProgress = () => {
            if (dailyDate.current) {
                saveDailyProgress(
                    dailyDate.current,
                    latestGameState.current,
                    pausedAt.current ?? Date.now(),
                )
            }
        }
        const pause = () => {
            pausedAt.current ??= Date.now()
            saveProgress()
        }
        const resume = () => {
            if (document.hidden || pausedAt.current === null) return

            const state = latestGameState.current
            const awayTime = Math.max(0, Date.now() - pausedAt.current)
            pausedAt.current = null
            if (state.startTime !== null && state.gameStatus === 'playing') {
                // Shift the timer's origin so the existing display and result
                // calculations both exclude this pause.
                const resumed = {
                    ...state,
                    startTime: state.startTime + awayTime,
                }
                latestGameState.current = resumed
                setGameState(resumed)
            }
            saveProgress()
        }
        const onVisibilityChange = () => {
            if (document.hidden) pause()
            else resume()
        }

        onVisibilityChange()
        document.addEventListener('visibilitychange', onVisibilityChange)
        window.addEventListener('pagehide', pause)
        window.addEventListener('pageshow', resume)
        // Checkpoint active time in case the browser closes without an event.
        const interval = setInterval(() => {
            if (!document.hidden && pausedAt.current === null) saveProgress()
        }, 1000)

        return () => {
            pause()
            document.removeEventListener('visibilitychange', onVisibilityChange)
            window.removeEventListener('pagehide', pause)
            window.removeEventListener('pageshow', resume)
            clearInterval(interval)
        }
    }, [mode, isLoading])

    const initializeGame = async () => {
        const date = new Date()
        const dateKey = date.toISOString().slice(0, 10)
        setIsLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 500))

        const saved = mode === 'daily' ? loadDailyProgress(dateKey) : null
        const words =
            mode === 'daily' ? getDailyWords(date) : getRandomWords(16)
        const nextState: GameState = saved ?? {
            targetWords: words,
            guesses: [],
            currentGuess: '',
            gameStatus: 'playing',
            solvedBoards: new Set(),
            startTime: null,
            endTime: null,
        }
        const letters = getLetterStatuses(
            nextState.guesses,
            nextState.targetWords,
        )

        dailyDate.current = dateKey
        pausedAt.current = document.hidden ? Date.now() : null
        setGameState(nextState)
        setUsedLetters(letters.usedLetters)
        setLetterBoardStatus(letters.letterBoardStatus)
        setRestoredCompletedGame(
            saved !== null && saved.gameStatus !== 'playing',
        )
        setMessage(
            nextState.gameStatus === 'won'
                ? `🎉 Congratulations! You solved all 16 boards in ${nextState.guesses.length} guesses!`
                : nextState.gameStatus === 'lost'
                  ? `Game Over! You solved ${nextState.solvedBoards.size}/16 boards.`
                  : '',
        )
        setFlashType(null)
        setIsLoading(false)
    }

    const submitGuess = useCallback(() => {
        if (isLoading || gameState.gameStatus !== 'playing') return false
        if (gameState.currentGuess.length !== 5) return false

        if (!isValidWord(gameState.currentGuess)) {
            return false
        }

        const newGuesses = [...gameState.guesses, gameState.currentGuess]
        const newSolvedBoards = new Set(gameState.solvedBoards)
        const previousSolvedCount = gameState.solvedBoards.size

        gameState.targetWords.forEach((target, index) => {
            if (target === gameState.currentGuess.toUpperCase()) {
                newSolvedBoards.add(index)
            }
        })

        const solvedAnyBoard = newSolvedBoards.size > previousSolvedCount

        const letters = getLetterStatuses(newGuesses, gameState.targetWords)
        setUsedLetters(letters.usedLetters)
        setLetterBoardStatus(letters.letterBoardStatus)

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
    }, [gameState, isLoading])

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
        restoredCompletedGame,
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
