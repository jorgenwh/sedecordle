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
        letterBoardStatus,
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
        <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto pb-64">
                <GameMessage message={message} />
                <GameBoard gameState={gameState} />
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-20">
                <div>
                    <GameStats
                        gameState={gameState}
                        onShowLeaderboard={() => setShowLeaderboard(true)}
                    />
                </div>
                <Keyboard
                    onKeyPress={handleKeyPress}
                    usedLetters={usedLetters}
                    letterBoardStatus={letterBoardStatus}
                />
            </div>

            <Leaderboard
                isOpen={showLeaderboard}
                onClose={() => setShowLeaderboard(false)}
            />

            <SaveScoreModal
                isOpen={showSaveScore}
                onClose={() => setShowSaveScore(false)}
                onSaveSuccess={() => {
                    setShowSaveScore(false)
                    setShowLeaderboard(true)
                }}
                gameState={gameState}
            />
        </div>
    )
}
