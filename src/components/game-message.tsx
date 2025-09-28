interface GameMessageProps {
    message: string
}

export const GameMessage = ({ message }: GameMessageProps) => {
    if (!message) return null

    return (
        <div className="mb-4 p-4 bg-gray-800 rounded text-center max-w-2xl">
            {message}
        </div>
    )
}
