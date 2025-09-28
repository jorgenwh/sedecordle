interface HeaderProps {
    solvedBoards: number
    totalGuesses: number
    onNewGame: () => void
    onShowLeaderboard: () => void
}

export const Header = ({
    solvedBoards,
    totalGuesses,
    onNewGame,
    onShowLeaderboard,
}: HeaderProps) => {
    return (
        <header className="bg-gray-800 p-4 shadow-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">SEDECORDLE</h1>
                <div className="flex gap-4 items-center">
                    <GameStats
                        solvedBoards={solvedBoards}
                        totalGuesses={totalGuesses}
                    />
                    <button
                        onClick={onShowLeaderboard}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
                    >
                        Leaderboard
                    </button>
                    <button
                        onClick={onNewGame}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition-colors"
                    >
                        New Game
                    </button>
                </div>
            </div>
        </header>
    )
}

const GameStats = ({
    solvedBoards,
    totalGuesses,
}: {
    solvedBoards: number
    totalGuesses: number
}) => {
    return (
        <div className="text-sm">
            <span className="text-gray-400">Boards: </span>
            <span className="text-green-400">{solvedBoards}/16</span>
            <span className="text-gray-400 ml-4">Guesses: </span>
            <span className="text-yellow-400">{totalGuesses}/21</span>
        </div>
    )
}
