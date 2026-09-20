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
        'theme-board bg-game-surface/90 border border-game-line/40 shadow-sm',
    bottomPanelClassName: `${classicTheme.bottomPanelClassName} theme-panel`,
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
