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
        if (guessIndex >= guesses.length) return 'bg-black border-gray-800'

        const guess = guesses[guessIndex]
        const target = targetWords[boardIndex]

        // First pass: mark all correct positions (green)
        const targetLetterCount: { [key: string]: number } = {}
        const guessColors: string[] = new Array(5).fill('')

        // Count letters in target and mark greens
        for (let i = 0; i < target.length; i++) {
            targetLetterCount[target[i]] =
                (targetLetterCount[target[i]] || 0) + 1
            if (guess[i] === target[i]) {
                guessColors[i] = 'green'
                targetLetterCount[guess[i]]--
            }
        }

        // Second pass: mark yellows (present but wrong position)
        for (let i = 0; i < guess.length; i++) {
            if (guessColors[i] === '') {
                if (targetLetterCount[guess[i]] > 0) {
                    guessColors[i] = 'yellow'
                    targetLetterCount[guess[i]]--
                } else {
                    guessColors[i] = 'gray'
                }
            }
        }

        const color = guessColors[letterIndex]
        if (color === 'green') return 'bg-green-600 border-green-600'
        if (color === 'yellow') return 'bg-yellow-600 border-yellow-600'
        return 'bg-gray-800 border-gray-800'
    }

    const renderBoard = (boardIndex: number) => {
        const isSolved = solvedBoards.has(boardIndex)

        // For solved boards, only show the guesses up to when it was solved
        const rowsToShow = isSolved
            ? guesses.findIndex((guess) => guess === targetWords[boardIndex]) +
              1
            : Math.min(21, guesses.length + 1)

        return (
            <div key={boardIndex} className="relative">
                {isSolved && (
                    <div className="absolute inset-0 bg-black bg-opacity-25 z-10 pointer-events-none rounded" />
                )}
                <div className="flex flex-col p-2 bg-black border border-gray-800 rounded">
                    {[...Array(rowsToShow)].map((_, rowIndex) => {
                        const isCurrentRow =
                            rowIndex === guesses.length && !isSolved
                        return (
                            <div
                                key={rowIndex}
                                className={`grid grid-cols-5 gap-1 ${rowIndex < rowsToShow - 1 ? (isCurrentRow ? 'mb-1' : 'mb-0.5') : ''}`}
                            >
                                {[...Array(5)].map((_, colIndex) => {
                                    const letter = isCurrentRow
                                        ? currentGuess[colIndex] || ''
                                        : guesses[rowIndex]?.[colIndex] || ''

                                    return (
                                        <div
                                            key={colIndex}
                                            className={`
                                            w-12 ${isCurrentRow ? 'h-10' : 'h-7'} flex items-center justify-center m-px
                                            ${isCurrentRow ? 'text-2xl' : 'text-xl'} font-bold text-white border rounded
                                            ${isCurrentRow ? 'border-gray-600' : getCellColor(boardIndex, rowIndex, colIndex)}
                                        `}
                                        >
                                            {letter.toUpperCase()}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-3 p-6 max-w-6xl mx-auto">
            {targetWords.map((_, index) => renderBoard(index))}
        </div>
    )
}

export default GameBoard
