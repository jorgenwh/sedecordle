import { useEffect, useRef, useState } from 'react'
import { themes, getSeasonalTheme, type Theme } from '../themes'

export const ThemeMenu = ({
    theme,
    onChange,
}: {
    theme: Theme
    onChange: (theme: Theme) => void
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([])
    const selectedIndex = themes.findIndex((option) => option.id === theme.id)

    const closeMenu = () => {
        setIsOpen(false)
        buttonRef.current?.focus()
    }

    useEffect(() => {
        if (!isOpen) return

        optionRefs.current[selectedIndex]?.focus()

        const handlePointerDown = (event: PointerEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('pointerdown', handlePointerDown)
        return () =>
            document.removeEventListener('pointerdown', handlePointerDown)
    }, [isOpen, selectedIndex])

    return (
        <div
            ref={containerRef}
            className="relative"
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsOpen(false)
                }
            }}
            onKeyDown={(event) => {
                event.stopPropagation()

                if (event.key === 'Escape') {
                    event.preventDefault()
                    closeMenu()
                } else if (
                    event.key === 'ArrowDown' ||
                    event.key === 'ArrowUp' ||
                    (isOpen && (event.key === 'Home' || event.key === 'End'))
                ) {
                    event.preventDefault()
                    if (!isOpen) {
                        setIsOpen(true)
                        return
                    }

                    const currentIndex = optionRefs.current.indexOf(
                        document.activeElement as HTMLButtonElement,
                    )
                    const nextIndex =
                        event.key === 'Home'
                            ? 0
                            : event.key === 'End'
                              ? themes.length - 1
                              : (currentIndex +
                                    (event.key === 'ArrowDown' ? 1 : -1) +
                                    themes.length) %
                                themes.length
                    optionRefs.current[nextIndex]?.focus()
                } else if (event.key === 'Tab' && isOpen) {
                    closeMenu()
                } else if (isOpen && /^[a-z]$/i.test(event.key)) {
                    event.preventDefault()
                    const currentIndex = optionRefs.current.indexOf(
                        document.activeElement as HTMLButtonElement,
                    )
                    for (let offset = 1; offset <= themes.length; offset++) {
                        const index = (currentIndex + offset) % themes.length
                        if (
                            themes[index].name
                                .toLowerCase()
                                .startsWith(event.key.toLowerCase())
                        ) {
                            optionRefs.current[index]?.focus()
                            break
                        }
                    }
                }
            }}
        >
            <button
                ref={buttonRef}
                type="button"
                aria-haspopup="menu"
                aria-expanded={isOpen}
                aria-controls={isOpen ? 'theme-menu' : undefined}
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-11 items-center gap-2 rounded-lg border border-game-line/60 bg-game-surface bg-gradient-to-r from-game-correct/25 from-[16.67%] via-game-present/25 via-50% to-game-absent to-[83.33%] px-3 text-xs font-medium text-game-text transition-colors hover:border-game-muted/50 focus-visible:outline-offset-2"
            >
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <path d="M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 1.8-4.2 1.5 1.5 0 0 1 1.1-2.6H18a3 3 0 0 0 3-3A9 9 0 0 0 12 3Z" />
                    <circle cx="7.5" cy="10.5" r="0.75" />
                    <circle cx="10.5" cy="7.5" r="0.75" />
                    <circle cx="15" cy="8" r="0.75" />
                </svg>
                Theme
                <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                >
                    <path d="m4 6 4 4 4-4" />
                </svg>
            </button>
            {isOpen && (
                <div
                    id="theme-menu"
                    role="menu"
                    aria-label="Theme"
                    className="absolute right-0 top-full z-30 mt-2 max-h-[min(24rem,60dvh)] w-56 overflow-y-auto overscroll-contain rounded-xl border border-game-line/70 bg-game-surface p-1.5 shadow-xl shadow-black/40"
                >
                    {themes.map((option, index) => (
                        <button
                            key={option.id}
                            ref={(element) => {
                                optionRefs.current[index] = element
                            }}
                            type="button"
                            role="menuitemradio"
                            aria-checked={option.id === theme.id}
                            tabIndex={-1}
                            onClick={() => {
                                onChange(option)
                                closeMenu()
                            }}
                            className={`flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-xs font-medium text-game-text hover:bg-game-tile/60 focus-visible:bg-game-tile/60 focus-visible:outline-none ${option.id === theme.id ? 'bg-game-tile/30' : ''}`}
                        >
                            <span
                                aria-hidden="true"
                                className="flex w-7 shrink-0 justify-center gap-0.5 text-lg"
                            >
                                {option.emoji ?? (
                                    <>
                                        <span className="h-3 w-2 rounded-sm bg-game-correct" />
                                        <span className="h-3 w-2 rounded-sm bg-game-present" />
                                        <span className="h-3 w-2 rounded-sm border border-game-line bg-game-absent" />
                                    </>
                                )}
                            </span>
                            <span className="min-w-0">
                                {option.name}
                                {option.id === 'seasonal' && (
                                    <span className="block text-[10px] font-normal text-game-muted">
                                        Auto · {getSeasonalTheme().name}
                                    </span>
                                )}
                            </span>
                            {option.id === theme.id && (
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-auto h-4 w-4 text-game-accent"
                                >
                                    <path d="m3 8 3 3 7-7" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
