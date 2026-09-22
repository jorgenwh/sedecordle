import { Ambient } from './ambient'
const Flower = ({ x, y, color }: { x: number; y: number; color: string }) => (
    <g transform={`translate(${x} ${y})`}>
        <path
            d="M0 0Q-6 60 3 110M1 72Q-34 65-30 40Q0 40 1 72M1 91Q31 73 26 57Q-1 62 1 91"
            fill="#47704e"
            stroke="#47704e"
            strokeWidth="3"
        />
        <g fill={color}>
            {[0, 72, 144, 216, 288].map((angle) => (
                <ellipse
                    key={angle}
                    cy="-14"
                    rx="10"
                    ry="17"
                    transform={`rotate(${angle})`}
                />
            ))}
        </g>
        <circle r="9" fill="#e0bb73" />
    </g>
)

export const SpringScene = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
    >
        <svg
            className="absolute -left-44 top-[18%] w-80 opacity-75 sm:top-4 sm:w-96"
            viewBox="0 0 420 210"
        >
            <path
                d="M-10 41q156 45 332 8m-202 20 54 65m23-67 52 32M61 56l37 47m156-45 25-25"
                fill="none"
                stroke="#826454"
                strokeWidth="7"
                strokeLinecap="round"
            />
            {[
                [66, 55],
                [115, 69],
                [175, 80],
                [222, 62],
                [279, 46],
                [324, 48],
                [102, 106],
                [176, 135],
                [250, 100],
                [281, 27],
            ].map(([x, y], i) => (
                <g key={i} transform={`translate(${x} ${y})`}>
                    {[0, 72, 144, 216, 288].map((angle) => (
                        <ellipse
                            key={angle}
                            cy="-8"
                            rx="7"
                            ry="10"
                            fill={i % 2 ? '#d8a9bc' : '#efc6cf'}
                            transform={`rotate(${angle})`}
                        />
                    ))}
                    <circle r="4" fill="#d8bd7c" />
                    <path d="m13 8 14-5q-2 16-14 5" fill="#6e9061" />
                </g>
            ))}
        </svg>
        <svg
            className="absolute -right-10 top-[12%] w-48 opacity-45 sm:right-4 sm:w-60"
            viewBox="0 0 240 240"
        >
            <circle cx="120" cy="120" r="112" fill="#e6c2a1" opacity="0.08" />
            <circle cx="120" cy="120" r="76" fill="#e6c2a1" opacity="0.25" />
            <path
                d="M30 140Q34 109 62 116Q72 81 106 99Q132 93 141 118Q166 113 174 140Z"
                fill="#d0d9bf"
            />
            <path
                d="M133 173Q140 148 159 152Q177 125 199 150Q219 147 226 173Z"
                fill="#d0d9bf"
                opacity="0.6"
            />
        </svg>
        <svg
            className="absolute inset-x-0 bottom-0 h-[42%] w-full opacity-60"
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
        >
            <path d="M0 170Q270 10 650 160T1440 80V400H0Z" fill="#31533e" />
            <path d="M0 270Q440 150 900 290T1440 220V400H0Z" fill="#47714a" />
        </svg>
        <svg
            className="absolute -left-12 bottom-20 w-60 opacity-70 sm:bottom-16 sm:left-3 sm:w-72"
            viewBox="0 0 280 290"
        >
            <Flower x={58} y={142} color="#cf90a6" />
            <Flower x={121} y={101} color="#d4c9a8" />
            <Flower x={188} y={159} color="#b3a0c6" />
            <Flower x={245} y={127} color="#cf90a6" />
        </svg>
        <svg
            className="absolute -right-12 top-[40%] w-40 opacity-60 sm:right-8 sm:w-52"
            viewBox="0 0 200 220"
        >
            <path
                d="M98 101Q39 21 29 70Q9 118 90 122Q39 111 43 154Q65 190 101 131Q148 188 167 150Q184 116 112 122Q191 111 171 64Q150 26 104 101"
                fill="#ba92af"
            />
            <path
                d="m91 84 9 17 12-19M101 100v45"
                stroke="#29372d"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
            />
            <circle cx="99" cy="109" r="5" fill="#29372d" />
        </svg>
        <svg
            className="scene-vignette-left absolute -left-6 bottom-4 w-60 sm:bottom-7 sm:left-3 sm:w-80"
            viewBox="0 0 360 340"
        >
            <path d="M0 310q171-42 360 3v27H0Z" fill="#3b6044" />
            <path
                d="M30 135 166 40 303 135v170H30Z"
                fill="#476c60"
                fillOpacity="0.55"
                stroke="#99b19a"
                strokeWidth="4"
            />
            <path
                d="M30 135h273M166 43v259M96 92v211M234 90v213m-201-83h267M97 91l69 45 67-46"
                fill="none"
                stroke="#99b19a"
                strokeWidth="3"
            />
            <path
                d="m42 144 43-1v66H42Zm204 0h45v66h-45Z"
                fill="#9cb8a8"
                fillOpacity="0.12"
            />
            <path
                d="m51 155 24 21m179-21 24 21"
                stroke="#c2d4b6"
                opacity="0.3"
                strokeWidth="4"
            />
            <path
                d="M141 208h48v96h-48Z"
                fill="#304d3d"
                stroke="#a7b798"
                strokeWidth="3"
            />
            <circle cx="179" cy="257" r="3" fill="#ddc48b" />
            <path d="M38 274h92m76 0h88" stroke="#baa17c" strokeWidth="6" />
            {[58, 100, 220, 266].map((x, i) => (
                <g key={x} transform={`translate(${x} 254)`}>
                    <path d="M-13 0h26l-4 20H-9Z" fill="#b17a5e" />
                    <path
                        d="M0 0v-34m0 18q-22-16-17-23 20 0 17 23m0-9q23-17 19-24-21 2-19 24"
                        fill="#7d9f69"
                        stroke="#7d9f69"
                        strokeWidth="2"
                    />
                    <circle
                        cy="-36"
                        r="8"
                        fill={i % 2 ? '#e2b8c2' : '#d4c386'}
                    />
                </g>
            ))}
            <path d="M124 134v10m84-10v10" stroke="#c4bb93" strokeWidth="2" />
            <rect
                x="103"
                y="144"
                width="126"
                height="42"
                rx="3"
                fill="#d0c39e"
                stroke="#827b5c"
                strokeWidth="1.5"
            />
            <text
                x="166"
                y="161"
                textAnchor="middle"
                fontFamily="Georgia, serif"
                fontSize="11"
                fontWeight="600"
                letterSpacing="1.2"
                fill="#3a5140"
            >
                <tspan x="166">GROW AT</tspan>
                <tspan x="166" dy="15">
                    YOUR PACE
                </tspan>
            </text>
            <g transform="translate(297 284)">
                <path d="M-20-27h36v42h-36Z" fill="#829e8a" />
                <path
                    d="M-18-18q-34-18-32 10t31 17m35-23 24-13 11 5-30 29"
                    fill="none"
                    stroke="#829e8a"
                    strokeWidth="7"
                />
                <path d="m48-20 12 15" stroke="#afc2a7" strokeWidth="4" />
            </g>
            <g transform="translate(154 33)">
                <ellipse rx="12" ry="10" fill="#bca876" />
                <path d="m12-3 11 5-11 2m-23-4-14-6 3 13" fill="#bca876" />
                <circle cx="5" cy="-3" r="2" fill="#2e4538" />
            </g>
        </svg>
        <svg
            className="scene-vignette-right absolute -right-3 bottom-4 w-48 sm:bottom-8 sm:right-8 sm:w-64"
            viewBox="0 0 280 300"
        >
            <path
                d="M16 276q110-24 255 0"
                stroke="#81975a"
                strokeWidth="4"
                fill="none"
            />
            <g stroke="#40543d" strokeWidth="2">
                <ellipse cx="170" cy="222" rx="48" ry="49" fill="#b5b6a0" />
                <ellipse cx="197" cy="168" rx="36" ry="32" fill="#c9c7ad" />
                <path
                    d="M176 145q-24-80 0-83 22 1 18 80m9 4q-2-85 23-76 17 12-5 84"
                    fill="#c9c7ad"
                />
                <path
                    d="M181 128q-9-49-4-48m35 50 10-43"
                    fill="none"
                    stroke="#b7928a"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <circle cx="208" cy="166" r="3" fill="#40543d" />
                <path d="m224 177-6 3 7 4m-8 6 9 1" fill="none" />
                <ellipse cx="165" cy="264" rx="25" ry="10" fill="#c9c7ad" />
                <circle cx="126" cy="234" r="16" fill="#d8d6bf" />
            </g>
            <path d="M41 232h58l-8 45H48Z" fill="#b4775d" />
            <path d="M34 225h73v13H34Z" fill="#c99070" />
            <Flower x={70} y={152} color="#d5a6c2" />
            <g transform="translate(186 40) rotate(-15)">
                <ellipse
                    cx="-5"
                    cy="-9"
                    rx="9"
                    ry="13"
                    fill="#dbe1c6"
                    opacity="0.7"
                />
                <ellipse
                    cx="9"
                    cy="-9"
                    rx="9"
                    ry="13"
                    fill="#dbe1c6"
                    opacity="0.7"
                />
                <ellipse rx="15" ry="9" fill="#d8b66d" />
                <path d="M-5-8v16m10-16v16" stroke="#4b503a" strokeWidth="4" />
                <circle cx="13" cy="-2" r="2" fill="#354635" />
            </g>
        </svg>
        <Ambient
            count={30}
            motion="fall"
            shape="petal"
            colors={['#f9a8d4', '#fbcfe8', '#fdf2f8', '#f0abfc']}
            size={[7, 12]}
            duration={[12, 24]}
        />
    </div>
)

