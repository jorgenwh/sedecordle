import { LetterBoardStatus } from '../types/game'
import KeyboardKey from './keyboard-key'

interface KeyboardProps {
    onKeyPress: (key: string) => void
    usedLetters: Map<string, 'correct' | 'present' | 'absent'>
    letterBoardStatus: Map<string, LetterBoardStatus>
}

const Keyboard = ({ onKeyPress, letterBoardStatus }: KeyboardProps) => {
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
                            boardStatus={letterBoardStatus.get(key)}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Keyboard
