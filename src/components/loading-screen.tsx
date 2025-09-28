interface LoadingScreenProps {
    message?: string
}

const LoadingScreen = ({
    message = 'Loading Sedecordle...',
}: LoadingScreenProps) => {
    return (
        <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center">
            <div className="text-white text-4xl font-bold mb-8">SEDECORDLE</div>
            <div className="flex space-x-2 mb-4">
                <div
                    className="w-3 h-3 bg-green-500 rounded-full animate-bounce"
                    style={{ animationDelay: '0ms' }}
                ></div>
                <div
                    className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"
                    style={{ animationDelay: '150ms' }}
                ></div>
                <div
                    className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: '300ms' }}
                ></div>
            </div>
            <div className="text-gray-400 text-sm">{message}</div>
        </div>
    )
}

export default LoadingScreen
