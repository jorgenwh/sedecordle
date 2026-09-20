import { winterTheme } from './winter'
import { WinterScene } from './winter-scene'
import type { Theme } from './types'

const ChristmasScene = () => <WinterScene festive />

export const christmasTheme: Theme = {
    ...winterTheme,
    id: 'christmas',
    name: 'Christmas',
    emoji: '🎄',
    rootClassName: 'christmas-background',
    Scene: ChristmasScene,
}
