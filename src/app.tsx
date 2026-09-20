import { useState, useEffect } from 'react'
import LoadingScreen from './components/loading-screen'
import GameBoard from './components/game-board'
import Keyboard from './components/keyboard'
import Leaderboard from './components/leaderboard'
import { GameMessage } from './components/game-message'
import { SaveScoreModal } from './components/save-score-modal'
import { GameStats } from './components/game-stats'
import { ScreenFlash } from './components/screen-flash'
import { NewGameModal } from './components/new-game-modal'
import { ThemeMenu } from './components/theme-menu'
import { useGame } from './hooks/use-game'
import { useKeyboardHandler } from './hooks/use-keyboard-handler'
import { themes, type Theme } from './themes'

const themeStorageKey = 'superwordle:theme:v1'

export function App() {
    const [mode, setMode] = useState<'daily' | 'free-play' | null>(null)
    const [theme, setTheme] = useState(() => {
        try {
            const savedId = localStorage.getItem(themeStorageKey)
            return themes.find((theme) => theme.id === savedId) ?? themes[0]
        } catch {
            return themes[0]
        }
    })

    const changeTheme = (nextTheme: Theme) => {
        setTheme(nextTheme)
        try {
            localStorage.setItem(themeStorageKey, nextTheme.id)
        } catch {
            // Keep theme switching available when storage is blocked.
        }
    }

    if (mode)
        return (
            <Game
                mode={mode}
                theme={theme}
                onThemeChange={changeTheme}
                onBackToMenu={() => setMode(null)}
            />
        )

    const Scene = theme.Scene

    return (
        <main
            className={`min-h-dvh flex items-center justify-center px-4 py-12 text-game-text relative ${theme.rootClassName ?? 'bg-game-canvas'}`}
        >
            {Scene && <Scene />}
            <div className="relative z-10 w-full max-w-3xl">
                <header className="mb-10 text-center sm:mb-12">
                    <img
                        src="/favicon.svg"
                        alt=""
                        width={48}
                        height={48}
                        className="mx-auto mb-5"
                    />
                    <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                        <span className="text-game-correct">S</span>u
                        <span className="text-game-present">p</span>er
                        <span className="text-game-correct">w</span>ord
                        <span className="text-game-present">l</span>e
                    </h1>
                    <p className="mt-4 text-sm sm:text-base text-game-muted">
                        Solve 16 five-letter words at once in 21 guesses.
                    </p>
                </header>
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                    <button
                        onClick={() => setMode('daily')}
                        className="flex min-h-60 sm:min-h-64 flex-col items-center justify-center rounded-2xl border border-game-line bg-game-surface/80 p-4 sm:p-8 transition-colors hover:border-game-present hover:bg-game-surface"
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mb-6 h-12 w-12 text-game-present"
                        >
                            <rect x="3" y="5" width="18" height="16" rx="2" />
                            <path d="M16 3v4M8 3v4M3 11h18m-13 5h2m4 0h2" />
                        </svg>
                        <span className="text-2xl sm:text-3xl font-semibold tracking-tight">
                            Daily
                        </span>
                    </button>
                    <button
                        onClick={() => setMode('free-play')}
                        className="flex min-h-60 sm:min-h-64 flex-col items-center justify-center rounded-2xl border border-game-line bg-game-surface/80 p-4 sm:p-8 transition-colors hover:border-game-correct hover:bg-game-surface"
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mb-6 h-12 w-12 text-game-correct"
                        >
                            <path d="M3 6h3c6 0 6 12 12 12h3m-4-4 4 4-4 4M3 18h3c2 0 3-1 4-3m4-6c1-2 2-3 4-3h3m-4-4 4 4-4 4" />
                        </svg>
                        <span className="text-2xl sm:text-3xl font-semibold tracking-tight">
                            Free play
                        </span>
                    </button>
                </div>
                <p className="mx-auto mt-6 max-w-xl text-center text-sm text-game-muted">
                    Each guess counts for all 16 boards. Try a new daily puzzle
                    or enjoy unlimited free play.
                </p>
            </div>
        </main>
    )
}

