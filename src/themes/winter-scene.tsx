const Moon = () => (
    <svg
        className="absolute top-4 right-6 sm:top-8 sm:right-16 w-24 h-24 sm:w-36 sm:h-36 drop-shadow-[0_0_40px_rgba(224,242,254,0.45)]"
        viewBox="0 0 200 200"
        aria-hidden
    >
        <defs>
            <radialGradient id="moon-halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E1F5FE" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#E1F5FE" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="moon-core" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFDE7" />
                <stop offset="70%" stopColor="#FFF8E1" />
                <stop offset="100%" stopColor="#FFE9A8" />
            </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="95" fill="url(#moon-halo)" />
        <circle cx="100" cy="100" r="60" fill="url(#moon-core)" />
        <circle cx="78" cy="86" r="9" fill="#E0E0E0" opacity="0.35" />
        <circle cx="118" cy="112" r="7" fill="#E0E0E0" opacity="0.35" />
        <circle cx="92" cy="122" r="5" fill="#E0E0E0" opacity="0.35" />
        <circle cx="130" cy="88" r="4" fill="#E0E0E0" opacity="0.35" />
    </svg>
)

const STAR_POSITIONS: {
    top: string
    left: string
    size: number
    delay: string
}[] = [
    { top: '4%', left: '8%', size: 3, delay: '0s' },
    { top: '6%', left: '22%', size: 2, delay: '1.2s' },
    { top: '12%', left: '34%', size: 4, delay: '0.6s' },
    { top: '3%', left: '46%', size: 2, delay: '2s' },
    { top: '10%', left: '58%', size: 3, delay: '1.4s' },
    { top: '5%', left: '70%', size: 2, delay: '0.3s' },
    { top: '14%', left: '88%', size: 3, delay: '1.7s' },
    { top: '20%', left: '6%', size: 2, delay: '2.4s' },
    { top: '24%', left: '18%', size: 3, delay: '0.9s' },
    { top: '22%', left: '40%', size: 2, delay: '1.1s' },
    { top: '28%', left: '52%', size: 3, delay: '0.4s' },
    { top: '18%', left: '64%', size: 2, delay: '1.9s' },
    { top: '26%', left: '78%', size: 4, delay: '0.7s' },
    { top: '32%', left: '12%', size: 2, delay: '1.5s' },
    { top: '36%', left: '30%', size: 2, delay: '0.2s' },
    { top: '34%', left: '50%', size: 3, delay: '2.2s' },
    { top: '40%', left: '66%', size: 2, delay: '1s' },
    { top: '38%', left: '82%', size: 2, delay: '0.5s' },
]

const Stars = () => (
    <>
        {STAR_POSITIONS.map((s, i) => (
            <div
                key={i}
                className="absolute star-twinkle rounded-full bg-white"
                style={{
                    top: s.top,
                    left: s.left,
                    width: s.size,
                    height: s.size,
                    animationDelay: s.delay,
                    boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
                }}
            />
        ))}
    </>
)

const SNOWFLAKE_COUNT = 40
const SNOWFLAKES = Array.from({ length: SNOWFLAKE_COUNT }).map((_, i) => {
    // Deterministic pseudo-random spread so the layout is stable between renders.
    const left = ((i * 53) % 100) + ((i * 7) % 100) / 100
    const size = 3 + ((i * 11) % 6)
    const duration = 9 + ((i * 13) % 12)
    const delay = -((i * 17) % 22)
    const opacity = 0.55 + ((i * 23) % 45) / 100
    return { left, size, duration, delay, opacity }
})

const Snowflakes = () => (
    <>
        {SNOWFLAKES.map((s, i) => (
            <div
                key={i}
                className="snowflake"
                style={{
                    left: `${s.left}%`,
                    width: s.size,
                    height: s.size,
                    animationDuration: `${s.duration}s`,
                    animationDelay: `${s.delay}s`,
                    opacity: s.opacity,
                }}
            />
        ))}
    </>
)

const Mountains = () => (
    <svg
        className="absolute left-0 right-0 w-full"
        style={{ top: '46%', height: '14%' }}
        viewBox="0 0 1920 250"
        preserveAspectRatio="none"
        aria-hidden
    >
        {/* Back range */}
        <path
            d="M 0 250 L 300 80 L 500 150 L 800 60 L 1100 130 L 1400 70 L 1700 110 L 1920 90 L 1920 250 Z"
            fill="#5C6BC0"
            opacity="0.55"
        />
        {/* Back snow caps */}
        <path d="M 285 90 L 300 80 L 315 90 L 300 100 Z" fill="#ECEFF1" />
        <path d="M 785 70 L 800 60 L 815 70 L 800 80 Z" fill="#ECEFF1" />
        <path d="M 1385 80 L 1400 70 L 1415 80 L 1400 90 Z" fill="#ECEFF1" />
        {/* Front range */}
        <path
            d="M 0 250 L 200 130 L 450 200 L 700 110 L 950 180 L 1200 130 L 1500 170 L 1700 140 L 1920 175 L 1920 250 Z"
            fill="#3F51B5"
            opacity="0.75"
        />
        {/* Front snow caps */}
        <path d="M 185 140 L 200 130 L 215 140 L 200 150 Z" fill="#FFFFFF" />
        <path d="M 685 120 L 700 110 L 715 120 L 700 130 Z" fill="#FFFFFF" />
        <path
            d="M 1185 140 L 1200 130 L 1215 140 L 1200 150 Z"
            fill="#FFFFFF"
        />
    </svg>
)

