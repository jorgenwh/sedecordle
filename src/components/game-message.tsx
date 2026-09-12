interface GameMessageProps {
    message: string
}

export const GameMessage = ({ message }: GameMessageProps) => {
    if (!message) return null

    return (
        <div
            role="status"
            className="mb-5 mx-auto p-4 bg-game-surface border border-game-line rounded-xl text-center text-sm text-game-text max-w-2xl"
        >
            {message}
        </div>
    )
}
