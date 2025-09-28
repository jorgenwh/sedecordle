interface CurrentGuessDisplayProps {
    currentGuess: string
}

export const CurrentGuessDisplay = ({
    currentGuess,
}: CurrentGuessDisplayProps) => {
    const displayGuess = currentGuess.padEnd(5, '_')

    return (
        <div className="mt-4 text-center">
            <div className="text-2xl font-mono mb-4 h-8">
                {displayGuess.split('').map((char, i) => (
                    <span key={i} className="mx-1">
                        {char === '_' ? '◯' : char}
                    </span>
                ))}
            </div>
        </div>
    )
}
