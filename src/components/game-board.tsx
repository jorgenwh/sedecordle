import { GameState } from '../types/game'

interface GameBoardProps {
    gameState: GameState
}

const GameBoard = ({ gameState }: GameBoardProps) => {
    const { targetWords, guesses, currentGuess, solvedBoards } = gameState

    const getCellColor = (
        boardIndex: number,
        guessIndex: number,
        letterIndex: number,
    ): string => {
        if (guessIndex >= guesses.length) return 'bg-gray-800 border-gray-600'

        const guess = guesses[guessIndex]
        const target = targetWords[boardIndex]
        const guessLetter = guess[letterIndex]
        const targetLetter = target[letterIndex]

        if (guessLetter === targetLetter) return 'bg-green-600 border-green-600'
        if (target.includes(guessLetter))
            return 'bg-yellow-600 border-yellow-600'
        return 'bg-gray-700 border-gray-700'
    }

    const renderBoard = (boardIndex: number) => {
        const isSolved = solvedBoards.has(boardIndex)

        // For solved boards, only show the guesses up to when it was solved
        const rowsToShow = isSolved
            ? guesses.findIndex(guess => guess === targetWords[boardIndex]) + 1
            : Math.min(21, guesses.length + 1)

        return (
            <div key={boardIndex} className="relative">
                {isSolved && (
                    <div className="absolute inset-0 bg-black bg-opacity-25 z-10 pointer-events-none rounded" />
                )}
                <div className="grid grid-rows-6 gap-0.5 p-1 bg-gray-800 rounded">
                    {[...Array(rowsToShow)].map(
                        (_, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="grid grid-cols-5 gap-0.5"
                            >
                                {[...Array(5)].map((_, colIndex) => {
                                    const isCurrentRow =
                                        rowIndex === guesses.length && !isSolved
                                    const letter = isCurrentRow
                                        ? currentGuess[colIndex] || ''
                                        : guesses[rowIndex]?.[colIndex] || ''

                                    return (
                                        <div
                                            key={colIndex}
                                            className={`
                                            w-7 h-7 flex items-center justify-center
                                            text-xs font-bold text-white border
                                            ${isCurrentRow ? 'border-gray-500' : getCellColor(boardIndex, rowIndex, colIndex)}
                                        `}
                                        >
                                            {letter.toUpperCase()}
                                        </div>
                                    )
                                })}
                            </div>
                        ),
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-2 p-4 max-w-4xl mx-auto">
            {targetWords.map((_, index) => renderBoard(index))}
        </div>
    )
}

export default GameBoard
