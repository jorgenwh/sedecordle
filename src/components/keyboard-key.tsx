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
        // If we have board-specific status for this letter
        if (boardStatus) {
            const status = boardStatus.boardStatuses.get(boardIndex)
            if (status === 'correct') {
                // Use muted green if board is solved
                return solvedBoards.has(boardIndex)
                    ? 'bg-green-900'
                    : 'bg-green-600'
            } else if (status === 'present') {
                // Use muted yellow if board is solved
                return solvedBoards.has(boardIndex)
                    ? 'bg-yellow-900'
                    : 'bg-yellow-600'
            }
            // If letter has been used but no status for this board, it's absent
            return 'bg-gray-900'
        }

        // Default color - letter hasn't been used yet
        return 'bg-gray-700'
    }

    if (isSpecialKey) {
        // Special keys don't have the grid structure
        return (
            <button
                onClick={onClick}
                className={`
                    px-5 h-14 rounded-md font-bold text-white text-xs
                    bg-gray-700 hover:bg-gray-600 border border-gray-600
                    transition-colors duration-200
                    flex items-center justify-center
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
                w-14 h-14 rounded-md overflow-hidden border border-gray-800
                transition-all duration-200 hover:scale-105 hover:border-gray-600
                relative group
            `}
        >
            {/* 4x4 grid of board sections */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0 bg-black">
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

            {/* Letter overlay with better contrast */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                    className="text-white font-bold text-base"
                    style={{
                        textShadow:
                            '0 0 4px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 0, 0, 0.7)',
                    }}
                >
                    {displayValue}
                </span>
            </div>
        </button>
    )
}

export default KeyboardKey
