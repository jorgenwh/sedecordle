import { classicTheme } from './classic'
import { HalloweenScene } from './seasonal-scenes'
import type { Theme } from './types'

export const halloweenTheme: Theme = {
    ...classicTheme,
    id: 'halloween',
    name: 'Halloween',
    emoji: '🎃',
    rootClassName: 'halloween-background',
    Scene: HalloweenScene,
    boardContainerClassName:
        'bg-game-surface/90 border border-game-line/40 shadow-sm',
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
