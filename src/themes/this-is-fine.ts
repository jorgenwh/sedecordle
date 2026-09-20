import { classicTheme } from './classic'
import { ThisIsFineScene } from './this-is-fine-scene'
import type { Theme } from './types'

export const thisIsFineTheme: Theme = {
    ...classicTheme,
    id: 'this-is-fine',
    name: 'This Is Fine',
    emoji: '🔥',
    rootClassName: 'this-is-fine-background',
    Scene: ThisIsFineScene,
    boardContainerClassName:
        'bg-game-surface/90 border border-game-line/40 shadow-sm',
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
