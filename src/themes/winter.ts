import type { Theme } from './types'
import { WinterScene } from './winter-scene'

export const winterTheme: Theme = {
    id: 'winter',
    name: 'Winter',
    Scene: WinterScene,
    boardContainerClassName:
        'bg-slate-900/40 border border-sky-200/25 backdrop-blur-sm shadow-lg',
    emptyCellClassName: 'bg-slate-900/50 border-sky-200/15',
    bottomPanelClassName:
        'bg-gradient-to-b from-slate-900/85 to-blue-950/95 backdrop-blur-md border-t border-sky-300/25',
    keyboardClassName: 'bg-transparent',
}
