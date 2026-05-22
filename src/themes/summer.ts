import type { Theme } from './types'
import { SummerScene } from './summer-scene'

export const summerTheme: Theme = {
    id: 'summer',
    name: 'Summer',
    Scene: SummerScene,
    boardContainerClassName:
        'bg-slate-900/30 border border-white/25 backdrop-blur-sm shadow-lg',
    emptyCellClassName: 'bg-slate-900/40 border-white/15',
    bottomPanelClassName:
        'bg-gradient-to-b from-amber-900/80 to-amber-950/90 backdrop-blur-md border-t border-amber-700/40',
    keyboardClassName: 'bg-transparent',
}
