import { Ambient } from './ambient'
const Egg = ({
    x,
    y,
    color,
    scale = 1,
}: {
    x: number
    y: number
    color: string
    scale?: number
}) => (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
        <path
            d="M0-52C24-52 44-10 40 17C36 56-36 56-40 17C-44-10-24-52 0-52Z"
            fill={color}
        />
        <path
            d="m-33-12 11 8 11-8 11 8 11-8 11 8 11-8M-37 19h74"
            fill="none"
            stroke="#f1debf"
            strokeWidth="5"
        />
        <g fill="#f1debf">
            <circle cx="-13" cy="-30" r="3" />
            <circle cx="13" cy="-30" r="3" />
            <circle cx="-17" cy="32" r="3" />
            <circle cx="0" cy="33" r="3" />
            <circle cx="17" cy="32" r="3" />
        </g>
        <path
            d="M-10-40q-17 14-20 33"
            fill="none"
            stroke="#fff3db"
            strokeOpacity="0.25"
            strokeWidth="5"
            strokeLinecap="round"
        />
    </g>
)

const Heart = ({
    x,
    y,
    color,
    scale = 1,
}: {
    x: number
    y: number
    color: string
    scale?: number
}) => (
    <path
        transform={`translate(${x} ${y}) scale(${scale})`}
        d="M0 23C-45-5-29-40-9-25L0-16 9-25C29-40 45-5 0 23Z"
        fill={color}
    />
)

