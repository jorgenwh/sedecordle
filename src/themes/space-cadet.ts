import { classicTheme } from './classic'
import { SpaceCadetScene } from './space-cadet-scene'
import type { Theme } from './types'

export const spaceCadetTheme: Theme = {
    ...classicTheme,
    id: 'space-cadet',
    name: 'Space Cadet',
    emoji: '🪐',
    rootClassName: 'space-cadet-background',
    Scene: SpaceCadetScene,
    boardContainerClassName:
        'theme-board bg-game-surface/80 border border-game-line/40 shadow-[inset_0_1px_0_rgba(165,180,252,0.08)]',
    bottomPanelClassName: `${classicTheme.bottomPanelClassName} theme-panel`,
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
