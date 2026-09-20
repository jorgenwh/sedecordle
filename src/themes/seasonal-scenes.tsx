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
            className="absolute bottom-12 right-3 w-44 opacity-65 sm:bottom-20 sm:right-16 sm:w-56"
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
    </div>
)

export const HalloweenScene = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
    >
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
            className="absolute bottom-10 right-0 w-52 opacity-60 sm:bottom-20 sm:right-12 sm:w-64"
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
    </div>
)