export const AprilFoolsScene = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
    >
        <svg
            className="absolute inset-0 h-full w-full opacity-35"
            viewBox="0 0 1440 1000"
            preserveAspectRatio="none"
        >
            {[...Array(26)].map((_, i) => (
                <g
                    key={i}
                    transform={`translate(${(i * 227 + 39) % 1440} ${120 + ((i * 163) % 850)}) rotate(${i * 31})`}
                >
                    <path
                        d={i % 2 ? 'M-5-8v16' : 'M-8 0q8-17 16 0t16 0'}
                        stroke={['#e1bc76', '#c499b5', '#85bdb0'][i % 3]}
                        strokeWidth="4"
                        fill="none"
                    />
                </g>
            ))}
            <path
                d="M0 936Q340 900 650 950T1440 925V1000H0Z"
                fill="#526278"
                opacity="0.5"
            />
        </svg>
        <svg
            className="absolute -right-9 top-[18%] w-48 opacity-65 sm:right-3 sm:w-60"
            viewBox="0 0 250 230"
        >
            <path
                d="M26 132Q21 95 55 95Q56 52 97 65Q131 27 165 72Q200 61 208 105Q239 115 228 142H33Z"
                fill="#7c90a4"
            />
            <circle cx="109" cy="104" r="24" fill="#ece6d7" />
            <circle cx="163" cy="103" r="21" fill="#ece6d7" />
            <circle cx="117" cy="113" r="9" fill="#283244" />
            <circle cx="157" cy="111" r="8" fill="#283244" />
            <path
                d="M122 140q15 11 28-2"
                fill="none"
                stroke="#283244"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="m58 172 16 13m114-19-4 21m-69-12 9 18"
                stroke="#d6b975"
                strokeWidth="5"
                strokeLinecap="round"
            />
        </svg>
        <svg
            className="absolute -left-8 top-[23%] w-40 -rotate-12 opacity-60 sm:left-1 sm:w-52"
            viewBox="0 0 220 240"
        >
            <path
                d="M98 0q42 47 19 93"
                stroke="#a8b5bb"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M35 135q76-83 147 0-71 73-147 0l-26-27v57Z"
                fill="#87b8ab"
                stroke="#b7d0ba"
                strokeWidth="2"
            />
            <path
                d="m69 103 19-25 35 12m-37 74 26 27 22-29m-30-52 23 24-23 23"
                fill="#649b92"
            />
            <circle cx="151" cy="125" r="10" fill="#eee5cf" />
            <circle cx="154" cy="125" r="4" fill="#293447" />
            <path
                d="M170 144q-12 1-15-8"
                fill="none"
                stroke="#293447"
                strokeWidth="2"
            />
        </svg>
        <svg
            className="scene-vignette-left absolute -left-6 bottom-4 w-64 sm:bottom-6 sm:left-3 sm:w-80"
            viewBox="0 0 360 360"
        >
            <ellipse
                cx="174"
                cy="338"
                rx="160"
                ry="16"
                fill="#101c2c"
                opacity="0.45"
            />
            <path
                d="m74 235-40-56 122-33 38 55Z"
                fill="#9b6681"
                stroke="#d0a2ad"
                strokeWidth="4"
            />
            <path
                d="m57 186 84-23 29 39"
                stroke="#d0a2ad"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M174 187c-46 0-46 22 0 22s46 22 0 22-46 22 0 22"
                fill="none"
                stroke="#b2c3bd"
                strokeWidth="8"
            />
            <path
                d="M58 247h244v82H58Z"
                fill="#98667f"
                stroke="#d0a2ad"
                strokeWidth="3"
            />
            <path d="M58 247h244v14H58Z" fill="#c18d9d" />
            <path
                d="M73 270v46m14-46v46m199-46v46m-14-46v46"
                stroke="#d8b392"
                strokeWidth="4"
            />
            <path
                d="M302 283h22v-16h17v34h-17v-9h-22"
                fill="none"
                stroke="#c7b995"
                strokeWidth="6"
                strokeLinejoin="round"
            />
            <rect
                x="112"
                y="272"
                width="137"
                height="46"
                rx="4"
                fill="#dfceaa"
            />
            <text
                x="180"
                y="291"
                textAnchor="middle"
                fill="#51465b"
                fontFamily="Georgia, serif"
                fontSize="12"
                fontWeight="600"
                letterSpacing="1.2"
            >
                <tspan x="180">TOTALLY</tspan>
                <tspan x="180" dy="16">
                    NORMAL
                </tspan>
            </text>
            <path d="M118 167q-33-3-48-22 2 40 43 55" fill="#d4aa56" />
            <ellipse cx="166" cy="185" rx="65" ry="38" fill="#dfbc6c" />
            <path
                d="M176 180c-14-29-7-48 17-54 25-7 47 8 46 29-1 28-22 44-50 44"
                fill="#e9c77c"
            />
            <path d="m233 147 35 11-34 13" fill="#ca8553" />
            <ellipse cx="157" cy="187" rx="30" ry="16" fill="#cfa456" />
            <path
                d="M133 184q22 17 43-1"
                stroke="#ecd28e"
                strokeWidth="3"
                fill="none"
            />
            <circle cx="213" cy="145" r="5" fill="#343744" />
            <circle cx="214" cy="143" r="1.5" fill="#fff4dc" />
            <path
                d="M183 131q-1-31-28-46l35 13 15-41 15 42 34-20q-18 30-13 48Z"
                fill="#b787a6"
                stroke="#ddbec2"
                strokeWidth="2"
            />
            <path d="m190 98 15-41 15 42-9 31h-14Z" fill="#80afa3" />
            <g fill="#e7c985">
                <circle cx="155" cy="85" r="6" />
                <circle cx="205" cy="57" r="6" />
                <circle cx="254" cy="79" r="6" />
            </g>
            <path d="M56 331h244" stroke="#dab791" strokeWidth="4" />
        </svg>
        <svg
            className="scene-vignette-right absolute -right-3 bottom-5 w-48 sm:bottom-8 sm:right-6 sm:w-64"
            viewBox="0 0 290 340"
        >
            <ellipse
                cx="147"
                cy="319"
                rx="108"
                ry="13"
                fill="#111e2b"
                opacity="0.45"
            />
            <path
                d="M118 248V106q0-39 31-39t31 39v142M120 190H83q-29 0-29-29v-34q0-16 15-16t15 16v27h36m58 48h37q29 0 29-29v-41q0-16-15-16t-15 16v35h-36"
                fill="#73a398"
                stroke="#a4c3a5"
                strokeWidth="3"
                strokeLinejoin="round"
            />
            <path
                d="M136 95v139m28-139v139M68 135v32m163-27v41"
                stroke="#527f78"
                strokeWidth="3"
                strokeDasharray="5 9"
            />
            <circle cx="128" cy="131" r="22" fill="#f2e8d4" />
            <circle cx="177" cy="131" r="22" fill="#f2e8d4" />
            <circle cx="135" cy="138" r="8" fill="#293243" />
            <circle cx="171" cy="139" r="8" fill="#293243" />
            <path
                d="M151 170q-13-20-28-2-17 16-27 0 1 32 30 23 15-4 25-14 10 10 25 14 29 9 30-23-10 16-27 0-15-18-28 2"
                fill="#3a3341"
            />
            <path
                d="M83 243h132l-18 65H101Z"
                fill="#b88269"
                stroke="#d6ac87"
                strokeWidth="3"
            />
            <rect
                x="76"
                y="231"
                width="146"
                height="20"
                rx="5"
                fill="#c9987b"
            />
            <path
                d="M105 268h91m-87 13h84m-82 13h78"
                stroke="#9b6d60"
                strokeWidth="2"
            />
            <path d="m131 75-19-21 26 2 8-22 12 24 25-5-16 22" fill="#c698b4" />
            <circle cx="149" cy="68" r="9" fill="#e8cc85" />
            <path
                d="m30 255 10-9m203 6 11 9m-24-53 13-1"
                stroke="#d5bb80"
                strokeWidth="3"
            />
        </svg>
        <Ambient
            count={18}
            motion="float"
            glyphs={['?', '!', '?!', '¿']}
            colors={['#fcd34d', '#5eead4', '#f0abfc', '#fca5a5']}
            size={[14, 26]}
            duration={[4, 9]}
        />
        <Ambient
            count={24}
            motion="fall"
            shape="confetti"
            colors={['#fcd34d', '#5eead4', '#f0abfc', '#fca5a5']}
            size={[7, 10]}
            duration={[10, 18]}
        />
    </div>
)

