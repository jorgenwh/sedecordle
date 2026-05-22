import { classicTheme } from './classic'
import { summerTheme } from './summer'
import type { Theme } from './types'

export const themes: Theme[] = [classicTheme, summerTheme]

// Active theme. Swap this (or build a selector later) to change the look.
export const activeTheme: Theme = summerTheme

export type { Theme }
