import { useState, useEffect } from 'react'
import LoadingScreen from './components/loading-screen'
import GameBoard from './components/game-board'
import Keyboard from './components/keyboard'
import Leaderboard from './components/leaderboard'
import { GameMessage } from './components/game-message'
import { SaveScoreModal } from './components/save-score-modal'
import { GameStats } from './components/game-stats'
import { ScreenFlash } from './components/screen-flash'
import { useGame } from './hooks/use-game'
import { useKeyboardHandler } from './hooks/use-keyboard-handler'
import { activeTheme } from './themes'

export function App() {
    const [showLeaderboard, setShowLeaderboard] = useState(false)
    const [showSaveScore, setShowSaveScore] = useState(false)
    const [hasPromptedSave, setHasPromptedSave] = useState(false)
    const {
        isLoading,
        gameState,
        usedLetters,
        letterBoardStatus,
        message,
        flashType,
        initializeGame,
        submitGuess,
        deleteLastLetter,
        addLetter,
        clearFlash,
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
        if (gameState.gameStatus === 'won' && !hasPromptedSave) {
            setShowSaveScore(true)
            setHasPromptedSave(true)
        }
    }, [gameState.gameStatus, hasPromptedSave])

    if (isLoading) {
        return <LoadingScreen />
    }

    const Scene = activeTheme.Scene
    const rootClass = activeTheme.rootClassName ?? 'bg-black'
    const bottomPanelClass =
        activeTheme.bottomPanelClassName ?? 'bg-black border-t border-gray-800'

    return (
        <div
            className={`h-dvh text-game-text flex flex-col overflow-hidden relative ${rootClass}`}
        >
            {Scene && <Scene />}
            <main className="game-scroll flex-1 overflow-y-auto px-3 pt-7 pb-80 sm:px-6 sm:pt-10 relative z-10">
                <header className="max-w-6xl mx-auto mb-6 sm:mb-8 flex flex-wrap items-end justify-between gap-5 pb-6">
                    <div className="flex items-center gap-4">
                        <img
                            src="/favicon.svg"
                            alt=""
                            width={44}
                            height={44}
                            className="h-11 w-11 shrink-0"
                        />
                        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                            <span className="text-game-correct">S</span>u
                            <span className="text-game-present">p</span>er
                            <span className="text-game-correct">w</span>ord
                            <span className="text-game-present">l</span>e
                        </h1>
                    </div>
                    <div
                        aria-label="Letter color guide"
                        className="flex items-center gap-4 text-[11px] text-game-muted"
                    >
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-sm bg-game-correct" />
                            Correct
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-sm bg-game-present" />
                            Present
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-sm bg-game-absent border border-game-line" />
                            Absent
                        </span>
                    </div>
                </header>
                <GameMessage message={message} />
                <GameBoard gameState={gameState} />
            </main>
            <div
                className={`fixed bottom-0 left-0 right-0 z-20 mx-auto w-full max-w-[720px] rounded-t-2xl p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:bottom-4 sm:w-[calc(100%-2rem)] sm:rounded-2xl sm:p-3 sm:pb-[max(0.75rem,env(safe-area-inset-bottom))] ${bottomPanelClass}`}
            >
                <GameStats
                    gameState={gameState}
                    onShowLeaderboard={() => setShowLeaderboard(true)}
                />
                <Keyboard
                    onKeyPress={handleKeyPress}
                    usedLetters={usedLetters}
                    letterBoardStatus={letterBoardStatus}
                    solvedBoards={gameState.solvedBoards}
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

            <ScreenFlash type={flashType} onComplete={clearFlash} />
        </div>
    )
}
