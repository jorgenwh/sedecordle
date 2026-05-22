const Sun = () => (
    <svg
        className="absolute top-2 right-4 sm:top-6 sm:right-12 w-32 h-32 sm:w-48 sm:h-48 drop-shadow-[0_0_40px_rgba(255,221,87,0.55)]"
        viewBox="0 0 200 200"
        aria-hidden
    >
        <defs>
            <radialGradient id="sun-core" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF4B0" />
                <stop offset="60%" stopColor="#FFD54F" />
                <stop offset="100%" stopColor="#FFB300" />
            </radialGradient>
            <radialGradient id="sun-halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFEB3B" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FFEB3B" stopOpacity="0" />
            </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="95" fill="url(#sun-halo)" />
        <circle cx="100" cy="100" r="55" fill="url(#sun-core)" />
    </svg>
)

const PalmTree = ({
    flip = false,
    className = '',
}: {
    flip?: boolean
    className?: string
}) => (
    <svg
        className={`absolute ${className}`}
        viewBox="0 0 300 500"
        preserveAspectRatio="xMidYMax meet"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
        aria-hidden
    >
        {/* Trunk — curved, with banded shading */}
        <path
            d="M 150 500 Q 145 380 165 270 Q 180 180 150 110"
            stroke="#7A4F2B"
            strokeWidth="22"
            fill="none"
            strokeLinecap="round"
        />
        <path
            d="M 150 500 Q 145 380 165 270 Q 180 180 150 110"
            stroke="#A0703D"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
        />
        {/* Coconuts */}
        <g>
            <circle cx="138" cy="120" r="10" fill="#3E2723" />
            <circle cx="160" cy="115" r="10" fill="#3E2723" />
            <circle cx="148" cy="132" r="10" fill="#3E2723" />
        </g>
        {/* Fronds — leaf-shaped paths radiating from the crown */}
        <g transform="translate(150, 110)">
            <path
                d="M 0 0 Q 60 -25 150 -10 Q 80 5 0 0 Z"
                fill="#2E7D32"
                transform="rotate(-15)"
            />
            <path
                d="M 0 0 Q 50 -30 130 -40 Q 60 -10 0 0 Z"
                fill="#388E3C"
                transform="rotate(-55)"
            />
            <path
                d="M 0 0 Q 30 -40 70 -110 Q 30 -50 0 0 Z"
                fill="#2E7D32"
                transform="rotate(-95)"
            />
            <path
                d="M 0 0 Q -30 -40 -70 -110 Q -30 -50 0 0 Z"
                fill="#43A047"
                transform="rotate(-130)"
            />
            <path
                d="M 0 0 Q -50 -30 -130 -40 Q -60 -10 0 0 Z"
                fill="#2E7D32"
                transform="rotate(-160)"
            />
            <path
                d="M 0 0 Q -60 -25 -150 -10 Q -80 5 0 0 Z"
                fill="#388E3C"
                transform="rotate(170)"
            />
            <path
                d="M 0 0 Q -55 25 -130 40 Q -60 10 0 0 Z"
                fill="#43A047"
                transform="rotate(120)"
            />
            <path
                d="M 0 0 Q 55 25 130 40 Q 60 10 0 0 Z"
                fill="#2E7D32"
                transform="rotate(60)"
            />
        </g>
    </svg>
)