export const EasterScene = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
    >
        <svg
            className="absolute inset-x-0 bottom-0 h-[44%] w-full opacity-60"
            viewBox="0 0 1440 440"
            preserveAspectRatio="none"
        >
            <path d="M0 144Q260 28 650 147T1440 100V440H0Z" fill="#657362" />
            <path d="M0 257Q360 121 820 287T1440 220V440H0Z" fill="#475d4f" />
            <path d="M0 385Q400 315 820 405T1440 361V440H0Z" fill="#34473d" />
        </svg>
        <svg
            className="absolute -right-10 top-[15%] w-52 opacity-55 sm:right-0 sm:w-72"
            viewBox="0 0 300 260"
        >
            <circle cx="173" cy="112" r="91" fill="#dbb6bd" opacity="0.15" />
            <circle cx="173" cy="112" r="62" fill="#e2c8ad" opacity="0.3" />
            <path
                d="M35 156q-3-26 24-29 3-38 37-27 21-22 45 6 35-4 35 33l22 17Z"
                fill="#c3bdc4"
                opacity="0.5"
            />
            <path
                d="m75 207 11-6 11 6m111-30 9-5 9 5"
                fill="none"
                stroke="#d6c8bd"
                strokeWidth="2"
            />
        </svg>
        <svg
            className="absolute -left-8 top-[25%] w-44 opacity-75 sm:left-1 sm:w-56"
            viewBox="0 0 240 360"
        >
            {[
                [54, 158],
                [132, 105],
                [197, 188],
            ].map(([x, y], i) => (
                <g key={x} transform={`translate(${x} ${y})`}>
                    <path
                        d="M0 0q-20 90 5 180M0 100q-52-2-44-48 37 9 44 48m3 37q43-14 40-58-35 15-40 58"
                        fill="#739065"
                        stroke="#739065"
                        strokeWidth="3"
                    />
                    {[0, 60, 120, 180, 240, 300].map((angle) => (
                        <ellipse
                            key={angle}
                            cy="-19"
                            rx="11"
                            ry="22"
                            fill={i % 2 ? '#e6d6a5' : '#d9c078'}
                            transform={`rotate(${angle})`}
                        />
                    ))}
                    <circle r="13" fill="#c99653" />
                    <circle r="7" fill="#a97e46" />
                </g>
            ))}
        </svg>
        <svg
            className="scene-vignette-left absolute -left-7 bottom-4 w-64 sm:bottom-6 sm:left-1 sm:w-80"
            viewBox="0 0 380 370"
        >
            <defs>
                <pattern
                    id="easter-basket-weave"
                    width="18"
                    height="14"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M0 3h18M5 0v14m9-14v14"
                        stroke="#75513c"
                        strokeWidth="2"
                        opacity="0.55"
                    />
                    <path
                        d="M0 9h18"
                        stroke="#dbb582"
                        strokeWidth="2"
                        opacity="0.45"
                    />
                </pattern>
            </defs>
            <ellipse cx="188" cy="342" rx="168" ry="19" fill="#293e34" />
            <path
                d="M73 260C9 64 314 38 313 260"
                fill="none"
                stroke="#a47e55"
                strokeWidth="13"
            />
            <path
                d="M73 260C9 64 314 38 313 260"
                fill="none"
                stroke="#d1ae7c"
                strokeWidth="3"
                strokeDasharray="5 7"
            />
            <ellipse
                cx="249"
                cy="233"
                rx="55"
                ry="66"
                fill="#674432"
                stroke="#b08866"
                strokeWidth="3"
            />
            <ellipse
                cx="229"
                cy="99"
                rx="18"
                ry="55"
                transform="rotate(-11 229 99)"
                fill="#674432"
                stroke="#b08866"
                strokeWidth="3"
            />
            <path
                d="M262 149q-17-44-6-85l8 3 1 12 12-5 4 11 12-4q2 47-13 69Z"
                fill="#674432"
                stroke="#b08866"
                strokeWidth="3"
            />
            <ellipse
                cx="252"
                cy="163"
                rx="38"
                ry="35"
                fill="#79513b"
                stroke="#b08866"
                strokeWidth="3"
            />
            <path
                d="m224 66 9 51m34-23 4 29"
                stroke="#9a7352"
                strokeWidth="6"
                strokeLinecap="round"
            />
            <circle cx="237" cy="158" r="3" fill="#e2c3a1" />
            <circle cx="267" cy="158" r="3" fill="#e2c3a1" />
            <path
                d="m247 167 5 6 5-6m-5 6v8m-11-1q11 9 22 0"
                fill="none"
                stroke="#d3ad8b"
                strokeWidth="2"
            />
            <path d="m250 203-22-13v26l22-7 22 7v-26Z" fill="#98b7aa" />
            <circle cx="250" cy="205" r="5" fill="#d0d1b1" />
            <Egg x={109} y={227} color="#be9bb8" scale={0.88} />
            <Egg x={177} y={201} color="#8cad9e" scale={0.83} />
            <Egg x={216} y={254} color="#d2b87f" scale={0.76} />
            <path
                d="M49 252q146 24 285 0l-26 76q-117 31-231-1Z"
                fill="#b08a5e"
                stroke="#d1ae7c"
                strokeWidth="4"
            />
            <path
                d="M49 252q146 24 285 0l-26 76q-117 31-231-1Z"
                fill="url(#easter-basket-weave)"
            />
            <path
                d="M52 253q144 24 279 0"
                fill="none"
                stroke="#dec18e"
                strokeWidth="9"
            />
            <ellipse
                cx="188"
                cy="300"
                rx="44"
                ry="19"
                fill="#e0ceaa"
                stroke="#977354"
                strokeWidth="2"
            />
            <text
                x="188"
                y="304"
                textAnchor="middle"
                fontFamily="Georgia, serif"
                fontSize="12"
                letterSpacing="1.4"
                fill="#65513f"
            >
                EASTER
            </text>
            <path
                d="M32 335q-17-24-7-39 20 12 21 35m288 0q9-35 23-37 6 22-12 41"
                fill="#859363"
            />
        </svg>
        <svg
            className="scene-vignette-right absolute -right-5 bottom-4 w-52 sm:bottom-7 sm:right-5 sm:w-72"
            viewBox="0 0 300 340"
        >
            <ellipse cx="160" cy="318" rx="120" ry="14" fill="#293f34" />
            <ellipse cx="154" cy="211" rx="68" ry="73" fill="#dcc582" />
            <circle cx="157" cy="143" r="48" fill="#e6d299" />
            <path
                d="m143 102 3-23 15 20 15-15-2 22"
                fill="#e6d299"
                stroke="#c4a966"
                strokeWidth="2"
            />
            <circle cx="140" cy="143" r="4" fill="#53443c" />
            <circle cx="174" cy="143" r="4" fill="#53443c" />
            <path d="m148 156 10 10 11-10" fill="#c18c59" />
            <path
                d="M113 180q-30 21-28 47m115-44q28 23 26 43"
                stroke="#b89d61"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="m91 232 19-14 15 19 21-17 21 20 20-18 20 15 14-12q15 65-67 72-77-4-63-65Z"
                fill="#b394b5"
                stroke="#d2b8c9"
                strokeWidth="3"
            />
            <path
                d="m105 255 12 8 12-8 12 8 12-8 12 8 12-8 12 8 12-8"
                fill="none"
                stroke="#e7d9ba"
                strokeWidth="4"
            />
            <g fill="#e7d9ba">
                <circle cx="125" cy="282" r="3" />
                <circle cx="155" cy="284" r="3" />
                <circle cx="185" cy="280" r="3" />
            </g>
            <Egg x={46} y={294} color="#90b1a1" scale={0.38} />
            <Egg x={250} y={291} color="#cbad82" scale={0.43} />
            <path
                d="M40 304v-31m8 42q-3-23 17-36m171 35q-8-30 4-45"
                stroke="#95a46c"
                strokeWidth="4"
                fill="none"
            />
            <g fill="#e5cfac">
                <circle cx="40" cy="268" r="6" />
                <circle cx="65" cy="277" r="5" />
                <circle cx="241" cy="265" r="7" />
            </g>
        </svg>
        <Ambient
            count={36}
            motion="fall"
            shape="confetti"
            colors={['#f9a8d4', '#a5f3fc', '#fde68a', '#c4b5fd', '#bbf7d0']}
            size={[8, 12]}
            duration={[12, 22]}
        />
    </div>
)

