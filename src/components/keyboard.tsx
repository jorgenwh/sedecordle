import { LetterBoardStatus } from '../types/game'
import KeyboardKey from './keyboard-key'

interface KeyboardProps {
    onKeyPress: (key: string) => void
    usedLetters: Map<string, 'correct' | 'present' | 'absent'>
    letterBoardStatus: Map<string, LetterBoardStatus>
    solvedBoards: Set<number>
}

const Keyboard = ({
    onKeyPress,
    usedLetters,
    letterBoardStatus,
    solvedBoards,
}: KeyboardProps) => {
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
    ]

    return (
        <div className="flex flex-col gap-1.5 p-3 bg-black">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-1.5">
                    {row.map((key) => (
                        <KeyboardKey
                            key={key}
                            keyValue={key}
                            onClick={() => onKeyPress(key)}
                            letterStatus={usedLetters.get(key)}
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
