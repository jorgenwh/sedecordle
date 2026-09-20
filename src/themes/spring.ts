import { classicTheme } from './classic'
import { SpringScene } from './seasonal-scenes'
import type { Theme } from './types'

export const springTheme: Theme = {
    ...classicTheme,
    id: 'spring',
    name: 'Spring',
    emoji: '🌷',
    rootClassName: 'spring-background',
    Scene: SpringScene,
    boardContainerClassName:
        'bg-game-surface/90 border border-game-line/40 shadow-sm',
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
