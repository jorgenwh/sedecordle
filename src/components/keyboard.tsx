import { LetterBoardStatus } from '../types/game'
import KeyboardKey from './keyboard-key'
import type { Theme } from '../themes'

interface KeyboardProps {
    theme: Theme
    onKeyPress: (key: string) => void
    usedLetters: Map<string, 'correct' | 'present' | 'absent'>
    letterBoardStatus: Map<string, LetterBoardStatus>
    solvedBoards: Set<number>
}

const Keyboard = ({
    theme,
    onKeyPress,
    letterBoardStatus,
    solvedBoards,
}: KeyboardProps) => {
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
    ]

    const keyboardClass = theme.keyboardClassName ?? 'bg-black'

    return (
        <div
            aria-label="On-screen keyboard"
            className={`flex flex-col gap-1.5 mx-auto max-w-[620px] px-1 pt-3 ${keyboardClass}`}
        >
            {rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`flex justify-center gap-1 sm:gap-1.5 ${rowIndex === 1 ? 'w-[90%] mx-auto' : 'w-full'}`}
                >
                    {row.map((key) => (
                        <KeyboardKey
                            key={key}
                            keyValue={key}
                            onClick={() => onKeyPress(key)}
                            boardStatus={letterBoardStatus.get(key)}
                            solvedBoards={solvedBoards}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Keyboard