const ChristmasTree = ({ className }: { className: string }) => (
    <svg className={`absolute ${className}`} viewBox="0 0 200 320" aria-hidden>
        {/* Trunk */}
        <rect x="88" y="270" width="24" height="38" fill="#5D4037" />
        <rect
            x="88"
            y="270"
            width="6"
            height="38"
            fill="#3E2723"
            opacity="0.7"
        />
        {/* Tree tiers */}
        <path d="M 100 50 L 48 130 L 152 130 Z" fill="#1B5E20" />
        <path d="M 100 100 L 32 200 L 168 200 Z" fill="#2E7D32" />
        <path d="M 100 165 L 18 275 L 182 275 Z" fill="#388E3C" />
        {/* Tier shadow lines */}
        <path
            d="M 100 50 L 48 130 L 152 130 Z"
            fill="none"
            stroke="#1B5E20"
            strokeWidth="2"
        />
        {/* Star */}
        <path
            d="M 100 18 L 106 36 L 124 36 L 110 47 L 116 65 L 100 54 L 84 65 L 90 47 L 76 36 L 94 36 Z"
            fill="#FFD54F"
            stroke="#F9A825"
            strokeWidth="1.5"
        />
        {/* Ornaments */}
        <circle cx="80" cy="116" r="5" fill="#E53935" />
        <circle cx="120" cy="124" r="5" fill="#FFD700" />
        <circle cx="60" cy="178" r="6" fill="#1976D2" />
        <circle cx="100" cy="192" r="6" fill="#E53935" />
        <circle cx="138" cy="184" r="6" fill="#43A047" />
        <circle cx="42" cy="252" r="6" fill="#FFD700" />
        <circle cx="78" cy="250" r="6" fill="#1976D2" />
        <circle cx="120" cy="258" r="6" fill="#E53935" />
        <circle cx="156" cy="250" r="6" fill="#FFD700" />
        {/* Ornament highlights */}
        <circle cx="78" cy="114" r="1.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="118" cy="122" r="1.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="58" cy="176" r="2" fill="#FFFFFF" opacity="0.8" />
        <circle cx="98" cy="190" r="2" fill="#FFFFFF" opacity="0.8" />
        <circle cx="136" cy="182" r="2" fill="#FFFFFF" opacity="0.8" />
        {/* Tinsel garland */}
        <path
            d="M 60 140 Q 80 150 100 142 Q 120 150 140 140"
            stroke="#FFD700"
            strokeWidth="2"
            fill="none"
            opacity="0.85"
        />
        <path
            d="M 38 210 Q 70 225 100 215 Q 130 225 162 210"
            stroke="#FFD700"
            strokeWidth="2"
            fill="none"
            opacity="0.85"
        />
    </svg>
)

const Snowman = ({ className }: { className: string }) => (
    <svg className={`absolute ${className}`} viewBox="0 0 200 340" aria-hidden>
        {/* Snow shadow on ground */}
        <ellipse
            cx="100"
            cy="320"
            rx="70"
            ry="10"
            fill="#000000"
            opacity="0.12"
        />
        {/* Bottom snowball */}
        <circle cx="100" cy="260" r="62" fill="#FFFFFF" />
        <circle cx="92" cy="252" r="56" fill="#F5F5F5" opacity="0.45" />
        {/* Middle snowball */}
        <circle cx="100" cy="172" r="46" fill="#FFFFFF" />
        <circle cx="94" cy="166" r="40" fill="#F5F5F5" opacity="0.45" />
        {/* Head */}
        <circle cx="100" cy="100" r="32" fill="#FFFFFF" />
        <circle cx="96" cy="96" r="28" fill="#F5F5F5" opacity="0.4" />
        {/* Top hat - brim */}
        <rect x="68" y="74" width="64" height="6" fill="#212121" />
        {/* Top hat - crown */}
        <rect x="78" y="44" width="44" height="32" fill="#212121" />
        {/* Hat band */}
        <rect x="78" y="68" width="44" height="6" fill="#C62828" />
        {/* Eyes */}
        <circle cx="89" cy="98" r="3" fill="#212121" />
        <circle cx="111" cy="98" r="3" fill="#212121" />
        {/* Eye highlight */}
        <circle cx="90" cy="97" r="1" fill="#FFFFFF" />
        <circle cx="112" cy="97" r="1" fill="#FFFFFF" />
        {/* Carrot nose */}
        <path
            d="M 100 108 L 138 114 L 100 120 Z"
            fill="#FF6F00"
            stroke="#E65100"
            strokeWidth="1"
        />
        <path
            d="M 110 113 L 118 114 L 110 115"
            stroke="#E65100"
            strokeWidth="0.5"
            fill="none"
        />
        {/* Mouth */}
        <circle cx="90" cy="124" r="1.6" fill="#212121" />
        <circle cx="94" cy="127" r="1.6" fill="#212121" />
        <circle cx="100" cy="128" r="1.6" fill="#212121" />
        <circle cx="106" cy="127" r="1.6" fill="#212121" />
        <circle cx="110" cy="124" r="1.6" fill="#212121" />
        {/* Scarf — front */}
        <rect x="64" y="140" width="72" height="16" rx="3" fill="#C62828" />
        {/* Scarf — hanging tail */}
        <path d="M 104 152 L 122 198 L 108 198 L 100 154 Z" fill="#C62828" />
        <rect
            x="106"
            y="198"
            width="14"
            height="3"
            fill="#FFFFFF"
            opacity="0.85"
        />
        <rect
            x="104"
            y="194"
            width="18"
            height="2"
            fill="#FFFFFF"
            opacity="0.85"
        />
        {/* Scarf stripes */}
        <line
            x1="70"
            y1="148"
            x2="130"
            y2="148"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            opacity="0.85"
        />
        {/* Buttons */}
        <circle cx="100" cy="160" r="4" fill="#212121" />
        <circle cx="100" cy="180" r="4" fill="#212121" />
        <circle cx="100" cy="200" r="4" fill="#212121" />
        {/* Arms (sticks) */}
        <path
            d="M 56 170 L 14 144 M 22 152 L 14 144 L 26 138"
            stroke="#5D4037"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
        />
        <path
            d="M 144 170 L 186 144 M 178 152 L 186 144 L 174 138"
            stroke="#5D4037"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
        />
    </svg>
)