const Sunglasses = () => (
    <svg
        className="absolute top-20 left-6 sm:top-24 sm:left-14 w-20 h-12 sm:w-28 sm:h-16 rotate-[-12deg] drop-shadow-md"
        viewBox="0 0 140 60"
        aria-hidden
    >
        {/* Lenses */}
        <rect
            x="6"
            y="10"
            width="52"
            height="36"
            rx="14"
            fill="#1E1E1E"
            stroke="#2A2A2A"
            strokeWidth="2"
        />
        <rect
            x="82"
            y="10"
            width="52"
            height="36"
            rx="14"
            fill="#1E1E1E"
            stroke="#2A2A2A"
            strokeWidth="2"
        />
        {/* Lens highlight */}
        <ellipse cx="20" cy="22" rx="10" ry="5" fill="#FFFFFF" opacity="0.35" />
        <ellipse cx="96" cy="22" rx="10" ry="5" fill="#FFFFFF" opacity="0.35" />
        {/* Bridge */}
        <path
            d="M 58 18 Q 70 12 82 18"
            stroke="#2A2A2A"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
        />
        {/* Temples */}
        <line
            x1="6"
            y1="20"
            x2="-2"
            y2="14"
            stroke="#2A2A2A"
            strokeWidth="4"
            strokeLinecap="round"
        />
        <line
            x1="134"
            y1="20"
            x2="142"
            y2="14"
            stroke="#2A2A2A"
            strokeWidth="4"
            strokeLinecap="round"
        />
    </svg>
)

const Cocktail = () => (
    <svg
        className="absolute bottom-72 right-6 sm:bottom-80 sm:right-16 w-20 h-28 sm:w-28 sm:h-36 drop-shadow-lg"
        viewBox="0 0 120 180"
        aria-hidden
    >
        {/* Drink (inside glass) */}
        <path d="M 14 30 L 106 30 L 60 96 Z" fill="#FF8FB8" />
        {/* Glass outline */}
        <path
            d="M 10 26 L 110 26 L 60 100 Z"
            fill="none"
            stroke="#F5F5F5"
            strokeWidth="3"
            strokeLinejoin="round"
        />
        {/* Stem */}
        <line
            x1="60"
            y1="100"
            x2="60"
            y2="160"
            stroke="#F5F5F5"
            strokeWidth="4"
            strokeLinecap="round"
        />
        {/* Base */}
        <ellipse
            cx="60"
            cy="162"
            rx="26"
            ry="6"
            fill="#F5F5F5"
            stroke="#E0E0E0"
            strokeWidth="2"
        />
        {/* Straw */}
        <line
            x1="78"
            y1="30"
            x2="98"
            y2="-6"
            stroke="#E53935"
            strokeWidth="5"
            strokeLinecap="round"
        />
        {/* Citrus garnish */}
        <circle
            cx="30"
            cy="28"
            r="11"
            fill="#FFB300"
            stroke="#FF8F00"
            strokeWidth="2"
        />
        <path
            d="M 30 18 L 30 38 M 20 28 L 40 28"
            stroke="#FFE082"
            strokeWidth="1.5"
        />
        {/* Cherry */}
        <circle cx="60" cy="38" r="6" fill="#C62828" />
    </svg>
)

const BeachUmbrella = () => (
    <svg
        className="absolute bottom-64 left-8 sm:bottom-72 sm:left-20 w-24 h-32 sm:w-32 sm:h-40 drop-shadow-lg"
        viewBox="0 0 160 200"
        aria-hidden
    >
        {/* Canopy panels */}
        <path d="M 80 20 L 10 90 L 80 90 Z" fill="#E53935" />
        <path d="M 80 20 L 80 90 L 150 90 Z" fill="#E53935" />
        <path d="M 80 20 L 45 90 L 80 90 Z" fill="#FFFFFF" opacity="0.95" />
        <path d="M 80 20 L 115 90 L 80 90 Z" fill="#FFFFFF" opacity="0.95" />
        {/* Canopy rim */}
        <path
            d="M 10 90 Q 80 78 150 90"
            stroke="#B71C1C"
            strokeWidth="3"
            fill="none"
        />
        {/* Pole */}
        <line
            x1="80"
            y1="20"
            x2="80"
            y2="190"
            stroke="#5D4037"
            strokeWidth="4"
            strokeLinecap="round"
        />
        {/* Pole top knob */}
        <circle cx="80" cy="18" r="5" fill="#5D4037" />
    </svg>
)