export const ValentinesScene = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
    >
        <svg
            className="absolute inset-x-0 bottom-0 h-[28%] w-full opacity-40"
            viewBox="0 0 1440 280"
            preserveAspectRatio="none"
        >
            <path d="M0 190Q280 90 720 183T1440 174V280H0Z" fill="#6d3f50" />
            <path
                d="M0 241Q440 160 960 230T1440 210"
                stroke="#a77675"
                strokeWidth="2"
                fill="none"
            />
        </svg>
        <svg
            className="absolute -right-7 top-[14%] w-48 opacity-65 sm:right-2 sm:w-64"
            viewBox="0 0 260 360"
        >
            <path
                d="M102 148q55 60 28 135m67-105q-60 36-52 157M161 84q-46 103-21 207"
                stroke="#ba9296"
                strokeWidth="2"
                fill="none"
            />
            <Heart x={103} y={114} color="#bd8395" scale={1.6} />
            <Heart x={197} y={151} color="#937b98" scale={1.2} />
            <Heart x={160} y={63} color="#cbab98" scale={1.1} />
            <path
                d="M71 101q-7-24 10-25m96 67q-6-15 6-21m-39-81q-4-15 6-18"
                stroke="#f0d6c9"
                strokeWidth="4"
                opacity="0.35"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="m98 151 5-7 5 7m84 30 5-5 5 5m-42-89 4-5 4 5"
                fill="#dfb3b3"
            />
        </svg>
        <svg
            className="absolute -left-7 top-[25%] w-40 opacity-60 sm:left-1 sm:w-52"
            viewBox="0 0 220 280"
        >
            <g transform="rotate(-18 104 132)">
                <rect
                    x="32"
                    y="75"
                    width="158"
                    height="112"
                    rx="5"
                    fill="#ddc8b1"
                    stroke="#ab7d7f"
                    strokeWidth="3"
                />
                <path
                    d="m35 80 78 63 73-63m-150 101 48-44m101 43-48-43"
                    stroke="#ba9291"
                    strokeWidth="3"
                    fill="none"
                />
                <Heart x={112} y={138} color="#a7657e" scale={0.47} />
            </g>
            <Heart x={47} y={35} color="#b08295" scale={0.45} />
            <Heart x={175} y={233} color="#c0999b" scale={0.37} />
        </svg>
        <svg
            className="scene-vignette-left absolute -left-5 bottom-4 w-64 sm:bottom-6 sm:left-3 sm:w-80"
            viewBox="0 0 360 360"
        >
            <ellipse cx="174" cy="334" rx="151" ry="17" fill="#311e2a" />
            <path d="M164 177h29v148h-29Z" fill="#8b6b5d" />
            <path d="M173 195v118" stroke="#bc9780" strokeWidth="3" />
            <path
                d="M58 196v-59a70 70 0 0 1 70-70h100a67 67 0 0 1 67 67v62Z"
                fill="#975e73"
                stroke="#c38e9f"
                strokeWidth="4"
            />
            <path
                d="M58 196v-59a70 70 0 0 1 140 0v59"
                fill="#b17b8b"
                stroke="#d0a0aa"
                strokeWidth="3"
            />
            <path
                d="M83 120q21-48 63-25"
                stroke="#e1b2b5"
                strokeWidth="4"
                fill="none"
                opacity="0.5"
            />
            <rect x="89" y="143" width="78" height="10" rx="4" fill="#513b47" />
            <path
                d="M68 197h236"
                stroke="#774c61"
                strokeWidth="8"
                strokeLinecap="round"
            />
            <path
                d="M253 123V44h48v29h-40"
                fill="#c78c98"
                stroke="#e0b3b2"
                strokeWidth="3"
                strokeLinejoin="round"
            />
            <Heart x={280} y={59} color="#f0d7bd" scale={0.26} />
            <circle cx="253" cy="127" r="8" fill="#d2b594" />
            <rect
                x="105"
                y="147"
                width="72"
                height="48"
                rx="2"
                transform="rotate(9 140 147)"
                fill="#e3ccb0"
            />
            <path
                d="m104 149 31 27 39-17"
                fill="none"
                stroke="#b2938b"
                strokeWidth="2"
            />
            <Heart x={136} y={174} color="#ac6f87" scale={0.23} />
            <text
                x="244"
                y="163"
                textAnchor="middle"
                fontFamily="Georgia, serif"
                fontSize="11"
                letterSpacing="1.2"
                fill="#f0d6c6"
            >
                <tspan x="244">LOVE</tspan>
                <tspan x="244" dy="15">
                    LETTERS
                </tspan>
            </text>
            <path
                d="M90 330q-11-101 57-117m-42 86q-36-16-30-50 30 8 30 50m12-32q45-8 49-38-39 1-49 38m122 64q19-63-4-98m8 53q37-9 34-33-31 8-34 33"
                fill="#768b6e"
                stroke="#768b6e"
                strokeWidth="3"
            />
            <g transform="translate(146 212)">
                <circle r="20" fill="#ad7388" />
                <path
                    d="M-11 8q-17-23 7-26 25 0 15 22-18 18-22-3-1-12 10-7"
                    fill="none"
                    stroke="#d2a0ae"
                    strokeWidth="4"
                />
            </g>
            <g transform="translate(234 233)">
                <circle r="15" fill="#bd9296" />
                <path
                    d="M-8 5q-12-18 6-19 17 1 10 16-12 12-16-2 0-7 7-5"
                    fill="none"
                    stroke="#e0b6b4"
                    strokeWidth="3"
                />
            </g>
            <g transform="translate(270 319) rotate(12)">
                <rect
                    x="-40"
                    y="-22"
                    width="80"
                    height="46"
                    rx="3"
                    fill="#dcc5aa"
                />
                <path
                    d="m-38-19 38 26 38-26"
                    stroke="#b99a92"
                    strokeWidth="2"
                    fill="none"
                />
                <Heart x={0} y={6} color="#aa6e82" scale={0.25} />
            </g>
        </svg>
        <svg
            className="scene-vignette-right absolute -right-5 bottom-4 w-52 sm:bottom-8 sm:right-5 sm:w-72"
            viewBox="0 0 320 350"
        >
            <path
                d="M18 273q140-24 285 1m-84-6 46-29M75 268l-31-22"
                fill="none"
                stroke="#9d7e6c"
                strokeWidth="8"
                strokeLinecap="round"
            />
            <path
                d="m245 250 10-22q29-6 25 12-6 11-35 10m-193 3-17-12q-22 6-11 18 15 7 28-6"
                fill="#809176"
            />
            <path d="m89 215-24 39 48-15m105-24 25 40-49-17" fill="#7f748d" />
            <ellipse cx="110" cy="194" rx="43" ry="59" fill="#9a8caa" />
            <ellipse cx="208" cy="194" rx="43" ry="59" fill="#b58d9b" />
            <circle cx="124" cy="137" r="33" fill="#aaa0b6" />
            <circle cx="193" cy="137" r="33" fill="#c59faa" />
            <path d="m150 141 13 8-15 5m19-13-13 8 17 5" fill="#d0ad7d" />
            <path
                d="M131 132q7-5 11 2m35 0q6-5 12-1"
                stroke="#463544"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
            />
            <circle cx="138" cy="148" r="5" fill="#c18eab" />
            <circle cx="176" cy="148" r="5" fill="#d5a7af" />
            <path
                d="M90 171q-31 37-3 62 25 0 39-47m101-14q29 37 1 62-25 0-39-47"
                fill="#857994"
                stroke="#b4a2b6"
                strokeWidth="2"
            />
            <path
                d="m91 193 12 10m-17 3 11 10m124-23-12 10m17 3-11 10"
                stroke="#c4b0c0"
                strokeWidth="2"
            />
            <path
                d="m106 249-3 16m15-16 4 16m76-16-3 16m16-16 4 16"
                stroke="#cbaf8d"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <Heart x={159} y={75} color="#cd98a5" scale={0.68} />
            <Heart x={88} y={83} color="#b2869d" scale={0.28} />
            <Heart x={227} y={94} color="#b2869d" scale={0.23} />
            <Heart x={162} y={315} color="#ab7187" scale={0.93} />
            <g fill="#674638" stroke="#c29d7c" strokeWidth="1.5">
                <rect x="143" y="294" width="15" height="15" rx="3" />
                <rect x="167" y="294" width="15" height="15" rx="3" />
                <rect x="155" y="314" width="15" height="15" rx="3" />
            </g>
            <path
                d="m146 298 9 6m15-6 9 6m-20 14 9 6"
                stroke="#d7b696"
                strokeWidth="1.5"
            />
        </svg>
        <Ambient
            count={22}
            motion="rise"
            glyphs={['♥']}
            colors={['#fb7185', '#f472b6', '#fda4af', '#e11d48']}
            size={[10, 22]}
            duration={[12, 22]}
        />
    </div>
)