const Sled = ({ className }: { className: string }) => (
    <svg className={`absolute ${className}`} viewBox="0 0 220 110" aria-hidden>
        {/* Snow shadow */}
        <ellipse
            cx="110"
            cy="92"
            rx="90"
            ry="6"
            fill="#000000"
            opacity="0.12"
        />
        {/* Runners */}
        <path
            d="M 12 78 Q 4 60 22 56 L 198 56 Q 216 60 208 78"
            stroke="#C62828"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        {/* Runner highlight */}
        <path
            d="M 22 56 L 198 56"
            stroke="#EF5350"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
        />
        {/* Cross supports */}
        <line
            x1="38"
            y1="50"
            x2="38"
            y2="62"
            stroke="#C62828"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <line
            x1="182"
            y1="50"
            x2="182"
            y2="62"
            stroke="#C62828"
            strokeWidth="3"
            strokeLinecap="round"
        />
        {/* Seat planks */}
        <rect
            x="28"
            y="38"
            width="166"
            height="14"
            rx="3"
            fill="#A0703D"
            stroke="#7A4F2B"
            strokeWidth="1.5"
        />
        {/* Plank divisions */}
        <line
            x1="62"
            y1="38"
            x2="62"
            y2="52"
            stroke="#7A4F2B"
            strokeWidth="1.2"
        />
        <line
            x1="96"
            y1="38"
            x2="96"
            y2="52"
            stroke="#7A4F2B"
            strokeWidth="1.2"
        />
        <line
            x1="130"
            y1="38"
            x2="130"
            y2="52"
            stroke="#7A4F2B"
            strokeWidth="1.2"
        />
        <line
            x1="164"
            y1="38"
            x2="164"
            y2="52"
            stroke="#7A4F2B"
            strokeWidth="1.2"
        />
        {/* Wood grain */}
        <line
            x1="32"
            y1="44"
            x2="190"
            y2="44"
            stroke="#C28A4A"
            strokeWidth="0.8"
            opacity="0.6"
        />
        {/* Rope pull */}
        <path
            d="M 22 56 Q 8 38 -6 44"
            stroke="#8B4513"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
        />
    </svg>
)

const GiftBox = ({ className }: { className: string }) => (
    <svg className={`absolute ${className}`} viewBox="0 0 120 130" aria-hidden>
        {/* Snow shadow */}
        <ellipse
            cx="60"
            cy="125"
            rx="48"
            ry="5"
            fill="#000000"
            opacity="0.12"
        />
        {/* Box */}
        <rect
            x="12"
            y="50"
            width="96"
            height="70"
            fill="#C62828"
            stroke="#7F0000"
            strokeWidth="1.5"
            rx="3"
        />
        {/* Lid */}
        <rect
            x="6"
            y="42"
            width="108"
            height="18"
            fill="#B71C1C"
            stroke="#7F0000"
            strokeWidth="1.5"
            rx="3"
        />
        {/* Vertical ribbon */}
        <rect x="52" y="42" width="14" height="78" fill="#FFD700" />
        {/* Horizontal ribbon */}
        <rect x="6" y="50" width="108" height="10" fill="#FFD700" />
        {/* Bow loops */}
        <ellipse
            cx="42"
            cy="38"
            rx="18"
            ry="11"
            fill="#FFD700"
            stroke="#F9A825"
            strokeWidth="1.5"
        />
        <ellipse
            cx="76"
            cy="38"
            rx="18"
            ry="11"
            fill="#FFD700"
            stroke="#F9A825"
            strokeWidth="1.5"
        />
        <ellipse cx="42" cy="38" rx="6" ry="4" fill="#F9A825" opacity="0.6" />
        <ellipse cx="76" cy="38" rx="6" ry="4" fill="#F9A825" opacity="0.6" />
        {/* Bow knot */}
        <rect
            x="53"
            y="30"
            width="12"
            height="18"
            fill="#F9A825"
            stroke="#E65100"
            strokeWidth="1.2"
            rx="2"
        />
    </svg>
)

const SkiTrail = ({
    className,
    flip = false,
}: {
    className: string
    flip?: boolean
}) => (
    <svg
        className={`absolute ${className}`}
        viewBox="0 0 200 15"
        preserveAspectRatio="none"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
        aria-hidden
    >
        {/* Near segment (closest to skier, brightest) */}
        <path
            d="M 140 5 Q 170 4 200 6"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            opacity="0.9"
        />
        <path
            d="M 140 11 Q 170 10 200 12"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            opacity="0.9"
        />
        {/* Middle segment */}
        <path
            d="M 70 6 Q 105 5 140 5"
            stroke="#FFFFFF"
            strokeWidth="1.3"
            fill="none"
            strokeLinecap="round"
            opacity="0.55"
        />
        <path
            d="M 70 12 Q 105 11 140 11"
            stroke="#FFFFFF"
            strokeWidth="1.3"
            fill="none"
            strokeLinecap="round"
            opacity="0.55"
        />
        {/* Far segment (oldest, faintest) */}
        <path
            d="M 0 8 Q 35 6 70 6"
            stroke="#FFFFFF"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity="0.25"
        />
        <path
            d="M 0 14 Q 35 12 70 12"
            stroke="#FFFFFF"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity="0.25"
        />
    </svg>
)