const Leaf = ({
    x,
    y,
    angle,
    color,
}: {
    x: number
    y: number
    angle: number
    color: string
}) => (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
        <path
            d="M0 42Q-47 20-21-23Q-7-46 0-57Q6-43 20-23Q46 21 0 42Z"
            fill={color}
        />
        <path
            d="M0 55V-37M0 11l-20-21M0-7l16-20M0 27l17-12"
            fill="none"
            stroke="#372528"
            strokeWidth="2.5"
            opacity="0.5"
        />
    </g>
)

export const AutumnScene = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
    >
        <svg
            className="absolute -left-8 top-[14%] w-64 opacity-55 sm:w-80"
            viewBox="0 0 320 560"
        >
            <path
                d="M-10 550Q46 343 28 170Q2 62-20 0M34 305Q96 210 162 130M23 171Q80 143 112 58"
                fill="none"
                stroke="#73523a"
                strokeWidth="16"
                strokeLinecap="round"
            />
            <Leaf x={105} y={66} angle={25} color="#b18546" />
            <Leaf x={159} y={144} angle={68} color="#af6443" />
            <Leaf x={62} y={228} angle={-30} color="#945240" />
            <Leaf x={117} y={311} angle={115} color="#a77843" />
            <Leaf x={237} y={347} angle={52} color="#bb8a51" />
            <Leaf x={136} y={460} angle={-25} color="#945240" />
        </svg>
        <svg
            className="absolute -right-8 top-[19%] w-40 opacity-45 sm:right-8 sm:w-56"
            viewBox="0 0 230 490"
        >
            <Leaf x={110} y={65} angle={-40} color="#b77a48" />
            <Leaf x={50} y={239} angle={75} color="#a25246" />
            <Leaf x={177} y={370} angle={25} color="#b59853" />
        </svg>
        <svg
            className="scene-vignette-left absolute -left-6 bottom-3 w-64 sm:bottom-5 sm:left-2 sm:w-80"
            viewBox="0 0 360 350"
        >
            <path d="M0 306q175-43 360 0v44H0Z" fill="#513d32" />
            <path
                d="M20 285 111 142l115 143Z"
                fill="#a96e43"
                stroke="#c99862"
                strokeWidth="3"
            />
            <path d="m111 142 89 33 103 110h-77Z" fill="#7c5540" />
            <path d="m62 285 49-112 47 112Z" fill="#362d2b" />
            <path d="M111 173v112h47Z" fill="#bc8956" />
            <path
                d="M12 289h300m-274-44-28 62m268-45 45 44"
                stroke="#c49c71"
                strokeWidth="2"
            />
            <path
                d="M249 263q-53-15-63 9 6 22 54 9l-18 15q-39 10-62-11-5 35 47 45 49 8 71-27Z"
                fill="#bc7448"
                stroke="#683f30"
                strokeWidth="3"
            />
            <path d="M177 303q-7-14-17-18-4 23 22 35" fill="#dfc5a0" />
            <path
                d="m239 249-3-41 32 21 30-16-3 41q-21 41-56-5"
                fill="#c78855"
                stroke="#683f30"
                strokeWidth="2"
            />
            <path d="m241 248 27 11 25-12q-5 25-24 25t-28-24" fill="#e0c59c" />
            <path
                d="m249 242 9 2m19-2 9-2m-20 20h7"
                stroke="#47332c"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <g transform="translate(57 304)">
                <path d="M0 0v22m29-17v17" stroke="#d0b594" strokeWidth="6" />
                <path d="M-22 3q23-38 45 0Z" fill="#a75b47" />
                <path d="M14 9q16-28 31 0Z" fill="#bc805a" />
                <g fill="#d2ba92">
                    <circle cx="-6" cy="-8" r="3" />
                    <circle cx="8" cy="-7" r="3" />
                    <circle cx="30" cy="0" r="2" />
                </g>
            </g>
            <Leaf x={119} y={322} angle={70} color="#ad8045" />
            <Leaf x={321} y={308} angle={-45} color="#9d5b3f" />
        </svg>
        <svg
            className="scene-vignette-right absolute bottom-12 right-3 w-44 opacity-65 sm:bottom-20 sm:right-16 sm:w-56"
            viewBox="0 0 250 260"
        >
            <ellipse
                cx="112"
                cy="222"
                rx="91"
                ry="12"
                fill="#191921"
                opacity="0.35"
            />
            <path
                d="M177 119h22q53 37-3 69h-27"
                fill="none"
                stroke="#b18c70"
                strokeWidth="13"
            />
            <path d="M41 108h143l-12 83q-6 32-60 32t-60-32Z" fill="#b18c70" />
            <ellipse cx="113" cy="108" rx="71" ry="15" fill="#d0ae86" />
            <ellipse cx="113" cy="110" rx="59" ry="9" fill="#4b3029" />
            <path
                d="M90 82q-18-19 0-38t-2-29M127 84q22-17 1-37"
                fill="none"
                stroke="#d0ae86"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.4"
            />
            <path
                d="M90 151q10 11 20 0m14 0q10 11 20 0m-33 18q6 5 12 0"
                fill="none"
                stroke="#634839"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
        <svg
            className="absolute -right-5 top-[17%] w-36 opacity-75 sm:right-4 sm:w-44"
            viewBox="0 0 190 260"
        >
            <path
                d="M14 212h158M82 213V80m-45 0h90"
                stroke="#66503a"
                strokeWidth="8"
                strokeLinecap="round"
            />
            <path
                d="M37 64q-2-48 31-38 19-11 37 0 30-10 27 38l-7 73q-36 30-78-1Z"
                fill="#95734e"
                stroke="#553e31"
                strokeWidth="3"
            />
            <path d="m43 39 20-17 16 24m14-1 17-24 18 17" fill="#715338" />
            <circle cx="69" cy="72" r="23" fill="#cab088" />
            <circle cx="105" cy="72" r="23" fill="#cab088" />
            <path
                d="M58 73q11-8 21 0m15 0q11-8 21 0"
                stroke="#483d30"
                strokeWidth="3"
                fill="none"
            />
            <path d="m80 88 8 12 8-12" fill="#c2975d" />
            <path
                d="m58 113 9 5 9-5m6 14 9 5 9-5m2-14 9 5 9-5"
                fill="none"
                stroke="#c6a97d"
                strokeWidth="3"
            />
            <path d="M71 155v15m31-15v15" stroke="#c19960" strokeWidth="4" />
            <rect
                x="34"
                y="181"
                width="127"
                height="32"
                rx="3"
                fill="#9f7e52"
                transform="rotate(-5 96 197)"
            />
            <text
                x="96"
                y="202"
                textAnchor="middle"
                fontSize="12"
                fontFamily="monospace"
                fill="#352d28"
            >
                SLOW SEASON
            </text>
        </svg>
        <Ambient
            count={26}
            motion="fall"
            shape="petal"
            colors={['#ea580c', '#dc2626', '#f59e0b', '#a16207']}
            size={[12, 20]}
            duration={[11, 22]}
        />
    </div>
)