const Sailboat = ({
    className,
    flip = false,
    sailColor = '#FFFFFF',
}: {
    className: string
    flip?: boolean
    sailColor?: string
}) => (
    <svg
        className={`absolute ${className}`}
        viewBox="0 0 140 110"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
        aria-hidden
    >
        {/* Mast */}
        <line
            x1="70"
            y1="78"
            x2="70"
            y2="12"
            stroke="#5D4037"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        {/* Main sail (large triangle) */}
        <path
            d="M 70 14 L 70 76 L 28 76 Z"
            fill={sailColor}
            stroke="#B0BEC5"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        {/* Front sail (small triangle) */}
        <path
            d="M 70 22 L 70 76 L 104 76 Z"
            fill={sailColor}
            stroke="#B0BEC5"
            strokeWidth="1.5"
            strokeLinejoin="round"
            opacity="0.92"
        />
        {/* Sail shading */}
        <path d="M 70 24 L 70 76 L 36 76 Z" fill="#000000" opacity="0.06" />
        {/* Hull */}
        <path
            d="M 14 78 L 126 78 Q 110 96 70 96 Q 30 96 14 78 Z"
            fill="#8D6E63"
            stroke="#5D4037"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        {/* Hull stripe */}
        <path
            d="M 22 82 L 118 82"
            stroke="#D32F2F"
            strokeWidth="2"
            strokeLinecap="round"
        />
        {/* Pennant */}
        <path d="M 70 12 L 82 16 L 70 20 Z" fill="#E53935" />
    </svg>
)

const Crab = ({
    className,
    flip = false,
}: {
    className: string
    flip?: boolean
}) => (
    <svg
        className={`absolute ${className}`}
        viewBox="0 0 160 110"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
        aria-hidden
    >
        {/* Legs (rendered behind body) */}
        <g stroke="#B71C1C" strokeWidth="5" strokeLinecap="round" fill="none">
            <path d="M 50 70 Q 35 80 22 100" />
            <path d="M 45 75 Q 25 90 12 105" />
            <path d="M 55 78 Q 45 95 38 108" />
            <path d="M 110 70 Q 125 80 138 100" />
            <path d="M 115 75 Q 135 90 148 105" />
            <path d="M 105 78 Q 115 95 122 108" />
        </g>
        {/* Claws (arms then pincers) */}
        <g>
            {/* Left arm */}
            <path
                d="M 50 60 Q 28 50 14 32"
                stroke="#C62828"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
            />
            {/* Left pincer */}
            <g transform="translate(14 32) rotate(-35)">
                <ellipse cx="0" cy="0" rx="14" ry="11" fill="#E53935" />
                <ellipse
                    cx="-2"
                    cy="-2"
                    rx="10"
                    ry="7"
                    fill="#EF5350"
                    opacity="0.7"
                />
                <path
                    d="M -10 -2 Q -2 0 12 -2"
                    stroke="#7F0000"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                />
            </g>
            {/* Right arm */}
            <path
                d="M 110 60 Q 132 50 146 32"
                stroke="#C62828"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
            />
            {/* Right pincer */}
            <g transform="translate(146 32) rotate(35)">
                <ellipse cx="0" cy="0" rx="14" ry="11" fill="#E53935" />
                <ellipse
                    cx="2"
                    cy="-2"
                    rx="10"
                    ry="7"
                    fill="#EF5350"
                    opacity="0.7"
                />
                <path
                    d="M -12 -2 Q -2 0 10 -2"
                    stroke="#7F0000"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                />
            </g>
        </g>
        {/* Body (carapace) */}
        <ellipse cx="80" cy="70" rx="40" ry="26" fill="#D32F2F" />
        <ellipse cx="80" cy="64" rx="36" ry="20" fill="#E53935" />
        <ellipse cx="80" cy="58" rx="28" ry="10" fill="#EF5350" opacity="0.6" />
        {/* Carapace dimples */}
        <circle cx="60" cy="72" r="3" fill="#B71C1C" opacity="0.5" />
        <circle cx="100" cy="72" r="3" fill="#B71C1C" opacity="0.5" />
        <circle cx="80" cy="80" r="3" fill="#B71C1C" opacity="0.5" />
        {/* Eyestalks */}
        <line
            x1="68"
            y1="50"
            x2="64"
            y2="32"
            stroke="#C62828"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <line
            x1="92"
            y1="50"
            x2="96"
            y2="32"
            stroke="#C62828"
            strokeWidth="3"
            strokeLinecap="round"
        />
        {/* Sunglasses across the eyestalks */}
        <g>
            <rect
                x="52"
                y="22"
                width="22"
                height="14"
                rx="4"
                fill="#1A1A1A"
                stroke="#0A0A0A"
                strokeWidth="1.5"
            />
            <rect
                x="86"
                y="22"
                width="22"
                height="14"
                rx="4"
                fill="#1A1A1A"
                stroke="#0A0A0A"
                strokeWidth="1.5"
            />
            <line
                x1="74"
                y1="29"
                x2="86"
                y2="29"
                stroke="#1A1A1A"
                strokeWidth="2.5"
            />
            <ellipse
                cx="59"
                cy="27"
                rx="4"
                ry="2"
                fill="#FFFFFF"
                opacity="0.5"
            />
            <ellipse
                cx="93"
                cy="27"
                rx="4"
                ry="2"
                fill="#FFFFFF"
                opacity="0.5"
            />
        </g>
        {/* Tiny smile */}
        <path
            d="M 72 78 Q 80 84 88 78"
            stroke="#7F0000"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
        />
    </svg>
)

