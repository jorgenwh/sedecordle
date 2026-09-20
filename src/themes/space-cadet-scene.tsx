const stars = Array.from({ length: 65 }, (_, index) => ({
    x: (index * 223 + 41) % 1440,
    y: (index * 137 + 73) % 1000,
    radius: index % 4 === 0 ? 1.7 : 0.8,
}))

export const SpaceCadetScene = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
    >
        <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1440 1000"
            preserveAspectRatio="xMidYMid slice"
        >
            {stars.map((star, index) => (
                <circle
                    key={index}
                    cx={star.x}
                    cy={star.y}
                    r={star.radius}
                    fill="#d0dcff"
                    opacity={index % 3 === 0 ? 0.7 : 0.3}
                />
            ))}
            <path
                d="m38 200 58-58 37 74 69-12"
                fill="none"
                stroke="#7481ae"
                strokeWidth="1"
                opacity="0.25"
            />
            <path
                d="m1190 720 68-50 75 32 50-80"
                fill="none"
                stroke="#7481ae"
                strokeWidth="1"
                opacity="0.25"
            />
        </svg>
        <svg
            className="absolute -right-20 top-[8%] w-64 opacity-65 sm:-right-12 sm:w-80"
            viewBox="0 0 300 220"
        >
            <defs>
                <linearGradient id="space-planet" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#ae94cc" />
                    <stop offset="1" stopColor="#423761" />
                </linearGradient>
            </defs>
            <ellipse
                cx="150"
                cy="110"
                rx="142"
                ry="32"
                transform="rotate(-25 150 110)"
                fill="none"
                stroke="#ae8c76"
                strokeWidth="13"
                opacity="0.6"
            />
            <circle cx="150" cy="110" r="75" fill="url(#space-planet)" />
            <path
                d="M79 86q61 49 139-4M77 123q58 48 144-2"
                fill="none"
                stroke="#c0a7cf"
                strokeWidth="9"
                opacity="0.16"
            />
            <path
                d="M17 166q70 9 155-31t108-85"
                fill="none"
                stroke="#c4a68b"
                strokeWidth="12"
                opacity="0.8"
            />
        </svg>
        <svg
            className="absolute -left-16 bottom-12 w-52 opacity-60 sm:-left-12 sm:w-72"
            viewBox="0 0 240 240"
        >
            <circle cx="120" cy="120" r="110" fill="#3e6482" />
            <path d="M125 10a110 110 0 0 1 0 220q65-115 0-220" fill="#1f344f" />
            <g fill="#253e58" opacity="0.5">
                <circle cx="63" cy="74" r="17" />
                <circle cx="101" cy="152" r="24" />
                <circle cx="46" cy="160" r="9" />
                <circle cx="116" cy="43" r="8" />
            </g>
        </svg>
        <div className="space-drift absolute -right-12 bottom-72 w-32 opacity-65 sm:right-2 sm:w-40 xl:right-5">
            <svg
                viewBox="0 0 180 240"
                fill="none"
                stroke="#172039"
                strokeWidth="3"
                strokeLinejoin="round"
            >
                <path
                    d="M95 151q-58 80 54 79q31-1 23-35"
                    stroke="#879cbf"
                    strokeWidth="2"
                />
                <rect
                    x="45"
                    y="83"
                    width="91"
                    height="78"
                    rx="18"
                    fill="#637594"
                />
                <path
                    d="m58 139-15 55q2 17 20 6l30-45m14-10 14 53q11 15 22 0l-13-57"
                    fill="#c1cad6"
                />
                <path
                    d="m54 96-27 22-11-27q-11-9-16 3l10 43q5 14 20 9l30-19m64-34 19-23 10-30q11-9 18 5l-10 39-31 37"
                    fill="#d4dbe3"
                />
                <rect
                    x="52"
                    y="91"
                    width="76"
                    height="71"
                    rx="24"
                    fill="#d4dbe3"
                />
                <rect
                    x="72"
                    y="119"
                    width="36"
                    height="25"
                    rx="4"
                    fill="#536d99"
                />
                <circle cx="82" cy="131" r="3" fill="#a5e4cf" stroke="none" />
                <path d="M93 130h7m-7 6h7" stroke="#c3d4ec" strokeWidth="2" />
                <circle cx="90" cy="65" r="44" fill="#d4dbe3" />
                <rect
                    x="55"
                    y="42"
                    width="70"
                    height="46"
                    rx="22"
                    fill="#243550"
                />
                <path
                    d="M68 52q13-8 28-5"
                    stroke="#91b8d0"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <circle cx="85" cy="68" r="3" fill="#d5efff" stroke="none" />
                <circle cx="105" cy="68" r="3" fill="#d5efff" stroke="none" />
                <path
                    d="m88 78 12 1"
                    stroke="#d5efff"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path d="M74 20 71 9" stroke="#93a5c7" />
                <circle cx="70" cy="7" r="5" fill="#e5b77b" />
            </svg>
        </div>
    </div>
)
