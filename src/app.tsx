import { useState, useEffect, useCallback } from 'react'
import LoadingScreen from './components/loading-screen'
import GameBoard, { GameState } from './components/game-board'
import Keyboard from './components/keyboard'
import Leaderboard from './components/leaderboard'
import { getRandomWords, isValidWord } from './utils/words'

export function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [showLeaderboard, setShowLeaderboard] = useState(false)
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
        Map<string, 'correct' | 'present' | 'absent'>
    >(new Map())
    const [message, setMessage] = useState('')

    useEffect(() => {
        initializeGame()
    }, [])

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
                let status: 'correct' | 'present' | 'absent' = 'absent'

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

    const handleKeyPress = useCallback(
        (key: string) => {
            if (gameState.gameStatus !== 'playing') return

            if (key === 'ENTER') {
                if (gameState.currentGuess.length === 5) {
                    if (!isValidWord(gameState.currentGuess)) {
                        setMessage('Not a valid word!')
                        setTimeout(() => setMessage(''), 2000)
                        return
                    }

                    const newGuesses = [
                        ...gameState.guesses,
                        gameState.currentGuess,
                    ]
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
                }
            } else if (key === 'BACKSPACE') {
                setGameState({
                    ...gameState,
                    currentGuess: gameState.currentGuess.slice(0, -1),
                })
            } else if (gameState.currentGuess.length < 5 && key.length === 1) {
                setGameState({
                    ...gameState,
                    currentGuess: gameState.currentGuess + key.toUpperCase(),
                })
            }
        },
        [gameState, updateUsedLetters],
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

    if (isLoading) {
        return <LoadingScreen />
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            <header className="bg-gray-800 p-4 shadow-lg">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold">SEDECORDLE</h1>
                    <div className="flex gap-4 items-center">
                        <div className="text-sm">
                            <span className="text-gray-400">Boards: </span>
                            <span className="text-green-400">
                                {gameState.solvedBoards.size}/16
                            </span>
                            <span className="text-gray-400 ml-4">
                                Guesses:{' '}
                            </span>
                            <span className="text-yellow-400">
                                {gameState.guesses.length}/21
                            </span>
                        </div>
                        <button
                            onClick={() => setShowLeaderboard(true)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
                        >
                            Leaderboard
                        </button>
                        <button
                            onClick={initializeGame}
                            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition-colors"
                        >
                            New Game
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center p-4">
                {message && (
                    <div className="mb-4 p-4 bg-gray-800 rounded text-center max-w-2xl">
                        {message}
                    </div>
                )}

                <GameBoard gameState={gameState} />

                <div className="mt-4 text-center">
                    <div className="text-2xl font-mono mb-4 h-8">
                        {gameState.currentGuess
                            .padEnd(5, '_')
                            .split('')
                            .map((char, i) => (
                                <span key={i} className="mx-1">
                                    {char === '_' ? '◯' : char}
                                </span>
                            ))}
                    </div>
                </div>

                <Keyboard
                    onKeyPress={handleKeyPress}
                    usedLetters={usedLetters}
                />
            </main>

            <Leaderboard
                isOpen={showLeaderboard}
                onClose={() => setShowLeaderboard(false)}
            />
        </div>
    )
}
