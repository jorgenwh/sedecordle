import { beachyTheme } from './beachy'
import { winterTheme } from './winter'
import { springTheme } from './spring'
import { autumnTheme } from './autumn'
import { halloweenTheme } from './halloween'
import { christmasTheme } from './christmas'
import { newYearTheme } from './new-year'
import { valentinesTheme } from './valentines'
import { aprilFoolsTheme } from './april-fools'
import { easterTheme } from './easter'
import type { Theme } from './types'

export const seasonalTheme: Theme = {
    id: 'seasonal',
    name: 'Seasonal',
    emoji: '🗓️',
}

// Gregorian Easter Sunday, using the Meeus/Jones/Butcher computus.
function getEasterSunday(year: number): Date {
    const cycle = year % 19
    const century = Math.floor(year / 100)
    const yearInCentury = year % 100
    const solarCorrection = Math.floor((century + 8) / 25)
    const lunarCorrection = Math.floor((century - solarCorrection + 1) / 3)
    const epact =
        (19 * cycle +
            century -
            Math.floor(century / 4) -
            lunarCorrection +
            15) %
        30
    const weekday =
        (32 +
            2 * (century % 4) +
            2 * Math.floor(yearInCentury / 4) -
            epact -
            (yearInCentury % 4)) %
        7
    const correction = Math.floor((cycle + 11 * epact + 22 * weekday) / 451)
    const month = Math.floor((epact + weekday - 7 * correction + 114) / 31)
    const day = ((epact + weekday - 7 * correction + 114) % 31) + 1
    return new Date(year, month - 1, day)
}

// Local dates, Northern Hemisphere seasons. Holidays override the season.
export function getSeasonalTheme(date = new Date()): Theme {
    const month = date.getMonth() + 1
    const day = date.getDate()
    const monthDay = month * 100 + day

    if (monthDay >= 1228 || monthDay <= 107) return newYearTheme
    if (monthDay === 214) return valentinesTheme
    // This one-day theme takes priority when April 1 overlaps Easter.
    if (monthDay === 401) return aprilFoolsTheme
    if (month === 3 || month === 4) {
        const easter = getEasterSunday(date.getFullYear())
        const start = new Date(easter)
        start.setDate(easter.getDate() - 7)
        const end = new Date(easter)
        end.setDate(easter.getDate() + 2)
        if (date >= start && date < end) return easterTheme
    }
    if (monthDay >= 1020 && monthDay <= 1102) return halloweenTheme
    if (month === 12) return christmasTheme
    if (month <= 2) return winterTheme
    if (month <= 5) return springTheme
    if (month <= 8) return beachyTheme
    return autumnTheme
}
