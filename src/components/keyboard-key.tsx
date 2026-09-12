import { LetterBoardStatus } from '../types/game'

interface KeyboardKeyProps {
    keyValue: string
    onClick: () => void
    boardStatus?: LetterBoardStatus
    solvedBoards: Set<number>
}

const KeyboardKey = ({
    keyValue,
    onClick,
    boardStatus,
    solvedBoards,
}: KeyboardKeyProps) => {
    const isSpecialKey = keyValue === 'ENTER' || keyValue === 'BACKSPACE'
    const displayValue = keyValue === 'BACKSPACE' ? '⌫' : keyValue

    // Get the color for each board section
    const getBoardSectionColor = (boardIndex: number): string => {
        if (!boardStatus) {
            return 'bg-game-tile'
        }

        const boardIsSolved = solvedBoards.has(boardIndex)

        if (boardIsSolved) {
            if (boardStatus) {
                const status = boardStatus.boardStatuses.get(boardIndex)
                if (status === 'correct') {
                    return 'bg-game-correct-fill'
                } else if (status === 'present') {
                    return 'bg-game-correct-fill'
                } else {
                    return 'bg-game-absent'
                }
            } else {
                return 'bg-game-tile'
            }
        } else {
            if (boardStatus) {
                const status = boardStatus.boardStatuses.get(boardIndex)
                if (status === 'correct') {
                    return 'bg-game-correct-fill'
                } else if (status === 'present') {
                    return 'bg-game-present-fill'
                } else {
                    return 'bg-game-absent'
                }
            } else {
                return 'bg-game-tile'
            }
        }
    }

    if (isSpecialKey) {
        // Special keys don't have the grid structure
        return (
            <button
                onClick={onClick}
                aria-label={keyValue === 'BACKSPACE' ? 'Backspace' : 'Enter'}
                className={`
                    min-w-0 flex-[1.5] h-12 sm:h-14 rounded-lg font-bold text-[10px] sm:text-xs
                    bg-game-tile hover:bg-game-line border border-game-line
                    transition-colors duration-150 active:bg-game-canvas
                    flex items-center justify-center
                    ${keyValue === 'ENTER' ? 'text-game-accent' : 'text-game-text'}
                `}
            >
                {displayValue}
            </button>
        )
    }

    // Regular letter keys with 4x4 grid
    return (
        <button
            onClick={onClick}
            className={`
                min-w-0 flex-1 h-12 sm:h-14 rounded-lg overflow-hidden border border-game-line
                transition-[filter,border-color] duration-150 hover:border-game-muted active:brightness-90
                relative shadow-[0_2px_0_rgba(0,0,0,0.2)]
            `}
        >
            {/* 4x4 grid of board sections */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0 bg-game-canvas">
                {Array.from({ length: 16 }, (_, index) => {
                    // Map the grid position to match the board layout
                    const row = Math.floor(index / 4)
                    const col = index % 4
                    const boardIndex = row * 4 + col

                    return (
                        <div
                            key={index}
                            className={`${getBoardSectionColor(boardIndex)} transition-colors duration-200`}
                        />
                    )
                })}
            </div>

            {/* Keep the label crisp against every board status color. */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white font-bold text-base sm:text-lg leading-none">
                    {displayValue}
                </span>
            </div>
        </button>
    )
}

export default KeyboardKey
