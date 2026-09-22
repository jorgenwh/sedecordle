import type { CSSProperties } from 'react'

// Drifting particles layered over a scene: falling petals, rising embers, etc.
export const Ambient = ({
    count,
    motion,
    colors,
    shape = 'dot',
    glyphs,
    size = [4, 8],
    duration = [10, 20],
}: {
    count: number
    motion: 'fall' | 'rise' | 'float'
    colors: string[]
    shape?: 'dot' | 'glow' | 'bubble' | 'petal' | 'confetti'
    // Text characters to render instead of a CSS shape.
    glyphs?: string[]
    size?: [number, number]
    duration?: [number, number]
}) => (
    <>
        {Array.from({ length: count }, (_, i) => {
            // Deterministic pseudo-random spread so the layout is stable between renders.
            const px = size[0] + ((i * 7) % (size[1] - size[0] + 1))
            const seconds =
                duration[0] + ((i * 13) % (duration[1] - duration[0] + 1))
            const color = colors[i % colors.length]
            const style = {
                left: `${(i * 37 + 11) % 100}%`,
                top: motion === 'float' ? `${(i * 53 + 7) % 100}%` : undefined,
                width: glyphs ? undefined : px,
                height: glyphs
                    ? undefined
                    : shape === 'confetti'
                      ? px * 0.45
                      : px,
                fontSize: glyphs ? px : undefined,
                color,
                backgroundColor:
                    glyphs || shape === 'bubble' ? undefined : color,
                animationDuration: `${seconds}s`,
                animationDelay: `-${(i * 17) % seconds}s`,
                '--sway': `${((i * 29) % 80) - 40}px`,
                '--spin': `${(i % 2 ? 1 : -1) * (180 + ((i * 41) % 360))}deg`,
            } as CSSProperties
            return (
                <span
                    key={i}
                    className={`ambient ambient-${motion} ${glyphs ? '' : `ambient-${shape}`}`}
                    style={style}
                >
                    {glyphs?.[i % glyphs.length]}
                </span>
            )
        })}
    </>
)
