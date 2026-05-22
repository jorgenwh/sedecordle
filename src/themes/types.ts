import type { ComponentType } from 'react'

export interface Theme {
    id: string
    name: string
    // CSS classes applied to the App root. Should set the page background.
    // Falls back to plain bg-black when omitted.
    rootClassName?: string
    // Full-viewport background scene rendered behind game content.
    Scene?: ComponentType
    // Background + border for each of the 16 board frames (replaces the
    // default `bg-black border border-gray-800`).
    boardContainerClassName?: string
    // Background + border for unfilled cells (replaces `bg-black border-gray-800`).
    emptyCellClassName?: string
    // Background + border for the fixed bottom bar wrapping stats + keyboard
    // (replaces `bg-black border-t border-gray-800`). Positional classes
    // (`fixed bottom-0 left-0 right-0 z-20`) are always applied.
    bottomPanelClassName?: string
    // Background for the keyboard container (replaces `bg-black`).
    keyboardClassName?: string
}
