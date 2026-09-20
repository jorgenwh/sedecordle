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
        'theme-board bg-game-surface/90 border border-game-line/40 shadow-sm',
    bottomPanelClassName: `${classicTheme.bottomPanelClassName} theme-panel`,
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
