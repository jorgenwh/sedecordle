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
            <ellipse
                cx="740"
                cy="580"
                rx="650"
                ry="280"
                transform="rotate(-25 740 580)"
                fill="none"
                stroke="#91a9d3"
                strokeDasharray="3 12"
                opacity="0.12"
            />
            <ellipse
                cx="740"
                cy="580"
                rx="790"
                ry="370"
                transform="rotate(-25 740 580)"
                fill="none"
                stroke="#91a9d3"
                opacity="0.08"
            />
            {[0, 1, 2, 3, 4, 5].map((i) => (
                <g
                    key={i}
                    transform={`translate(${60 + i * 257} ${(i * 193 + 70) % 950})`}
                    stroke="#b1c9ef"
                    opacity="0.5"
                >
                    <path d="M-5 0H5M0-5V5" />
                    <circle r="1.5" fill="#e3f2ff" />
                </g>
            ))}
        </svg>
        <svg
            className="absolute -left-9 top-[14%] w-48 -rotate-12 opacity-80 sm:left-3 sm:w-60"
            viewBox="0 0 300 260"
        >
            <path d="M46 103h208" stroke="#b3a88b" strokeWidth="7" />
            <g fill="#243e66" stroke="#658aaf" strokeWidth="2">
                <path d="M8 65h94v80H8Zm192 0h92v80h-92Z" />
                {[24, 43, 62, 81, 216, 235, 254, 273].map((x) => (
                    <path key={x} d={`M${x} 67v76`} />
                ))}
                <path d="M10 91h90m-90 26h90m102-26h88m-88 26h88" />
            </g>
            <rect
                x="114"
                y="71"
                width="72"
                height="84"
                rx="10"
                fill="#a39782"
                stroke="#d3c9a7"
                strokeWidth="2"
            />
            <path
                d="M124 91h52m-52 8h52m-52 8h52"
                stroke="#6c665f"
                strokeWidth="3"
            />
            <circle
                cx="151"
                cy="135"
                r="10"
                fill="#3d5974"
                stroke="#dbbb83"
                strokeWidth="3"
            />
            <path
                d="M144 71V43m-31-19q35 42 65 0Z"
                fill="#9fb3c8"
                stroke="#b8cce0"
                strokeWidth="3"
            />
            <path
                d="m148 30 12-22m5 156 13 29 22 9"
                fill="none"
                stroke="#b8cce0"
                strokeWidth="2"
            />
            <circle cx="160" cy="9" r="4" fill="#e5b57c" />
            <text
                x="149"
                y="222"
                textAnchor="middle"
                fontFamily="monospace"
                fontSize="11"
                letterSpacing="2"
                fill="#acbcdc"
            >
                SEARCHING FOR VOWELS
            </text>
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
                <path d="M58 111h9m-9 5h9" stroke="#d89e83" strokeWidth="3" />
                <path
                    d="m44 180 24 8m52-1 20-5M8 123l20-7m111-32 21 7"
                    stroke="#8194b4"
                    strokeWidth="4"
                />
            </svg>
        </div>
        <svg
            className="scene-vignette-left absolute -left-5 bottom-5 w-60 sm:bottom-8 sm:left-5 sm:w-80"
            viewBox="0 0 360 330"
        >
            <path d="M0 278q131-76 360-12v64H0Z" fill="#283d58" />
            <path
                d="M13 292q160-45 320-3"
                fill="none"
                stroke="#44627e"
                strokeWidth="2"
            />
            <g fill="#1c2c45" stroke="#405873" strokeWidth="2">
                <ellipse cx="53" cy="293" rx="31" ry="8" />
                <ellipse cx="289" cy="285" rx="20" ry="6" />
                <ellipse cx="261" cy="319" rx="44" ry="8" />
            </g>
            <g transform="translate(62 28) rotate(-12 70 120)">
                <path d="M55 210q-18 42 16 79 28-48 13-79" fill="#bd784f" />
                <path d="M64 211q-6 28 8 48 13-31 5-48" fill="#eac287" />
                <path
                    d="M39 144q-28 10-32 60l32-15m57-45q31 11 37 60l-35-15"
                    fill="#bd7973"
                    stroke="#342c40"
                    strokeWidth="3"
                />
                <path
                    d="M37 186V92q4-60 32-76 33 21 35 76v94Z"
                    fill="#c9c8bc"
                    stroke="#5c6c88"
                    strokeWidth="3"
                />
                <path
                    d="M38 89q32 13 65 0Q95 39 69 16 43 37 38 89"
                    fill="#b77875"
                />
                <circle
                    cx="70"
                    cy="123"
                    r="22"
                    fill="#233650"
                    stroke="#d6b98a"
                    strokeWidth="6"
                />
                <path
                    d="M57 117q9-12 23-6"
                    fill="none"
                    stroke="#81b6ce"
                    strokeWidth="3"
                />
                <path d="M39 179h64v18H39Z" fill="#7485a1" />
                <path d="M48 158h43" stroke="#a0a8af" strokeWidth="3" />
            </g>
            <path
                d="M246 204v74m0-70 59 5v35l-59-7"
                fill="#51637f"
                stroke="#b3b5b8"
                strokeWidth="3"
            />
            <text
                x="274"
                y="233"
                textAnchor="middle"
                fontFamily="monospace"
                fontSize="11"
                fill="#d9dcd4"
            >
                BRB
            </text>
            <g fill="#7490a8" opacity="0.6">
                {[0, 1, 2, 3, 4].map((i) => (
                    <g key={i}>
                        <ellipse
                            cx={167 + i * 13}
                            cy={276 - i * 9}
                            rx="4"
                            ry="2"
                        />
                        <ellipse
                            cx={177 + i * 13}
                            cy={279 - i * 9}
                            rx="4"
                            ry="2"
                        />
                    </g>
                ))}
            </g>
        </svg>
        <svg
            className="scene-vignette-right absolute bottom-8 right-2 w-40 sm:right-12 sm:w-56"
            viewBox="0 0 220 250"
        >
            <g transform="rotate(15 110 95)">
                <path
                    d="M52 95q8-71 58-71t58 71"
                    fill="#6b9c97"
                    fillOpacity="0.35"
                    stroke="#91c2b7"
                    strokeWidth="2"
                />
                <path d="M86 89q-19-50 23-53 44 4 25 53" fill="#8faf7b" />
                <ellipse
                    cx="97"
                    cy="61"
                    rx="5"
                    ry="9"
                    transform="rotate(-20 97 61)"
                    fill="#27384a"
                />
                <ellipse
                    cx="124"
                    cy="61"
                    rx="5"
                    ry="9"
                    transform="rotate(20 124 61)"
                    fill="#27384a"
                />
                <path d="M105 77h12" stroke="#27384a" strokeWidth="2" />
                <ellipse
                    cx="110"
                    cy="101"
                    rx="97"
                    ry="25"
                    fill="#667899"
                    stroke="#a5b2c9"
                    strokeWidth="2"
                />
                <path d="M36 118q75 40 149-2" fill="#374b6b" />
                {[47, 79, 112, 145, 177].map((x) => (
                    <circle key={x} cx={x} cy={102} r="4" fill="#e1bd86" />
                ))}
            </g>
            <path
                d="m55 136-17 66m93-67 28 52"
                stroke="#7da9b4"
                strokeDasharray="4 7"
                opacity="0.4"
            />
            <g transform="translate(103 194) rotate(20)">
                <rect
                    x="-16"
                    y="-11"
                    width="32"
                    height="29"
                    rx="4"
                    fill="#b9c6d1"
                />
                <path
                    d="M16-4q23-7 20 8t-20 9"
                    fill="none"
                    stroke="#b9c6d1"
                    strokeWidth="5"
                />
                <text
                    y="8"
                    textAnchor="middle"
                    fontFamily="monospace"
                    fontSize="8"
                    fill="#344661"
                >
                    DECAF
                </text>
            </g>
        </svg>
    </div>
)
