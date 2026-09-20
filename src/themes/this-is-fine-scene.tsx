const Flames = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 220 300">
        <path
            d="M30 300Q-8 259 24 212Q11 259 56 240Q29 161 96 98Q80 157 119 183Q170 130 143 22Q232 130 192 205Q237 177 210 272L189 300Z"
            fill="#c65b2c"
        />
        <path
            d="M58 300q-31-33-3-61q-7 35 27 15q-12-65 23-96q-2 47 29 65q27-17 35-51q41 84 6 128Z"
            fill="#e58c3d"
        />
        <path
            d="M99 300q-30-28 3-67q0 28 23 35q16-8 16-21q30 38 5 53Z"
            fill="#f1bd68"
        />
    </svg>
)

export const ThisIsFineScene = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
    >
        <div className="absolute inset-x-0 bottom-0 h-[24%] border-t-8 border-[#573b2a] bg-[#39271f]/60" />
        <svg
            className="absolute -left-6 top-[16%] w-36 opacity-40 sm:left-5"
            viewBox="0 0 160 200"
        >
            <rect x="8" y="8" width="144" height="180" rx="3" fill="#68462e" />
            <rect
                x="18"
                y="18"
                width="124"
                height="160"
                fill="#2c201c"
                stroke="#b38d56"
                strokeWidth="2"
            />
            <path d="M32 47h96M32 152h96" stroke="#b38d56" strokeWidth="1" />
            <text
                x="80"
                y="79"
                textAnchor="middle"
                fill="#d7b88a"
                fontFamily="Georgia, serif"
                fontSize="22"
            >
                THIS
            </text>
            <text
                x="80"
                y="108"
                textAnchor="middle"
                fill="#d7b88a"
                fontFamily="Georgia, serif"
                fontSize="19"
            >
                IS
            </text>
            <text
                x="80"
                y="138"
                textAnchor="middle"
                fill="#d7b88a"
                fontFamily="Georgia, serif"
                fontSize="22"
            >
                FINE.
            </text>
        </svg>
        <div className="fire-glow absolute inset-0">
            <Flames className="absolute -left-14 bottom-8 w-48 sm:-left-5 sm:w-60" />
            <Flames className="absolute -right-14 bottom-10 w-52 -scale-x-100 sm:-right-2 sm:w-64" />
            <Flames className="absolute -right-12 top-[17%] w-32 opacity-30 sm:w-40" />
        </div>
        <svg
            className="absolute -right-14 bottom-72 w-44 opacity-80 sm:-right-4 sm:w-52 xl:right-0"
            viewBox="0 0 240 290"
            fill="none"
            stroke="#37251d"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse
                cx="123"
                cy="274"
                rx="94"
                ry="9"
                fill="#201612"
                opacity="0.5"
                stroke="none"
            />
            <path
                d="m64 231-5 44m116-44 6 44"
                stroke="#a6754a"
                strokeWidth="8"
            />
            <rect
                x="37"
                y="132"
                width="159"
                height="116"
                rx="23"
                fill="#725039"
            />
            <path d="M82 150q-29 28-24 78h112q8-49-31-78" fill="#bd915f" />
            <path
                d="m79 217-8 41q15 12 31-1l10-28m22-7 17 34q18 7 25-7l-13-35"
                fill="#cda373"
            />
            <path
                d="M82 170q-20 32 10 36l38-8"
                stroke="#d9b47f"
                strokeWidth="17"
            />
            <path d="M149 173q23 25-10 25" stroke="#d9b47f" strokeWidth="16" />
            <path
                d="M66 75q-8-49 44-49q69-5 62 72q20 8 19 28q-6 30-57 26q-61 7-67-40Z"
                fill="#d9b47f"
            />
            <path d="M75 47Q32 38 43 115q21 14 32-19Z" fill="#977144" />
            <path d="M157 45q29 10 18 62l-19-10Z" fill="#977144" />
            <path d="M90 88h21m24 0h19" strokeWidth="4" />
            <path d="M101 89v7m44-7v7" strokeWidth="4" />
            <ellipse cx="171" cy="114" rx="11" ry="7" fill="#37251d" />
            <path d="M166 123q-16 13-32 3" />
            <path d="M128 180h35v25q-17 13-35 0Z" fill="#ece0c7" />
            <path
                d="M163 184q21-4 14 12q-4 7-14 4"
                stroke="#ece0c7"
                strokeWidth="5"
            />
            <path
                d="M139 173q-7-7 0-14m12 12q-7-7 0-14"
                stroke="#d7b88a"
                strokeWidth="2"
                opacity="0.5"
            />
            <path d="M130 192h28" stroke="#b38a63" strokeWidth="2" />
        </svg>
        <svg
            className="absolute bottom-24 left-[15%] w-16 -rotate-12 opacity-55 sm:left-[20%]"
            viewBox="0 0 80 100"
            fill="none"
            stroke="#d7b88a"
            strokeWidth="2"
        >
            <path d="M15 10h48v78H15Z" fill="#55382a" />
            <path d="m26 30 6 6 13-14m-19 29 6 6 13-14m-19 29 6 6 13-14" />
            <path d="M51 32h5m-5 20h5m-5 20h5" />
        </svg>
    </div>
)
