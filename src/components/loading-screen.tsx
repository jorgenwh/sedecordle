const LoadingScreen = () => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center ${activeTheme.rootClassName ?? 'bg-game-canvas'}`}
        >
            <div role="status" className="text-center">
                <div className="text-game-text text-2xl font-semibold tracking-tight">
                    Superwordle<span className="text-game-accent">.</span>
                </div>
                <p className="mt-3 text-sm text-game-muted">
                    Getting your boards ready…
                </p>
            </div>
        </div>
    )
}

export default LoadingScreen
import { activeTheme } from '../themes'
