import type { Theme } from './types'

export const classicTheme: Theme = {
    id: 'classic',
    name: 'Classic',
    rootClassName: 'classic-background',
    boardContainerClassName: 'bg-transparent',
    emptyCellClassName: 'bg-game-canvas border-game-line',
    bottomPanelClassName:
        'bg-game-surface/95 border border-game-line backdrop-blur-xl shadow-[0_12px_48px_rgba(0,0,0,0.35)]',
    keyboardClassName: 'bg-transparent',
}
