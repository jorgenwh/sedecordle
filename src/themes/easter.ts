import { classicTheme } from './classic'
import { EasterScene } from './holiday-scenes'
import type { Theme } from './types'

export const easterTheme: Theme = {
    ...classicTheme,
    id: 'easter',
    name: 'Easter',
    emoji: '🥚',
    rootClassName: 'easter-background',
    Scene: EasterScene,
    boardContainerClassName:
        'theme-board bg-game-surface/90 border border-game-line/40 shadow-sm',
    bottomPanelClassName: `${classicTheme.bottomPanelClassName} theme-panel`,
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
