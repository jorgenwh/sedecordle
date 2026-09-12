import { GameState } from '../types/game'
import { activeTheme } from '../themes'

interface GameBoardProps {
    gameState: GameState
}

const GameBoard = ({ gameState }: GameBoardProps) => {
    const { targetWords, guesses, currentGuess, solvedBoards } = gameState

    const emptyCellClass =
        activeTheme.emptyCellClassName ?? 'bg-black border-gray-800'
    const boardContainerClass =
        activeTheme.boardContainerClassName ?? 'bg-black border border-gray-800'

    const getCellColor = (
        boardIndex: number,
        guessIndex: number,
        letterIndex: number,
    ): string => {
        if (guessIndex >= guesses.length) return emptyCellClass

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
        if (color === 'green') return 'bg-game-correct-fill border-game-correct'
        if (color === 'yellow')
            return 'bg-game-present-fill border-game-present'
        return 'bg-game-absent border-game-absent'
    }

    const renderBoard = (boardIndex: number) => {
        const isSolved = solvedBoards.has(boardIndex)

        // For solved boards, only show the guesses up to when it was solved
        const rowsToShow = isSolved
            ? guesses.findIndex((guess) => guess === targetWords[boardIndex]) +
              1
            : Math.min(21, guesses.length + 1)

        return (
            <section
                key={boardIndex}
                aria-label={`Board ${boardIndex + 1}${isSolved ? ', solved' : ''}`}
                className="min-w-0"
            >
                <div
                    className={`flex flex-col p-2 sm:p-3 rounded-xl ${boardContainerClass}`}
                >
                    <div className="mb-3 flex h-5 items-center gap-3">
                        <span className="font-mono text-sm font-semibold tabular-nums text-game-muted">
                            {boardIndex + 1}
                        </span>
                        <span
                            aria-hidden="true"
                            className={`h-px flex-1 ${isSolved ? 'bg-game-accent/40' : 'bg-game-line/70'}`}
                        />
                        {isSolved && (
                            <span className="text-[11px] font-semibold text-game-accent">
                                Solved ✓
                            </span>
                        )}
                    </div>
                    {[...Array(rowsToShow)].map((_, rowIndex) => {
                        const isCurrentRow =
                            rowIndex === guesses.length && !isSolved
                        return (
                            <div
                                key={rowIndex}
                                className={`grid grid-cols-5 gap-1 transition-opacity duration-200 ${isSolved ? 'opacity-70' : ''} ${rowIndex < rowsToShow - 1 ? 'mb-1' : ''}`}
                            >
                                {[...Array(5)].map((_, colIndex) => {
                                    const letter = isCurrentRow
                                        ? currentGuess[colIndex] || ''
                                        : guesses[rowIndex]?.[colIndex] || ''

                                    return (
                                        <div
                                            key={colIndex}
                                            className={`
                                            min-w-0 ${isCurrentRow ? 'h-11' : 'h-8'} flex items-center justify-center
                                            text-xl sm:text-[22px] leading-none font-bold text-white border rounded-md
                                            ${isCurrentRow && letter ? 'bg-game-tile/60 border-game-muted/70' : getCellColor(boardIndex, rowIndex, colIndex)}
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
            </section>
        )
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-2 sm:gap-3 max-w-6xl mx-auto">
            {targetWords.map((_, index) => renderBoard(index))}
        </div>
    )
}

export default GameBoard