const Skier = ({
    className,
    jacketColor = '#E53935',
    hatColor = '#1976D2',
    flip = false,
}: {
    className: string
    jacketColor?: string
    hatColor?: string
    flip?: boolean
}) => (
    <svg
        className={`absolute ${className}`}
        viewBox="0 0 60 90"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
        aria-hidden
    >
        {/* Ski trail (puff of snow behind) */}
        <ellipse cx="14" cy="80" rx="10" ry="3" fill="#FFFFFF" opacity="0.5" />
        {/* Skis */}
        <path
            d="M 8 78 L 50 72"
            stroke="#FAFAFA"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <path
            d="M 6 84 L 48 78"
            stroke="#E0E0E0"
            strokeWidth="3"
            strokeLinecap="round"
        />
        {/* Poles */}
        <line
            x1="20"
            y1="42"
            x2="14"
            y2="80"
            stroke="#212121"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <line
            x1="34"
            y1="42"
            x2="46"
            y2="80"
            stroke="#212121"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        {/* Legs */}
        <line
            x1="22"
            y1="50"
            x2="18"
            y2="74"
            stroke="#1A237E"
            strokeWidth="4"
            strokeLinecap="round"
        />
        <line
            x1="30"
            y1="50"
            x2="34"
            y2="74"
            stroke="#1A237E"
            strokeWidth="4"
            strokeLinecap="round"
        />
        {/* Body (jacket) */}
        <ellipse cx="26" cy="40" rx="11" ry="14" fill={jacketColor} />
        <path
            d="M 16 38 Q 26 32 36 38"
            stroke="#000000"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
        />
        {/* Arms holding poles */}
        <line
            x1="18"
            y1="38"
            x2="20"
            y2="44"
            stroke={jacketColor}
            strokeWidth="4"
            strokeLinecap="round"
        />
        <line
            x1="34"
            y1="38"
            x2="34"
            y2="44"
            stroke={jacketColor}
            strokeWidth="4"
            strokeLinecap="round"
        />
        {/* Head */}
        <circle cx="26" cy="22" r="6" fill="#FDD7A4" />
        {/* Hat (beanie) */}
        <path d="M 19 22 Q 26 8 33 22 Z" fill={hatColor} />
        <circle cx="33" cy="9" r="2.5" fill="#FFFFFF" />
        {/* Scarf */}
        <rect x="20" y="27" width="12" height="4" fill="#FFD700" rx="1" />
    </svg>
)

// Wraps a skier together with its trail so the trail is anchored to the
// skier's skis. The wrapper provides the absolute positioning; the inner
// Skier fills the wrapper and the trail extends from the wrapper edge.
const SkierGroup = ({
    className,
    jacketColor,
    hatColor,
    flip = false,
}: {
    className: string
    jacketColor?: string
    hatColor?: string
    flip?: boolean
}) => (
    <div className={`absolute ${className}`}>
        <SkiTrail
            className={`${flip ? 'left-full' : 'right-full'} bottom-0 w-[420%] h-[22%]`}
            flip={flip}
        />
        <Skier
            className="inset-0 w-full h-full"
            jacketColor={jacketColor}
            hatColor={hatColor}
            flip={flip}
        />
    </div>
)

const Penguin = ({
    className,
    flip = false,
}: {
    className: string
    flip?: boolean
}) => (
    <svg
        className={`absolute ${className}`}
        viewBox="0 0 80 110"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
        aria-hidden
    >
        {/* Shadow */}
        <ellipse
            cx="40"
            cy="104"
            rx="28"
            ry="3"
            fill="#000000"
            opacity="0.18"
        />
        {/* Body (black back) */}
        <ellipse cx="40" cy="60" rx="30" ry="42" fill="#1B1B1B" />
        {/* White belly */}
        <ellipse cx="40" cy="66" rx="22" ry="32" fill="#FAFAFA" />
        {/* Flippers */}
        <ellipse
            cx="11"
            cy="60"
            rx="5"
            ry="20"
            fill="#1B1B1B"
            transform="rotate(-15 11 60)"
        />
        <ellipse
            cx="69"
            cy="60"
            rx="5"
            ry="20"
            fill="#1B1B1B"
            transform="rotate(15 69 60)"
        />
        {/* Feet */}
        <ellipse cx="28" cy="102" rx="9" ry="4" fill="#FF8F00" />
        <ellipse cx="52" cy="102" rx="9" ry="4" fill="#FF8F00" />
        {/* Eyes */}
        <circle cx="32" cy="30" r="4" fill="#FAFAFA" />
        <circle cx="48" cy="30" r="4" fill="#FAFAFA" />
        <circle cx="33" cy="31" r="2" fill="#212121" />
        <circle cx="49" cy="31" r="2" fill="#212121" />
        <circle cx="33.5" cy="30.5" r="0.7" fill="#FFFFFF" />
        <circle cx="49.5" cy="30.5" r="0.7" fill="#FFFFFF" />
        {/* Beak */}
        <path
            d="M 35 38 L 45 38 L 40 46 Z"
            fill="#FF9800"
            stroke="#E65100"
            strokeWidth="0.8"
        />
        {/* Beak shading */}
        <path d="M 40 40 L 40 46" stroke="#E65100" strokeWidth="0.6" />
    </svg>
)