export const HalloweenScene = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
    >
        <svg
            className="scene-vignette-left absolute -left-8 bottom-5 w-64 sm:bottom-6 sm:left-0 sm:w-80"
            viewBox="0 0 350 430"
        >
            <path d="M0 409q154-51 350-2v23H0Z" fill="#211c2c" />
            <path
                d="M51 183h192l22 215H35Z"
                fill="#35263f"
                stroke="#72546c"
                strokeWidth="3"
            />
            <path
                d="m22 195 50-87 83 58 75-95 50 129-79-23-58 20-52-14Z"
                fill="#272134"
                stroke="#72546c"
                strokeWidth="3"
            />
            <path
                d="m46 150 32-26 27 28m87-28 34-29 14 39"
                fill="none"
                stroke="#a87871"
                opacity="0.5"
            />
            <path
                d="M98 155 84 62l57-14 17 121"
                fill="#483048"
                stroke="#795569"
                strokeWidth="3"
            />
            <path
                d="m67 69 35-60 48 42Z"
                fill="#292233"
                stroke="#795569"
                strokeWidth="3"
            />
            <path d="m99 76 25-6 4 31-25 4Z" fill="#d0a65b" />
            <path
                d="m111 75 5 28m-15-15 26-5"
                stroke="#473044"
                strokeWidth="3"
            />
            {[
                [66, 221],
                [181, 215],
                [58, 295],
                [198, 290],
            ].map(([x, y], i) => (
                <g
                    key={i}
                    transform={`translate(${x} ${y}) rotate(${i % 2 ? 6 : -6})`}
                >
                    <path
                        d="M0 38V10q16-26 32 0v28Z"
                        fill="#d5ad68"
                        stroke="#251c30"
                        strokeWidth="4"
                    />
                    <path
                        d="M16-2v40M0 15h32"
                        stroke="#483146"
                        strokeWidth="3"
                    />
                </g>
            ))}
            <path
                d="M113 397v-67q23-42 49 0v67Z"
                fill="#211e2c"
                stroke="#755065"
                strokeWidth="4"
            />
            <circle cx="151" cy="357" r="3" fill="#c8a364" />
            <path d="M105 405h68l23 19H79Z" fill="#594052" />
            <path
                d="M273 408V264m0 33 37-49m-39 86-24-24m27-43-17-36m53 17 3-28m-7 35 23-5"
                stroke="#503544"
                fill="none"
                strokeWidth="7"
                strokeLinecap="round"
            />
            <g transform="translate(274 369)">
                <path
                    d="M-17 0q-6-30 6-37l9 9 10-10q14 10 11 38Z"
                    fill="#1c1b28"
                />
                <path
                    d="M14-3q36-1 24-24"
                    fill="none"
                    stroke="#1c1b28"
                    strokeWidth="7"
                />
                <path
                    d="m-10-20 7 2m8 0 7-2"
                    stroke="#dcc77c"
                    strokeWidth="3"
                />
            </g>
        </svg>
        <svg
            className="absolute -right-5 top-[13%] w-52 opacity-55 sm:right-3 sm:w-64"
            viewBox="0 0 250 250"
        >
            <circle cx="140" cy="110" r="90" fill="#c49465" opacity="0.1" />
            <circle cx="140" cy="110" r="61" fill="#d3b981" opacity="0.5" />
            <g fill="#261d34">
                <path d="M53 99Q23 65 8 78L19 109L40 113L54 131L68 113L90 108L99 77Q81 67 53 99Z" />
                <path d="M162 62Q143 44 137 51L143 71L157 72L164 83L173 71L188 68L191 49Q178 45 162 62Z" />
            </g>
        </svg>
        <svg
            className="absolute -left-10 top-[33%] w-40 opacity-40 sm:left-4 sm:w-48"
            viewBox="0 0 200 240"
        >
            <path
                d="M30 192V84Q30 17 99 17T169 84V199l-27-21-23 28-26-21-29 20-19-26Z"
                fill="#d3c7db"
            />
            <ellipse cx="77" cy="88" rx="8" ry="13" fill="#382743" />
            <ellipse cx="124" cy="88" rx="8" ry="13" fill="#382743" />
            <ellipse cx="101" cy="124" rx="11" ry="15" fill="#382743" />
        </svg>
        <svg
            className="absolute -right-8 bottom-12 w-64 opacity-75 sm:bottom-20 sm:right-9 sm:w-80"
            viewBox="0 0 350 260"
        >
            <path d="m181 55-7-32 19-11 11 9-6 37" fill="#697248" />
            <ellipse cx="128" cy="146" rx="76" ry="91" fill="#9c4f32" />
            <ellipse cx="229" cy="146" rx="73" ry="91" fill="#9c4f32" />
            <ellipse cx="180" cy="147" rx="73" ry="96" fill="#bf713e" />
            <path
                d="m117 130 32-35 20 35m32 0 23-35 28 35m-125 30 30 11 10-13 17 20 19-14 11 11 26-12q-19 45-54 40t-59-43"
                fill="#e9b86b"
            />
            <path
                d="m99 213-24-19-20 18-25-22-17 38q52 29 91 9"
                fill="#554e37"
            />
        </svg>
        <svg
            className="absolute left-0 top-0 w-32 opacity-15"
            viewBox="0 0 160 160"
            fill="none"
            stroke="#d6c8dc"
            strokeWidth="1.5"
        >
            <path d="M0 0 151 141M0 0 149 46M0 0 44 151M0 45q17-4 31-17 0 18 14 33M0 85q31-8 57-31 2 31 28 55M0 129q47-13 85-44 5 47 45 79M45 0q-4 17-17 31 18 0 33 14M85 0q-8 31-31 57 31 2 55 28M129 0q-13 47-44 85 47 5 79 45" />
        </svg>
        <svg
            className="scene-vignette-right absolute -right-7 bottom-4 w-52 sm:right-4 sm:w-72"
            viewBox="0 0 310 300"
        >
            <ellipse
                cx="164"
                cy="263"
                rx="113"
                ry="14"
                fill="#1e1929"
                opacity="0.7"
            />
            <path
                d="m93 249 135-3m-125 19 126-28"
                stroke="#79513c"
                strokeWidth="11"
                strokeLinecap="round"
            />
            <path
                d="M112 253q-24-26 1-58 0 23 19 33 14-16 16-42 34 13 44 44 14-4 25-25 26 33 0 50"
                fill="#c48347"
            />
            <path
                d="M91 130q-48 115 63 118 127 2 80-118Z"
                fill="#313d3d"
                stroke="#627265"
                strokeWidth="3"
            />
            <ellipse
                cx="162"
                cy="130"
                rx="76"
                ry="18"
                fill="#8aa376"
                stroke="#506857"
                strokeWidth="4"
            />
            <path
                d="M102 135q1 37 13 25l4-23m34 7q-3 50 9 45 13-2 11-45"
                fill="#8aa376"
            />
            <path
                d="m92 147-21 1q-20 18 10 35m154-38 18 2q19 21-12 33"
                fill="none"
                stroke="#627265"
                strokeWidth="6"
            />
            <path
                d="M137 204q24-10 45 0"
                fill="none"
                stroke="#819282"
                strokeWidth="2"
                opacity="0.5"
            />
            <g fill="#a5b883" fillOpacity="0.4" stroke="#b6c58a">
                <circle cx="128" cy="96" r="11" />
                <circle cx="180" cy="71" r="15" />
                <circle cx="147" cy="37" r="8" />
                <circle cx="205" cy="112" r="7" />
            </g>
            <path
                d="M166 23q-8-10-2-19m29 44q-8-13 3-21"
                fill="none"
                stroke="#9daa7f"
                strokeWidth="3"
                opacity="0.4"
            />
            <path d="m22 239 19-51 20 54Z" fill="#e5c18b" />
            <path d="m27 225 27 1-13-38Z" fill="#d88e48" />
            <path d="m34 207 14 1-7-20Z" fill="#ded0ad" />
            <text
                x="162"
                y="291"
                textAnchor="middle"
                fill="#a48c9b"
                fontSize="12"
                fontFamily="monospace"
                letterSpacing="2"
            >
                LOCALLY SOURCED SPELLS
            </text>
        </svg>
        <Ambient
            count={22}
            motion="float"
            shape="glow"
            colors={['#bef264', '#fb923c', '#c4b5fd']}
            size={[4, 7]}
            duration={[5, 10]}
        />
    </div>
)

