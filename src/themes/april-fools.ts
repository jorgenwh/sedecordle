import { classicTheme } from './classic'
import { AprilFoolsScene } from './holiday-scenes'
import type { Theme } from './types'

export const aprilFoolsTheme: Theme = {
    ...classicTheme,
    id: 'april-fools',
    name: 'April Fools',
    emoji: '🦆',
    rootClassName: 'april-fools-background',
    Scene: AprilFoolsScene,
    boardContainerClassName:
        'theme-board bg-game-surface/90 border border-game-line/40 shadow-sm',
    bottomPanelClassName: `${classicTheme.bottomPanelClassName} theme-panel`,
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