const Reindeer = ({ rudolph = false }: { rudolph?: boolean }) => (
    <g>
        {/* Back legs (straight down) */}
        <line
            x1="62"
            y1="42"
            x2="60"
            y2="64"
            stroke="#5D4037"
            strokeWidth="3.5"
            strokeLinecap="round"
        />
        <line
            x1="72"
            y1="42"
            x2="74"
            y2="64"
            stroke="#5D4037"
            strokeWidth="3.5"
            strokeLinecap="round"
        />
        {/* Front legs (slightly forward) */}
        <line
            x1="30"
            y1="42"
            x2="26"
            y2="64"
            stroke="#5D4037"
            strokeWidth="3.5"
            strokeLinecap="round"
        />
        <line
            x1="38"
            y1="42"
            x2="40"
            y2="64"
            stroke="#5D4037"
            strokeWidth="3.5"
            strokeLinecap="round"
        />
        {/* Hooves */}
        <ellipse cx="26" cy="64" rx="2.5" ry="1.5" fill="#3E2723" />
        <ellipse cx="40" cy="64" rx="2.5" ry="1.5" fill="#3E2723" />
        <ellipse cx="60" cy="64" rx="2.5" ry="1.5" fill="#3E2723" />
        <ellipse cx="74" cy="64" rx="2.5" ry="1.5" fill="#3E2723" />
        {/* Body (chunkier, more deer-like) */}
        <ellipse cx="50" cy="32" rx="26" ry="12" fill="#8D6E63" />
        <ellipse cx="50" cy="26" rx="22" ry="6" fill="#A1887F" />
        {/* Belly */}
        <ellipse cx="50" cy="40" rx="20" ry="4" fill="#D7CCC8" opacity="0.7" />
        {/* Tail (short bushy) */}
        <ellipse cx="74" cy="26" rx="3" ry="5" fill="#5D4037" />
        <ellipse cx="74" cy="24" rx="2" ry="3" fill="#FAFAFA" opacity="0.6" />
        {/* Neck (clear shape rising from front of body to head) */}
        <path d="M 26 28 Q 18 16 18 6 L 30 4 L 36 28 Z" fill="#8D6E63" />
        <path d="M 18 6 L 30 4 L 28 10 L 20 11 Z" fill="#A1887F" />
        {/* Head */}
        <ellipse cx="22" cy="6" rx="9" ry="6" fill="#A1887F" />
        {/* Muzzle */}
        <ellipse cx="10" cy="11" rx="6" ry="4" fill="#BCAAA4" />
        <ellipse cx="12" cy="13" rx="4" ry="2" fill="#D7CCC8" opacity="0.7" />
        {/* Ears */}
        <ellipse
            cx="16"
            cy="-1"
            rx="2.5"
            ry="4"
            fill="#8D6E63"
            transform="rotate(-25 16 -1)"
        />
        <ellipse
            cx="28"
            cy="-1"
            rx="2.5"
            ry="4"
            fill="#8D6E63"
            transform="rotate(25 28 -1)"
        />
        <ellipse
            cx="16"
            cy="0"
            rx="1"
            ry="2"
            fill="#D7CCC8"
            transform="rotate(-25 16 0)"
        />
        <ellipse
            cx="28"
            cy="0"
            rx="1"
            ry="2"
            fill="#D7CCC8"
            transform="rotate(25 28 0)"
        />
        {/* Antlers — left side (branchy) */}
        <g stroke="#5D4037" strokeWidth="2.2" fill="none" strokeLinecap="round">
            <path d="M 18 -4 Q 14 -10 10 -18" />
            <path d="M 14 -10 L 7 -12" strokeWidth="1.8" />
            <path d="M 12 -14 L 5 -17" strokeWidth="1.6" />
            <path d="M 10 -18 L 14 -22" strokeWidth="1.6" />
        </g>
        {/* Antlers — right side */}
        <g stroke="#5D4037" strokeWidth="2.2" fill="none" strokeLinecap="round">
            <path d="M 26 -4 Q 30 -10 34 -18" />
            <path d="M 30 -10 L 37 -12" strokeWidth="1.8" />
            <path d="M 32 -14 L 39 -17" strokeWidth="1.6" />
            <path d="M 34 -18 L 30 -22" strokeWidth="1.6" />
        </g>
        {/* Eye */}
        <circle cx="20" cy="5" r="1.5" fill="#212121" />
        <circle cx="20.5" cy="4.5" r="0.5" fill="#FFFFFF" />
        {/* Nose */}
        {rudolph ? (
            <circle cx="5" cy="11" r="3" fill="#E53935" />
        ) : (
            <circle cx="5" cy="11" r="2" fill="#3E2723" />
        )}
        {/* Mouth */}
        <path
            d="M 6 14 Q 9 16 12 14"
            stroke="#5D4037"
            strokeWidth="0.8"
            fill="none"
        />
        {/* Collar with bell */}
        <rect x="22" y="18" width="14" height="3" fill="#C62828" rx="1" />
        <circle
            cx="29"
            cy="23"
            r="2"
            fill="#FFD700"
            stroke="#F9A825"
            strokeWidth="0.5"
        />
    </g>
)

const SantaSleigh = ({ className }: { className: string }) => (
    <svg className={`absolute ${className}`} viewBox="0 0 340 130" aria-hidden>
        {/* Reins from sleigh to back reindeer */}
        <path
            d="M 250 60 Q 220 50 200 55"
            stroke="#5D4037"
            strokeWidth="1.5"
            fill="none"
        />
        <path
            d="M 250 65 Q 220 60 200 62"
            stroke="#5D4037"
            strokeWidth="1.5"
            fill="none"
        />
        {/* Back reindeer */}
        <g transform="translate(110, 30)">
            <Reindeer />
        </g>
        {/* Reins from back reindeer to lead reindeer */}
        <path
            d="M 120 50 Q 100 38 80 42"
            stroke="#5D4037"
            strokeWidth="1.5"
            fill="none"
        />
        <path
            d="M 120 55 Q 100 48 80 50"
            stroke="#5D4037"
            strokeWidth="1.5"
            fill="none"
        />
        {/* Lead reindeer (Rudolph) */}
        <g transform="translate(0, 22)">
            <Reindeer rudolph />
        </g>
        {/* Rudolph's nose glow (large radial behind) */}
        <circle cx="4" cy="42" r="10" fill="#E53935" opacity="0.25" />
        {/* Sleigh body */}
        <g transform="translate(248, 36)">
            {/* Runner */}
            <path
                d="M -4 60 Q -10 66 -2 70 L 88 70 Q 96 66 90 60"
                stroke="#3E2723"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
            />
            {/* Front curl */}
            <path
                d="M 88 60 Q 96 50 86 44"
                stroke="#FFD700"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
            />
            {/* Main body */}
            <path
                d="M 0 60 L 8 32 Q 14 24 30 24 L 78 24 Q 86 28 86 44 L 86 60 Z"
                fill="#C62828"
                stroke="#7F0000"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            {/* Trim (gold edge) */}
            <path
                d="M 8 32 Q 14 24 30 24 L 78 24"
                stroke="#FFD700"
                strokeWidth="2"
                fill="none"
            />
            {/* Curve detail */}
            <path
                d="M 4 48 Q 22 52 40 50 Q 60 48 82 52"
                stroke="#FFD700"
                strokeWidth="1.5"
                fill="none"
                opacity="0.9"
            />
            {/* Gift sack peeking out */}
            <ellipse cx="64" cy="22" rx="14" ry="10" fill="#8D6E63" />
            <path
                d="M 56 14 L 72 14"
                stroke="#5D4037"
                strokeWidth="2"
                strokeLinecap="round"
            />
            {/* Santa */}
            <g transform="translate(28, -2)">
                {/* Coat */}
                <ellipse cx="0" cy="22" rx="14" ry="16" fill="#C62828" />
                {/* Belt */}
                <rect x="-14" y="26" width="28" height="4" fill="#212121" />
                <rect x="-3" y="26" width="6" height="4" fill="#FFD700" />
                {/* Coat trim (white fur) */}
                <ellipse cx="0" cy="36" rx="14" ry="3" fill="#FAFAFA" />
                {/* Head */}
                <circle cx="0" cy="2" r="7" fill="#FDD7A4" />
                {/* Beard */}
                <path
                    d="M -7 2 Q -8 16 0 18 Q 8 16 7 2 L 7 -2 L -7 -2 Z"
                    fill="#FAFAFA"
                />
                {/* Mustache */}
                <path
                    d="M -5 2 Q -2 5 0 3 Q 2 5 5 2"
                    stroke="#FAFAFA"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                />
                {/* Eyes */}
                <circle cx="-3" cy="-1" r="0.8" fill="#212121" />
                <circle cx="3" cy="-1" r="0.8" fill="#212121" />
                {/* Hat */}
                <path d="M -7 -6 Q 0 -8 7 -6 L 8 -4 L -8 -4 Z" fill="#FAFAFA" />
                <path
                    d="M -7 -6 L 7 -6 L 6 -22 Q 4 -20 2 -22 Q 0 -20 -2 -22 Q -4 -20 -6 -22 Z"
                    fill="#C62828"
                />
                <circle cx="6" cy="-22" r="2.5" fill="#FAFAFA" />
                {/* Arm waving */}
                <path
                    d="M 8 18 Q 18 8 22 4"
                    stroke="#C62828"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                />
                <circle cx="22" cy="4" r="2" fill="#FDD7A4" />
            </g>
        </g>
    </svg>
)

