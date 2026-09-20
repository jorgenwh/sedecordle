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
        'theme-board bg-game-surface/90 border border-game-line/40 shadow-sm',
    bottomPanelClassName: `${classicTheme.bottomPanelClassName} theme-panel`,
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