const Cloud = ({ className }: { className: string }) => (
    <svg className={`absolute ${className}`} viewBox="0 0 200 80" aria-hidden>
        <ellipse
            cx="50"
            cy="50"
            rx="38"
            ry="22"
            fill="#FFFFFF"
            opacity="0.85"
        />
        <ellipse cx="95" cy="40" rx="42" ry="26" fill="#FFFFFF" opacity="0.9" />
        <ellipse
            cx="140"
            cy="50"
            rx="36"
            ry="20"
            fill="#FFFFFF"
            opacity="0.85"
        />
    </svg>
)

export const SummerScene = () => (
    <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden
    >
        {/* Sky-to-sand gradient backdrop */}
        <div
            className="absolute inset-0"
            style={{
                background:
                    'linear-gradient(180deg, #5BB6E8 0%, #8FD3F4 25%, #C7E6F5 45%, #FCE38A 62%, #F6C28B 82%, #E8A55C 100%)',
            }}
        />
        {/* Sea band */}
        <div
            className="absolute left-0 right-0"
            style={{
                top: '54%',
                height: '7%',
                background:
                    'linear-gradient(180deg, #1976D2 0%, #1E88E5 45%, #29B6F6 100%)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.12) inset',
            }}
        />
        {/* Sea highlight line where it meets sand */}
        <div
            className="absolute left-0 right-0 h-1"
            style={{ top: '61%', background: '#E0F7FA', opacity: 0.6 }}
        />
        {/* Boats sitting on the sea */}
        <Sailboat
            className="top-[51%] left-[18%] w-20 h-16 sm:w-28 sm:h-20 drop-shadow-md"
            sailColor="#FAFAFA"
        />
        <Sailboat
            flip
            className="top-[52%] right-[22%] w-14 h-12 sm:w-20 sm:h-16 drop-shadow-md"
            sailColor="#FFE0B2"
        />
        <Cloud className="top-6 left-1/4 w-32 h-12 sm:w-44 sm:h-16" />
        <Cloud className="top-16 right-1/3 w-28 h-10 sm:w-40 sm:h-14 opacity-90" />
        <Sun />
        <Sunglasses />
        <PalmTree className="left-[-40px] sm:left-[-20px] bottom-60 w-44 h-72 sm:w-56 sm:h-96" />
        <PalmTree
            flip
            className="right-[-40px] sm:right-[-20px] bottom-56 w-40 h-64 sm:w-52 sm:h-80"
        />
        <BeachUmbrella />
        <Cocktail />
        <Crab className="bottom-72 left-1/3 w-20 h-14 sm:w-28 sm:h-20 drop-shadow-md" />
        <Crab
            flip
            className="bottom-80 right-[28%] w-16 h-12 sm:w-24 sm:h-16 drop-shadow-md"
        />
    </div>
)