const SnowDrift = () => (
    <svg
        className="absolute left-0 right-0 w-full"
        style={{ bottom: '15rem', height: '8rem' }}
        viewBox="0 0 1920 200"
        preserveAspectRatio="none"
        aria-hidden
    >
        <path
            d="M 0 200 L 0 110 Q 240 70 480 100 Q 720 130 960 90 Q 1200 60 1440 100 Q 1680 130 1920 95 L 1920 200 Z"
            fill="#FFFFFF"
        />
        <path
            d="M 0 200 L 0 130 Q 320 100 640 130 Q 960 160 1280 125 Q 1600 95 1920 130 L 1920 200 Z"
            fill="#ECEFF1"
            opacity="0.7"
        />
    </svg>
)

export const WinterScene = ({ festive = false }: { festive?: boolean }) => (
    <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-70"
        aria-hidden
    >
        {/* Sky-to-snow gradient backdrop */}
        <div
            className="absolute inset-0"
            style={{
                background:
                    'linear-gradient(180deg, #0A1A33 0%, #1A2D5A 22%, #2E4E87 42%, #6788B6 56%, #B6CAE3 70%, #E8F1FA 85%, #FFFFFF 100%)',
            }}
        />
        <Stars />
        <Moon />
        {!festive && (
            <>
                <div className="winter-aurora absolute inset-x-0 top-[8%] h-[32%]" />
                <svg
                    className="absolute -left-8 top-[10%] w-64 opacity-90 sm:left-0 sm:w-80"
                    viewBox="0 0 350 270"
                >
                    <path
                        d="M-20 22 370 135M144 69v35"
                        stroke="#8596a9"
                        strokeWidth="3"
                    />
                    <path
                        d="M118 104h55l14 91h-82Z"
                        fill="#a94f49"
                        stroke="#d08c78"
                        strokeWidth="3"
                    />
                    <path
                        d="M122 114h46l7 39h-59Z"
                        fill="#293d58"
                        stroke="#d4b89a"
                        strokeWidth="3"
                    />
                    <path
                        d="M145 115v37m-34 17h70"
                        stroke="#d4b89a"
                        strokeWidth="3"
                    />
                    <path
                        d="M118 195v8h56v-8m-34-39v35"
                        stroke="#41546c"
                        strokeWidth="4"
                    />
                    <path
                        d="m94 199 105 5m-110 4 105 6"
                        stroke="#e0d5b6"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <text
                        x="147"
                        y="185"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="12"
                        fill="#f1dcc2"
                    >
                        UP WE GO
                    </text>
                    <path
                        d="M131 141v-9q5-8 10 0v9m13 0v-9q5-8 10 0v9"
                        fill="#d5a984"
                    />
                </svg>
            </>
        )}
        {festive && (
            <svg
                className="absolute inset-x-0 top-0 h-12 w-full"
                viewBox="0 0 1440 160"
                preserveAspectRatio="none"
            >
                <path
                    d="M0 9q350 118 720 0 357 118 720 0"
                    stroke="#153b2b"
                    strokeWidth="28"
                    fill="none"
                />
                <path
                    d="M0 9q350 118 720 0 357 118 720 0"
                    stroke="#38734b"
                    strokeWidth="20"
                    strokeDasharray="3 8"
                    fill="none"
                />
                {Array.from({ length: 25 }, (_, i) => {
                    const x = i * 60
                    const y = 9 + 59 * Math.sin(((x % 720) / 720) * Math.PI)
                    return (
                        <g key={i} transform={`translate(${x} ${y})`}>
                            <path d="M0 2v13" stroke="#b9a878" />
                            <ellipse
                                cy="17"
                                rx="4"
                                ry="7"
                                fill={['#dbb875', '#c47368', '#a3c5a0'][i % 3]}
                            />
                            <circle
                                cy="17"
                                r="14"
                                fill="#edc17c"
                                opacity="0.1"
                            />
                            {i % 4 === 2 && (
                                <g>
                                    <path d="M0 23v15" stroke="#c7af7b" />
                                    <circle cy="49" r="13" fill="#b55747" />
                                    <path
                                        d="M-10 44q10 8 20 0"
                                        stroke="#dcba79"
                                        fill="none"
                                        strokeWidth="2"
                                    />
                                </g>
                            )}
                        </g>
                    )
                })}
            </svg>
        )}
        {/* Santa & reindeer flying in the upper-left sky */}
        {festive && (
            <SantaSleigh className="top-[24%] left-[3%] w-56 h-24 sm:top-[8%] sm:w-72 sm:h-32 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]" />
        )}
        <Mountains />
        {/* Skiers gliding across the snowy field below the mountains.
            SkierGroup keeps each trail anchored to its skier. */}
        <SkierGroup
            className="top-[63%] left-[14%] w-10 h-14 sm:w-12 sm:h-16"
            jacketColor="#E53935"
            hatColor="#1976D2"
        />
        <SkierGroup
            className="top-[65%] left-[55%] w-8 h-10 sm:w-10 sm:h-12"
            jacketColor="#6A1B9A"
            hatColor="#FAFAFA"
        />
        <SkierGroup
            className="top-[64%] left-[72%] w-9 h-12 sm:w-11 sm:h-14"
            jacketColor="#1565C0"
            hatColor="#F57C00"
            flip
        />
        {/* Penguin group waddling further back on the field */}
        <Penguin className="top-[67%] left-[26%] w-8 h-10 sm:w-10 sm:h-14" />
        <Penguin
            className="top-[67%] left-[30%] w-7 h-10 sm:w-9 sm:h-12"
            flip
        />
        <Penguin className="top-[68%] left-[34%] w-8 h-10 sm:w-10 sm:h-14" />
        <Penguin className="top-[67%] left-[38%] w-6 h-8 sm:w-8 sm:h-10" flip />
        <Snowflakes />
        <SnowDrift />
        <svg
            className="scene-vignette-left absolute -left-8 bottom-2 w-72 sm:bottom-4 sm:left-1 sm:w-96"
            viewBox="0 0 420 360"
        >
            <ellipse cx="196" cy="335" rx="198" ry="20" fill="#d5dfdf" />
            <path
                d="M81 158h226v164H81Z"
                fill={festive ? '#704238' : '#6b5044'}
                stroke="#392f30"
                strokeWidth="4"
            />
            {[181, 201, 221, 241, 261, 281, 301].map((y) => (
                <path
                    key={y}
                    d={`M84 ${y}h220`}
                    stroke="#ad8364"
                    strokeWidth="3"
                    opacity="0.5"
                />
            ))}
            <path
                d="M55 174 187 56l147 118Z"
                fill="#433c40"
                stroke="#b9c9d2"
                strokeWidth="9"
                strokeLinejoin="round"
            />
            <path
                d="M55 174 187 56l147 118-58-12-25-25-52 4-28-13-39 26-40-1Z"
                fill="#e0e6df"
            />
            <path d="M244 101V40h34v88" fill="#84615a" />
            <path
                d="M238 39h44"
                stroke="#d7e0df"
                strokeWidth="7"
                strokeLinecap="round"
            />
            <path
                d="M259 25q-20-20 1-39m13 42q21-20 6-32"
                stroke="#d4dce1"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
                opacity="0.3"
            />
            <path
                d="M174 247h44v74h-44Z"
                fill="#382f30"
                stroke="#c0a184"
                strokeWidth="3"
            />
            <circle cx="208" cy="282" r="3" fill="#d8ba7b" />
            {[109, 245].map((x) => (
                <g key={x}>
                    <rect
                        x={x}
                        y="203"
                        width="37"
                        height="46"
                        fill="#ecc17e"
                        stroke="#372f31"
                        strokeWidth="5"
                    />
                    <path
                        d={`M${x + 18} 204v44m-34-23h35`}
                        stroke="#9b7656"
                        strokeWidth="3"
                    />
                    <path
                        d={`m${x - 7} 255 51 0`}
                        stroke="#e2e7dc"
                        strokeWidth="5"
                        strokeLinecap="round"
                    />
                </g>
            ))}
            <rect
                x="126"
                y="164"
                width="138"
                height="25"
                rx="2"
                fill="#4c5844"
                stroke="#a89a74"
            />
            <text
                x="195"
                y="181"
                textAnchor="middle"
                fontFamily="monospace"
                fontSize="13"
                fill="#eed8ad"
            >
                {festive ? 'THE NICE LIST' : 'ONE MORE RUN'}
            </text>
            <path d="M163 325h66l16 14h-98Z" fill="#a1b7c7" />
            {festive && (
                <>
                    <path
                        d="m89 171 98-91 112 96"
                        stroke="#285f3d"
                        strokeWidth="8"
                        fill="none"
                    />
                    {[
                        [105, 157],
                        [129, 134],
                        [154, 111],
                        [178, 88],
                        [205, 99],
                        [231, 121],
                        [258, 146],
                        [283, 168],
                    ].map(([x, y], i) => (
                        <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="4"
                            fill={i % 2 ? '#e3b970' : '#c6755d'}
                        />
                    ))}
                    <circle
                        cx="196"
                        cy="266"
                        r="13"
                        fill="none"
                        stroke="#47744b"
                        strokeWidth="8"
                    />
                    <path d="m185 279 11-8 11 8-11-3Z" fill="#b65843" />
                    <path
                        d="M51 320v-62q0-21-16-21t-16 21"
                        stroke="#e6dfcf"
                        strokeWidth="11"
                        fill="none"
                    />
                    <path
                        d="m45 310 12-8m-12-11 12-8m-12-11 12-8m-14-19 10-8m-21-3 2-10m-20 19-9-7"
                        stroke="#b65b4b"
                        strokeWidth="6"
                    />
                </>
            )}
            <g transform="translate(340 284)">
                <rect
                    x="-27"
                    y="-14"
                    width="52"
                    height="39"
                    rx="4"
                    fill="#8e674d"
                />
                <path d="M-29-14h56" stroke="#dce3d8" strokeWidth="7" />
                <path
                    d="M-11 22v28m22-28v28"
                    stroke="#503e35"
                    strokeWidth="5"
                />
                <text
                    x="0"
                    y="10"
                    textAnchor="middle"
                    fontSize="11"
                    fontFamily="monospace"
                    fill="#f0d1a0"
                >
                    COCOA
                </text>
            </g>
            <g fill="#3b655b">
                <path d="M28 278h63l-31-104Z" />
                <path d="M325 228h80l-40-133Z" />
            </g>
            <path
                d="m40 240 20-66 19 64m-28-29h18m277-54 18-60 17 61m-27-30h21"
                stroke="#c5d5d6"
                strokeWidth="5"
                fill="none"
                strokeLinejoin="round"
            />
        </svg>
        <svg
            className="scene-vignette-right absolute -right-5 bottom-3 w-56 sm:bottom-4 sm:right-6 sm:w-72"
            viewBox="0 0 300 280"
        >
            {festive ? (
                <>
                    <ellipse
                        cx="161"
                        cy="256"
                        rx="123"
                        ry="15"
                        fill="#d4dfd8"
                    />
                    <path
                        d="M64 149h159v97H64Z"
                        fill="#a3764e"
                        stroke="#704731"
                        strokeWidth="3"
                    />
                    <path
                        d="m41 156 99-85 105 85"
                        fill="#9f6643"
                        stroke="#e6d4b0"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M75 164q8 17 15 0t15 0 15 0 15 0 15 0 15 0 15 0 15 0 15 0"
                        stroke="#e6d4b0"
                        strokeWidth="4"
                        fill="none"
                    />
                    <path
                        d="M129 245v-40q17-28 33 0v40"
                        fill="#613f34"
                        stroke="#e7d3ae"
                        strokeWidth="4"
                    />
                    {[91, 198].map((x) => (
                        <g key={x}>
                            <circle
                                cx={x}
                                cy="197"
                                r="17"
                                fill="#ab5146"
                                stroke="#e8d1a8"
                                strokeWidth="4"
                            />
                            <path
                                d={`m${x - 12} 185 24 24m0-24-24 24`}
                                stroke="#e8d1a8"
                                strokeWidth="4"
                            />
                        </g>
                    ))}
                    {[
                        [91, 136],
                        [113, 116],
                        [140, 99],
                        [165, 118],
                        [190, 139],
                    ].map(([x, y], i) => (
                        <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="6"
                            fill={i % 2 ? '#9ab789' : '#d6a968'}
                        />
                    ))}
                    <rect
                        x="30"
                        y="224"
                        width="38"
                        height="32"
                        fill="#a95043"
                    />
                    <path
                        d="M49 224v32m-19-20h38m-19-12q-26-19-21-2 7 7 21 2 27-19 21-2-7 7-21 2"
                        stroke="#d6b676"
                        strokeWidth="4"
                        fill="none"
                    />
                    <rect
                        x="230"
                        y="211"
                        width="40"
                        height="44"
                        fill="#4e795e"
                    />
                    <path
                        d="M250 211v44m-20-29h40"
                        stroke="#d6b676"
                        strokeWidth="5"
                    />
                </>
            ) : (
                <>
                    <ellipse
                        cx="157"
                        cy="223"
                        rx="124"
                        ry="36"
                        fill="#7497ae"
                        stroke="#dbe4e1"
                        strokeWidth="7"
                    />
                    <ellipse cx="215" cy="219" rx="25" ry="10" fill="#233f59" />
                    <path
                        d="m83 214 33 10m-48 9 45 2m70 12 30-3"
                        stroke="#b9d0d6"
                        strokeWidth="2"
                        opacity="0.7"
                    />
                    <ellipse cx="115" cy="180" rx="30" ry="38" fill="#253c4b" />
                    <ellipse cx="117" cy="187" rx="21" ry="29" fill="#d7dfd6" />
                    <circle cx="117" cy="146" r="25" fill="#253c4b" />
                    <path d="M97 146q20-20 40 0v15H97Z" fill="#d7dfd6" />
                    <circle cx="110" cy="148" r="2" fill="#253c4b" />
                    <circle cx="127" cy="148" r="2" fill="#253c4b" />
                    <path d="m112 156 8 8 8-8" fill="#c69b60" />
                    <path
                        d="m89 211 18 2m13 2 20 1"
                        stroke="#c69b60"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />
                    <path
                        d="M93 167q25 13 50 0l-2 11q-26 8-48-2m33 3 3 25 10-1-1-27"
                        fill="#ba6f62"
                    />
                    <path
                        d="m141 184 38-41 40 76"
                        fill="none"
                        stroke="#927250"
                        strokeWidth="3"
                    />
                    <path d="M219 174v46" stroke="#d3d9cc" />
                    <circle cx="219" cy="219" r="3" fill="#cf8872" />
                    <path d="M87 135q28-48 59 0" fill="#947653" />
                    <circle cx="117" cy="108" r="7" fill="#dac7a2" />
                    <path
                        d="M86 137h62"
                        stroke="#d5bd91"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                </>
            )}
        </svg>
        {festive && (
            <ChristmasTree className="bottom-56 left-4 sm:bottom-60 sm:left-16 w-32 h-48 sm:w-44 sm:h-64 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]" />
        )}
        <Snowman className="bottom-56 right-8 sm:bottom-60 sm:right-32 w-28 h-48 sm:w-36 sm:h-60 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]" />
        <Sled className="bottom-60 left-1/4 w-32 h-16 sm:w-44 sm:h-20 drop-shadow-md" />
        {festive && (
            <GiftBox className="bottom-60 right-[18%] w-16 h-20 sm:w-20 sm:h-24 drop-shadow-md" />
        )}
    </div>
)