const Firework = ({ x, y, color }: { x: number; y: number; color: string }) => (
    <g transform={`translate(${x} ${y})`} stroke={color} strokeLinecap="round">
        {Array.from({ length: 12 }, (_, index) => (
            <g key={index} transform={`rotate(${index * 30})`}>
                <path d="M0-29V-67M0-80v-5" strokeWidth="2.5" />
                <circle cy="-98" r="2" fill={color} stroke="none" />
            </g>
        ))}
        <circle r="5" fill={color} stroke="none" />
    </g>
)

export const NewYearScene = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
    >
        <svg
            className="absolute inset-x-0 top-0 h-12 w-full opacity-75"
            viewBox="0 0 1440 170"
            preserveAspectRatio="none"
        >
            <path
                d="M0 12q350 133 720 0 358 130 720 0"
                stroke="#8c7960"
                strokeWidth="2"
                fill="none"
            />
            {Array.from({ length: 25 }, (_, i) => {
                const x = i * 60
                const y = 12 + 66 * Math.sin(((x % 720) / 720) * Math.PI)
                return (
                    <g key={i} transform={`translate(${x} ${y})`}>
                        <path d="M0 0v9" stroke="#978467" />
                        <circle
                            cy="15"
                            r="5"
                            fill={i % 3 ? '#d2b97b' : '#b7c3b7'}
                        />
                        <circle cy="15" r="12" fill="#e2b66a" opacity="0.08" />
                    </g>
                )
            })}
            <path
                d="M0 34q350 135 720 0 358 135 720 0"
                stroke="#c1ab77"
                strokeWidth="1"
                fill="none"
                strokeDasharray="3 7"
            />
        </svg>
        <svg
            className="absolute -right-12 top-[10%] w-72 opacity-50 sm:right-2 sm:w-96"
            viewBox="0 0 400 440"
        >
            <Firework x={210} y={119} color="#d9bb77" />
            <Firework x={90} y={325} color="#9e8ab2" />
        </svg>
        <svg
            className="absolute -left-14 top-[28%] w-56 opacity-45 sm:left-1 sm:w-72"
            viewBox="0 0 300 300"
        >
            <Firework x={140} y={130} color="#a3bdb7" />
        </svg>
        <svg
            className="absolute inset-0 h-full w-full opacity-30"
            viewBox="0 0 1440 1000"
            preserveAspectRatio="none"
        >
            {Array.from({ length: 36 }, (_, index) => (
                <rect
                    key={index}
                    x={(index * 239 + 55) % 1440}
                    y={(index * 173 + 32) % 1000}
                    width="4"
                    height="10"
                    rx="1"
                    fill={['#d5b87a', '#a8bebb', '#aa96bd'][index % 3]}
                    transform={`rotate(${index * 27} ${(index * 239 + 55) % 1440} ${(index * 173 + 32) % 1000})`}
                />
            ))}
        </svg>
        <svg
            className="scene-vignette-right absolute bottom-10 right-0 w-52 opacity-60 sm:bottom-20 sm:right-12 sm:w-64"
            viewBox="0 0 280 270"
        >
            <g
                transform="rotate(-15 96 132)"
                stroke="#c4ad7a"
                strokeWidth="4"
                strokeLinejoin="round"
            >
                <path
                    d="M64 36h64v77q0 40-32 40t-32-40Zm32 117v69m-29 0h58"
                    fill="none"
                />
                <path
                    d="M71 85h50v29q0 30-25 30t-25-30Z"
                    fill="#b89952"
                    opacity="0.45"
                    stroke="none"
                />
                <circle cx="90" cy="109" r="3" fill="#dec98d" stroke="none" />
                <circle cx="104" cy="125" r="2" fill="#dec98d" stroke="none" />
            </g>
            <g
                transform="rotate(15 180 132)"
                stroke="#c4ad7a"
                strokeWidth="4"
                strokeLinejoin="round"
            >
                <path
                    d="M148 36h64v77q0 40-32 40t-32-40Zm32 117v69m-29 0h58"
                    fill="none"
                />
                <path
                    d="M155 85h50v29q0 30-25 30t-25-30Z"
                    fill="#b89952"
                    opacity="0.45"
                    stroke="none"
                />
            </g>
            <path
                d="m124 26 9-13m10 12 14-9m-32 26-18-3"
                fill="none"
                stroke="#dec98d"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
        <svg
            className="scene-vignette-left absolute -left-4 bottom-4 w-60 sm:bottom-6 sm:left-5 sm:w-80"
            viewBox="0 0 340 380"
        >
            <ellipse
                cx="173"
                cy="346"
                rx="146"
                ry="15"
                fill="#181a26"
                opacity="0.5"
            />
            <g stroke="#b59d6f" strokeWidth="4" fill="none">
                <path d="M40 158v166h244V158M40 215h244M40 313h244m-11-155v-25h-31" />
                <circle cx="61" cy="340" r="11" />
                <circle cx="264" cy="340" r="11" />
            </g>
            <path d="M37 206h250v13H37Zm0 101h250v13H37Z" fill="#705d48" />
            <path
                d="M70 142V90h18v52q20 12 20 31v29H50v-29q0-19 20-31"
                fill="#405b50"
                stroke="#8d9a75"
                strokeWidth="2"
            />
            <path d="M70 90h18v40H70Z" fill="#c5ab72" />
            <rect x="56" y="162" width="46" height="27" rx="2" fill="#d2c09b" />
            <text
                x="79"
                y="180"
                textAnchor="middle"
                fontFamily="monospace"
                fontSize="11"
                fill="#465348"
            >
                POP!
            </text>
            <g transform="translate(145 140)">
                <path
                    d="M-17 0h34v23q0 20-17 20t-17-20Zm0 43v18m-13 0h26"
                    stroke="#c2b99f"
                    fill="none"
                    strokeWidth="3"
                />
                <path
                    d="M-13 17h26v8q0 14-13 14t-13-14Z"
                    fill="#aa905a"
                    opacity="0.7"
                />
            </g>
            <path d="m209 199 18-67 35 67Z" fill="#b49872" />
            <path
                d="m215 179 34-4m-30-12 22-3"
                stroke="#7d6385"
                strokeWidth="7"
            />
            <circle cx="227" cy="132" r="6" fill="#d2be8c" />
            <rect x="70" y="240" width="85" height="12" rx="2" fill="#927a69" />
            <rect x="76" y="252" width="87" height="12" rx="2" fill="#687b79" />
            <rect x="65" y="264" width="98" height="12" rx="2" fill="#ba9b72" />
            <ellipse cx="221" cy="283" rx="34" ry="23" fill="#a29a83" />
            <path d="m201 266-6-22 18 11 15-10 6 25" fill="#a29a83" />
            <path
                d="m202 270 8 2m11-1 8-2m-43 16q-29 20-5 21"
                stroke="#544c49"
                strokeWidth="3"
                fill="none"
            />
            <rect
                x="74"
                y="22"
                width="178"
                height="47"
                rx="4"
                fill="#33353f"
                stroke="#ac9364"
                strokeWidth="2"
            />
            <text
                x="163"
                y="43"
                textAnchor="middle"
                fill="#d5c293"
                fontFamily="Georgia, serif"
                fontSize="14"
            >
                NEW YEAR.
            </text>
            <text
                x="163"
                y="59"
                textAnchor="middle"
                fill="#d5c293"
                fontFamily="Georgia, serif"
                fontSize="14"
            >
                SAME FIVE LETTERS.
            </text>
            <path
                d="m87 69-7 20m162-20 5 25"
                stroke="#a58f68"
                strokeWidth="2"
            />
        </svg>
        <svg
            className="absolute -right-8 top-[22%] w-40 opacity-75 sm:right-5 sm:w-52"
            viewBox="0 0 220 310"
        >
            <path
                d="M62 130q-19 47 5 101t-9 67m94-178q30 44 7 96t11 77"
                fill="none"
                stroke="#ad9a7f"
                strokeWidth="1.5"
            />
            <ellipse cx="65" cy="84" rx="44" ry="60" fill="#bb9c64" />
            <path
                d="M36 66q-2-24 14-32"
                fill="none"
                stroke="#e1d0a0"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.55"
            />
            <path d="m64 143-6 9h13Z" fill="#bb9c64" />
            <ellipse cx="150" cy="79" rx="42" ry="58" fill="#8c7899" />
            <path
                d="M126 64q0-24 12-29"
                fill="none"
                stroke="#c6b4ce"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.55"
            />
            <path d="m150 136-6 9h13Z" fill="#8c7899" />
            <g transform="translate(120 208)">
                <circle
                    r="42"
                    fill="#303440"
                    stroke="#b8a476"
                    strokeWidth="4"
                />
                <circle
                    r="34"
                    fill="none"
                    stroke="#8d8067"
                    strokeDasharray="1 16.8"
                    strokeWidth="3"
                />
                <path
                    d="M0-28V0l-5-24"
                    stroke="#d1bc8d"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                />
                <circle r="3" fill="#d1bc8d" />
            </g>
        </svg>
        <Ambient
            count={44}
            motion="fall"
            shape="confetti"
            colors={['#fcd34d', '#f472b6', '#5eead4', '#fef3c7', '#a78bfa']}
            size={[7, 11]}
            duration={[9, 18]}
        />
        <Ambient
            count={12}
            motion="float"
            glyphs={['✦']}
            colors={['#fde68a']}
            size={[8, 14]}
            duration={[3, 7]}
        />
    </div>
)
