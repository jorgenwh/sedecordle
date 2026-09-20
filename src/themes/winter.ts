import type { Theme } from './types'
import { classicTheme } from './classic'
import { WinterScene } from './winter-scene'

export const winterTheme: Theme = {
    ...classicTheme,
    id: 'winter',
    name: 'Winter',
    emoji: '❄️',
    rootClassName: 'winter-background',
    Scene: WinterScene,
    boardContainerClassName:
        'bg-game-surface/90 border border-game-line/40 shadow-sm',
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
