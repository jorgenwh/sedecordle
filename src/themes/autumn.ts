import { classicTheme } from './classic'
import { AutumnScene } from './seasonal-scenes'
import type { Theme } from './types'

export const autumnTheme: Theme = {
    ...classicTheme,
    id: 'autumn',
    name: 'Autumn',
    emoji: '🍂',
    rootClassName: 'autumn-background',
    Scene: AutumnScene,
    boardContainerClassName:
        'bg-game-surface/90 border border-game-line/40 shadow-sm',
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
