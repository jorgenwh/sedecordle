import { classicTheme } from './classic'
import { summerTheme } from './summer'
import { winterTheme } from './winter'
import type { Theme } from './types'

export const themes: Theme[] = [classicTheme, summerTheme, winterTheme]

// Active theme. Swap this (or build a selector later) to change the look.
export const activeTheme: Theme = winterTheme

export type { Theme }
