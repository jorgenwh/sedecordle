import { useState, useEffect } from 'react'
import LoadingScreen from './components/loading-screen'
import GameBoard from './components/game-board'
import Keyboard from './components/keyboard'
import Leaderboard from './components/leaderboard'
import { Header } from './components/header'
import { CurrentGuessDisplay } from './components/current-guess-display'
import { GameMessage } from './components/game-message'
import { useGame } from './hooks/use-game'
import { useKeyboardHandler } from './hooks/use-keyboard-handler'

export function App() {
    const [showLeaderboard, setShowLeaderboard] = useState(false)
    const {
        isLoading,
        gameState,
        usedLetters,
        message,
        initializeGame,
        submitGuess,
        deleteLastLetter,
        addLetter,
    } = useGame()

    const handleKeyPress = useKeyboardHandler(
        gameState.gameStatus,
        submitGuess,
        deleteLastLetter,
        addLetter,
    )

    useEffect(() => {
        initializeGame()
    }, [])

    if (isLoading) {
        return <LoadingScreen />
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            <Header
                solvedBoards={gameState.solvedBoards.size}
                totalGuesses={gameState.guesses.length}
                onNewGame={initializeGame}
                onShowLeaderboard={() => setShowLeaderboard(true)}
            />

            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <GameMessage message={message} />
                <GameBoard gameState={gameState} />
                <CurrentGuessDisplay currentGuess={gameState.currentGuess} />
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
