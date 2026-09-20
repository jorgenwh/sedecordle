import { classicTheme } from './classic'
import { beachyTheme } from './beachy'
import { spaceCadetTheme } from './space-cadet'
import { thisIsFineTheme } from './this-is-fine'
import { seasonalTheme } from './seasonal'
import { newYearTheme } from './new-year'
import { winterTheme } from './winter'
import { springTheme } from './spring'
import { autumnTheme } from './autumn'
import { halloweenTheme } from './halloween'
import { christmasTheme } from './christmas'
import { valentinesTheme } from './valentines'
import { aprilFoolsTheme } from './april-fools'
import { easterTheme } from './easter'
import type { Theme } from './types'

export const themes: Theme[] = [
    classicTheme,
    seasonalTheme,
    newYearTheme,
    winterTheme,
    valentinesTheme,
    springTheme,
    aprilFoolsTheme,
    easterTheme,
    beachyTheme,
    autumnTheme,
    halloweenTheme,
    christmasTheme,
    spaceCadetTheme,
    thisIsFineTheme,
]

export type { Theme }
export { getSeasonalTheme } from './seasonal'
