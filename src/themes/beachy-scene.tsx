const Palm = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 180 320" fill="none">
        <path d="M75 325Q110 210 87 88" stroke="#634b36" strokeWidth="17" />
        <path
            d="M73 300l21 5m-16-36 22 4m-18-37 21 3m-19-36 21 1m-20-36h20"
            stroke="#a38758"
            strokeWidth="4"
        />
        <g fill="#163d35">
            <path d="M88 91Q18 17 0 97Q40 66 88 91Z" />
            <path d="M88 91Q-8 77 9 165Q33 106 88 91Z" />
            <path d="M88 91Q34-4 90 0Q69 49 88 91Z" />
            <path d="M88 91Q135 8 180 53Q122 48 88 91Z" />
            <path d="M88 91Q176 54 183 134Q138 96 88 91Z" />
            <path d="M88 91Q155 105 145 183Q120 131 88 91Z" />
        </g>
        <circle cx="84" cy="99" r="9" fill="#554332" />
        <circle cx="100" cy="96" r="8" fill="#715239" />
    </svg>
)

export const BeachyScene = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
    >
        <svg
            className="absolute right-[-2rem] top-[12%] w-40 opacity-80 sm:right-6 sm:w-48"
            viewBox="0 0 200 200"
        >
            <circle cx="100" cy="100" r="96" fill="#f7c990" opacity="0.04" />
            <circle cx="100" cy="100" r="76" fill="#f7c990" opacity="0.07" />
            <circle cx="100" cy="100" r="55" fill="#e9b87e" />
            <path
                d="M57 86h35v13q-17 20-30 0Zm51 0h35l-5 13q-13 20-30 0Z"
                fill="#19383d"
            />
            <path
                d="M89 90h22m-28 29q17 14 34-1"
                fill="none"
                stroke="#19383d"
                strokeWidth="5"
                strokeLinecap="round"
            />
        </svg>
        <svg
            className="absolute inset-x-0 bottom-0 h-[48%] w-full"
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
        >
            <defs>
                <pattern
                    id="beach-ripples"
                    width="130"
                    height="42"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M8 12q18-7 36 0m30 19q20-7 40 0"
                        fill="none"
                        stroke="#b6ded2"
                        strokeWidth="1.5"
                        opacity="0.2"
                    />
                </pattern>
                <pattern
                    id="beach-sand"
                    width="46"
                    height="38"
                    patternUnits="userSpaceOnUse"
                >
                    <circle cx="7" cy="11" r="1" fill="#e3c69c" />
                    <path d="m26 27 4-1m-16 7 2 1" stroke="#6c6548" />
                </pattern>
            </defs>
            <path
                d="M0 52 62 27 90 34 151 4 195 27 255 19 307 52Z"
                fill="#184942"
            />
            <path
                d="M1070 54 1130 18 1170 35 1230 12 1280 39 1350 22 1440 45V65Z"
                fill="#184942"
            />
            <path
                d="M0 40Q360 25 720 40T1440 40V400H0Z"
                fill="#237275"
                opacity="0.55"
            />
            <path
                d="M0 130Q240 110 480 132T960 130T1440 130"
                fill="none"
                stroke="#a2d6c4"
                strokeWidth="2"
                opacity="0.25"
            />
            <path
                d="M0 210Q230 185 480 212T960 215T1440 208"
                fill="none"
                stroke="#a2d6c4"
                strokeWidth="3"
                opacity="0.25"
            />
            <path
                d="M0 280Q300 252 650 275T1440 270V400H0Z"
                fill="#ac9168"
                opacity="0.7"
            />
            <path
                d="M0 280Q300 252 650 275T1440 270"
                fill="none"
                stroke="#c7d9bb"
                strokeWidth="8"
                opacity="0.4"
            />
            <path d="M0 55H1440V260H0Z" fill="url(#beach-ripples)" />
            <path
                d="M0 291Q400 260 800 288T1440 288V400H0Z"
                fill="url(#beach-sand)"
            />
            <g fill="#e7bb7e" opacity="0.35">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <ellipse
                        key={i}
                        cx={1200}
                        cy={64 + i * 21}
                        rx={24 + i * 13}
                        ry="2"
                    />
                ))}
            </g>
        </svg>
        <svg
            className="absolute right-[15%] top-[48%] w-24 opacity-75 sm:w-36"
            viewBox="0 0 170 130"
        >
            <path d="M28 92h122l-20 19H49Z" fill="#9c624e" />
            <path d="M91 15v80" stroke="#dec8a0" strokeWidth="3" />
            <path d="M85 20 33 86h52Z" fill="#e5cfa5" />
            <path d="m98 35 41 51H98Z" fill="#cf8b72" />
            <path
                d="M24 119q20-6 41 0m28 0q22-6 43 0"
                fill="none"
                stroke="#b3d4c5"
                opacity="0.5"
            />
            <path d="m90 15 21 6-21 7" fill="#ddae68" />
        </svg>
        <Palm className="absolute -left-16 top-[22%] w-40 opacity-65 sm:-left-10 sm:w-52" />
        <Palm className="absolute -right-20 bottom-16 w-40 -scale-x-100 opacity-50 sm:-right-10 sm:w-48" />
        <svg
            className="absolute bottom-16 left-[28%] w-28 opacity-70 sm:bottom-24 sm:left-[23%] sm:w-40"
            viewBox="0 0 180 200"
        >
            <path d="m81 29 20 160" stroke="#dfca9e" strokeWidth="5" />
            <path
                d="M8 93Q42 5 81 28Q148 13 175 70Q149 61 128 77Q103 66 82 86Q43 73 8 93Z"
                fill="#c77960"
            />
            <path
                d="M81 28Q52 37 47 83L82 86Q82 53 81 28Zm0 0q43 5 47 49l47-7Q141 13 81 28Z"
                fill="#e9cf9f"
            />
            <ellipse
                cx="101"
                cy="189"
                rx="49"
                ry="8"
                fill="#554a3b"
                opacity="0.3"
            />
        </svg>
        <svg
            className="absolute left-[6%] top-[14%] w-24 opacity-35"
            viewBox="0 0 150 80"
            fill="none"
            stroke="#c0d6cf"
            strokeWidth="3"
            strokeLinecap="round"
        >
            <path d="M10 30q15-15 30 0q15-15 30 0m20 30q10-10 20 0q10-10 20 0" />
        </svg>
        <svg
            className="scene-vignette-left absolute -left-5 bottom-4 w-56 sm:bottom-6 sm:left-3 sm:w-80"
            viewBox="0 0 340 340"
        >
            <ellipse
                cx="166"
                cy="316"
                rx="150"
                ry="13"
                fill="#243f35"
                opacity="0.3"
            />
            <path
                d="M47 127h218v178H47Z"
                fill="#6d6550"
                stroke="#b19a6d"
                strokeWidth="3"
            />
            {[64, 88, 112, 136, 160, 184, 208, 232, 256].map((x) => (
                <path
                    key={x}
                    d={`M${x} 132v168`}
                    stroke="#394d40"
                    strokeWidth="3"
                    opacity="0.55"
                />
            ))}
            <path d="M61 44h191l48 92H14Z" fill="#bd9c60" />
            {[31, 51, 72, 93, 115, 137, 160, 183, 206, 229, 252, 275].map(
                (x, i) => (
                    <path
                        key={x}
                        d={`m${64 + i * 16} 51 ${x - (64 + i * 16)} 77`}
                        stroke="#665a3d"
                        strokeWidth="3"
                        opacity="0.45"
                    />
                ),
            )}
            <path
                d="M16 137q140-15 282 0"
                stroke="#dac192"
                strokeWidth="6"
                fill="none"
            />
            <rect
                x="72"
                y="148"
                width="168"
                height="80"
                rx="3"
                fill="#183f3e"
            />
            <path d="M68 230h180v13H68Z" fill="#d0b381" />
            <rect
                x="87"
                y="81"
                width="143"
                height="35"
                rx="3"
                fill="#285455"
                stroke="#e1c493"
                strokeWidth="2"
            />
            <text
                x="158"
                y="104"
                textAnchor="middle"
                fill="#f0d8ad"
                fontSize="17"
                fontFamily="monospace"
                letterSpacing="2"
            >
                NO HURRY
            </text>
            <path
                d="M78 128q80 29 157 0"
                stroke="#253e35"
                fill="none"
                strokeWidth="2"
            />
            {[91, 120, 151, 182, 212].map((x, i) => (
                <circle
                    key={x}
                    cx={x}
                    cy={139 + (i === 2 ? 8 : 3)}
                    r="4"
                    fill={i % 2 ? '#e4be77' : '#ce8973'}
                />
            ))}
            <g transform="translate(103 197)">
                <path d="M-13 0h27l-4 30H-8Z" fill="#ca8c60" />
                <ellipse rx="14" ry="4" fill="#e5c494" />
                <path
                    d="m3 0 5-25 14-6"
                    fill="none"
                    stroke="#acd3c0"
                    strokeWidth="3"
                />
                <path d="m4-22 19-16 12 12Z" fill="#de9b87" />
            </g>
            <rect
                x="179"
                y="184"
                width="42"
                height="43"
                rx="6"
                fill="#9db6a2"
            />
            <circle cx="192" cy="212" r="8" fill="#355753" />
            <path
                d="M187 194h25m-8 15h9m-9 6h9m-11-30 8-27"
                stroke="#355753"
                strokeWidth="2"
            />
            <g transform="translate(270 248) rotate(9)">
                <path
                    d="M0 57V-49q19-65 38 0V57Z"
                    fill="#cc8d71"
                    stroke="#e1bc8d"
                    strokeWidth="3"
                />
                <path d="M14-80V57h10V-80" fill="#e3c99f" />
                <path d="M3-12h32M3 1h32" stroke="#3f7870" strokeWidth="8" />
            </g>
        </svg>
        <svg
            className="scene-vignette-right absolute -right-3 bottom-5 w-44 sm:bottom-7 sm:right-10 sm:w-64"
            viewBox="0 0 280 220"
        >
            <path
                d="m29 157 15-14 16 15-18 12Zm30 20 15-14 16 15-18 12Zm30 20 15-14 16 15-18 12Z"
                fill="#776a4b"
                opacity="0.55"
            />
            <g fill="#d27e58" stroke="#713f31" strokeWidth="2">
                <ellipse cx="180" cy="150" rx="39" ry="25" />
                <path
                    d="m148 151-29 12-7 17m40-19-21 21m83-32 28 14 8 16m-40-20 22 23M151 142l-27-24m84 23 26-22"
                    fill="none"
                    stroke="#d27e58"
                    strokeWidth="5"
                />
                <path d="M124 119q-28-5-14-33l12 17 13-17q13 23-11 33Zm111 0q-26-9-11-34l10 18 15-13q8 23-14 29Z" />
                <path d="m167 134-2-14m28 14 2-14" strokeWidth="4" />
            </g>
            <path
                d="M157 116h18v10q-9 8-16 0Zm27 0h18l-2 10q-8 8-15 0Z"
                fill="#233e3d"
            />
            <path
                d="M174 119h12m-17 32q11 8 22-1"
                stroke="#233e3d"
                fill="none"
                strokeWidth="2"
            />
            <path
                d="m39 77 5-18 5 18 18 2-14 10 4 17-13-10-14 10 4-17-14-10Z"
                fill="#c5967e"
            />
            <path
                d="M83 74q27-39 42 1l-20 8Z"
                fill="#e1c5a0"
                stroke="#ab926c"
                strokeWidth="2"
            />
            <path d="m105 82-12-22m12 22-2-28m2 28 8-25" stroke="#ab926c" />
        </svg>
    </div>
)
