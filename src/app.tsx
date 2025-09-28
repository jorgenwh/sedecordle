import { useState, useEffect } from 'react'
import LoadingScreen from './components/loading-screen'
import GameBoard from './components/game-board'
import Keyboard from './components/keyboard'
import Leaderboard from './components/leaderboard'
import { GameMessage } from './components/game-message'
import { SaveScoreModal } from './components/save-score-modal'
import { GameStats } from './components/game-stats'
import { useGame } from './hooks/use-game'
import { useKeyboardHandler } from './hooks/use-keyboard-handler'

export function App() {
    const [showLeaderboard, setShowLeaderboard] = useState(false)
    const [showSaveScore, setShowSaveScore] = useState(false)
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

    useEffect(() => {
        if (gameState.gameStatus === 'won' && !showSaveScore) {
            setShowSaveScore(true)
        }
    }, [gameState.gameStatus, showSaveScore])

    if (isLoading) {
        return <LoadingScreen />
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <GameMessage message={message} />
                <GameBoard gameState={gameState} />
                <div className="mt-4 w-full flex flex-col items-center">
                    <GameStats
                        gameState={gameState}
                        onShowLeaderboard={() => setShowLeaderboard(true)}
                    />
                    <Keyboard
                        onKeyPress={handleKeyPress}
                        usedLetters={usedLetters}
                    />
                </div>
            </main>

            <Leaderboard
                isOpen={showLeaderboard}
                onClose={() => setShowLeaderboard(false)}
            />

            <SaveScoreModal
                isOpen={showSaveScore}
                onClose={() => {
                    setShowSaveScore(false)
                    setShowLeaderboard(true)
                }}
                gameState={gameState}
            />
        </div>
    )
}
