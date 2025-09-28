interface KeyboardProps {
    onKeyPress: (key: string) => void
    usedLetters: Map<string, 'correct' | 'present' | 'absent'>
}

const Keyboard = ({ onKeyPress, usedLetters }: KeyboardProps) => {
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
    ]

    const getKeyColor = (key: string): string => {
        const status = usedLetters.get(key)
        if (!status) return 'bg-gray-600 hover:bg-gray-500'
        if (status === 'correct') return 'bg-green-600'
        if (status === 'present') return 'bg-yellow-600'
        return 'bg-gray-800'
    }

    const handleKeyClick = (key: string) => {
        onKeyPress(key)
    }

    return (
        <div className="flex flex-col gap-1 p-3 bg-black">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-1">
                    {row.map((key) => (
                        <button
                            key={key}
                            onClick={() => handleKeyClick(key)}
                            className={`
                                ${getKeyColor(key)}
                                ${key.length > 1 ? 'px-3' : 'w-10'}
                                h-12 rounded font-bold text-white text-sm
                                transition-colors duration-200
                            `}
                        >
                            {key === 'BACKSPACE' ? '⌫' : key}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Keyboard
