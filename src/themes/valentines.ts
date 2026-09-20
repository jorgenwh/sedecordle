import { classicTheme } from './classic'
import { ValentinesScene } from './holiday-scenes'
import type { Theme } from './types'

export const valentinesTheme: Theme = {
    ...classicTheme,
    id: 'valentines',
    name: 'Valentine’s',
    emoji: '💌',
    rootClassName: 'valentines-background',
    Scene: ValentinesScene,
    boardContainerClassName:
        'theme-board bg-game-surface/90 border border-game-line/40 shadow-sm',
    bottomPanelClassName: `${classicTheme.bottomPanelClassName} theme-panel`,
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
