import { beachyTheme } from './beachy'
import { winterTheme } from './winter'
import { springTheme } from './spring'
import { autumnTheme } from './autumn'
import { halloweenTheme } from './halloween'
import { christmasTheme } from './christmas'
import { newYearTheme } from './new-year'
import type { Theme } from './types'

export const seasonalTheme: Theme = {
    id: 'seasonal',
    name: 'Seasonal',
    emoji: '🗓️',
}

// Local dates, Northern Hemisphere seasons. Holidays override the season.
export function getSeasonalTheme(date = new Date()): Theme {
    const month = date.getMonth() + 1
    const day = date.getDate()
    const monthDay = month * 100 + day

    if (monthDay >= 1228 || monthDay <= 107) return newYearTheme
    if (monthDay >= 1020 && monthDay <= 1102) return halloweenTheme
    if (month === 12) return christmasTheme
    if (month <= 2) return winterTheme
    if (month <= 5) return springTheme
    if (month <= 8) return beachyTheme
    return autumnTheme
}
