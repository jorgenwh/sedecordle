import { classicTheme } from './classic'
import { BeachyScene } from './beachy-scene'
import type { Theme } from './types'

export const beachyTheme: Theme = {
    ...classicTheme,
    id: 'beachy',
    name: 'Beachy',
    emoji: '🏖️',
    rootClassName: 'beachy-background',
    Scene: BeachyScene,
    boardContainerClassName:
        'bg-game-surface/85 border border-game-line/40 shadow-sm',
    emptyCellClassName: 'bg-game-canvas/80 border-game-line/80',
}
