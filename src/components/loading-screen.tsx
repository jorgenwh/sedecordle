const LoadingScreen = () => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center px-6 ${activeTheme.rootClassName ?? 'bg-game-canvas'}`}
        >
            <div role="status" className="text-center">
                <div className="text-game-text text-5xl sm:text-6xl font-semibold tracking-tight">
                    <span className="text-game-correct">S</span>u
                    <span className="text-game-present">p</span>er
                    <span className="text-game-correct">w</span>ord
                    <span className="text-game-present">l</span>e
                </div>
                <div
                    aria-hidden="true"
                    className="mt-8 flex justify-center gap-2 sm:gap-3"
                >
                    {[0, 1, 2, 3, 4].map((index) => (
                        <span
                            key={index}
                            className="loading-tile h-10 w-10 rounded-md border-2 border-game-line bg-game-absent sm:h-12 sm:w-12"
                            style={{ animationDelay: `${index * 160}ms` }}
                        />
                    ))}
                </div>
                <p className="mt-6 text-xl sm:text-2xl text-game-muted">
                    Getting your boards ready…
                </p>
            </div>
        </div>
    )
}

export default LoadingScreen
import { activeTheme } from '../themes'