const Game = ({
    mode,
    theme,
    onThemeChange,
    onBackToMenu,
}: {
    mode: 'free-play' | 'daily'
    theme: Theme
    onThemeChange: (theme: Theme) => void
    onBackToMenu: () => void
}) => {
    const [showNewGame, setShowNewGame] = useState(false)
    const [showLeaderboard, setShowLeaderboard] = useState(false)
    const [showSaveScore, setShowSaveScore] = useState(false)
    const [hasPromptedSave, setHasPromptedSave] = useState(false)
    const {
        isLoading,
        restoredCompletedGame,
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
    } = useGame(mode)

    const handleKeyPress = useKeyboardHandler(
        gameState.gameStatus,
        submitGuess,
        deleteLastLetter,
        addLetter,
        !isLoading && !showNewGame && !showLeaderboard && !showSaveScore,
    )

    useEffect(() => {
        initializeGame()
    }, [])

    useEffect(() => {
        if (
            !isLoading &&
            !restoredCompletedGame &&
            gameState.gameStatus !== 'playing' &&
            !hasPromptedSave
        ) {
            setShowSaveScore(true)
            setHasPromptedSave(true)
        }
    }, [
        gameState.gameStatus,
        hasPromptedSave,
        isLoading,
        restoredCompletedGame,
    ])

    const startNewGame = async () => {
        setShowNewGame(false)
        setShowLeaderboard(false)
        setShowSaveScore(false)
        await initializeGame()
        setHasPromptedSave(false)
    }

    const handleNewGame = () => {
        if (
            gameState.gameStatus === 'playing' &&
            gameState.guesses.length > 0
        ) {
            setShowNewGame(true)
        } else {
            startNewGame()
        }
    }

    if (isLoading) {
        return <LoadingScreen theme={theme} />
    }

    const Scene = theme.Scene
    const rootClass = theme.rootClassName ?? 'bg-black'
    const bottomPanelClass =
        theme.bottomPanelClassName ?? 'bg-black border-t border-gray-800'

    return (
        <div
            className={`h-dvh text-game-text flex flex-col overflow-hidden relative ${rootClass}`}
        >
            {Scene && <Scene />}
            <main className="game-scroll flex-1 overflow-y-auto px-3 pt-7 pb-80 sm:px-6 sm:pt-10 relative z-10">
                <header className="mx-auto mb-5 grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-3 border-b border-game-line/40 pb-5 sm:mb-6 sm:gap-x-6 sm:pb-6 md:grid-cols-[minmax(0,1fr)_auto_auto]">
                    <h1 className="text-xl sm:text-3xl font-semibold tracking-tight">
                        <button
                            type="button"
                            onClick={onBackToMenu}
                            onKeyDown={(event) => event.stopPropagation()}
                            aria-label="Superwordle — back to menu"
                            title="Back to menu"
                            className="flex cursor-pointer items-center gap-2.5 rounded-lg text-left sm:gap-4"
                        >
                            <img
                                src="/favicon.svg"
                                alt=""
                                width={44}
                                height={44}
                                className="h-8 w-8 shrink-0 sm:h-11 sm:w-11"
                            />
                            <span>
                                <span className="text-game-correct">S</span>u
                                <span className="text-game-present">p</span>er
                                <span className="text-game-correct">w</span>ord
                                <span className="text-game-present">l</span>e
                            </span>
                        </button>
                    </h1>
                    <div className="col-start-2 row-start-1 md:col-start-3">
                        <ThemeMenu theme={theme} onChange={onThemeChange} />
                    </div>
                    <div
                        aria-label="Letter color guide"
                        className="col-span-2 flex items-center justify-center gap-4 text-[11px] text-game-muted md:col-span-1 md:col-start-2 md:row-start-1 md:border-r md:border-game-line/50 md:pr-6"
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
                <GameBoard gameState={gameState} theme={theme} />
            </main>
            <div
                className={`fixed bottom-0 left-0 right-0 z-20 mx-auto w-full max-w-[720px] rounded-t-2xl p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:bottom-4 sm:w-[calc(100%-2rem)] sm:rounded-2xl sm:p-3 sm:pb-[max(0.75rem,env(safe-area-inset-bottom))] ${bottomPanelClass}`}
            >
                <GameStats
                    gameState={gameState}
                    onShowLeaderboard={
                        mode === 'free-play'
                            ? () => setShowLeaderboard(true)
                            : undefined
                    }
                    onNewGame={mode === 'free-play' ? handleNewGame : undefined}
                />
                <Keyboard
                    theme={theme}
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
                mode={mode}
                isOpen={showSaveScore}
                onClose={() => setShowSaveScore(false)}
                onSaveSuccess={() => {
                    setShowSaveScore(false)
                    setShowLeaderboard(true)
                }}
                gameState={gameState}
            />

            <ScreenFlash type={flashType} onComplete={clearFlash} />
            {showNewGame && (
                <NewGameModal
                    onClose={() => setShowNewGame(false)}
                    onConfirm={startNewGame}
                />
            )}
        </div>
    )
}
