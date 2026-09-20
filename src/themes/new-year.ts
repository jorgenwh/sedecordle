import { classicTheme } from './classic'
import { NewYearScene } from './seasonal-scenes'
import type { Theme } from './types'

export const newYearTheme: Theme = {
    ...classicTheme,
    id: 'new-year',
    name: 'New Year',
    emoji: '🎆',
    rootClassName: 'new-year-background',
    Scene: NewYearScene,
    boardContainerClassName:
        'bg-game-surface/90 border border-game-line/40 shadow-sm',
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
