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
        <div className="fine-floor absolute inset-x-0 bottom-0 h-[24%] border-t-8 border-[#573b2a] bg-[#39271f]/60" />
        <svg
            className="absolute -right-4 top-[16%] w-48 opacity-70 sm:right-4 sm:w-56"
            viewBox="0 0 240 280"
        >
            <rect
                x="25"
                y="22"
                width="185"
                height="225"
                rx="3"
                fill="#6f5038"
                stroke="#b8925e"
                strokeWidth="4"
            />
            <rect x="36" y="34" width="162" height="198" fill="#352932" />
            <path
                d="M39 187q4-86 38-77-9 40 20 51 33-32 21-103 73 38 63 130v43H39Z"
                fill="#a65131"
            />
            <path
                d="M80 232q-32-63 15-92-11 39 24 52 31-39 26-77 40 68 25 117"
                fill="#df9852"
            />
            <path d="M117 34v198M36 130h162" stroke="#9a784f" strokeWidth="8" />
            <path
                d="M14 30q26 122-2 208l55-4Q31 135 68 30m110 0q42 106 1 204l49 4q-26-97-6-208"
                fill="#824a40"
            />
            <path
                d="M27 38q16 65-2 142m176-142q-14 66 6 141"
                stroke="#ae7360"
                strokeWidth="3"
                fill="none"
            />
        </svg>
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
            className="scene-vignette-right absolute -right-14 bottom-72 w-44 opacity-80 sm:-right-4 sm:w-52 xl:right-0"
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
        <svg
            className="scene-vignette-left absolute -left-4 bottom-5 w-60 sm:bottom-7 sm:left-3 sm:w-80"
            viewBox="0 -35 340 395"
        >
            <ellipse
                cx="165"
                cy="324"
                rx="159"
                ry="23"
                fill="#713b30"
                stroke="#9e6b49"
                strokeWidth="4"
            />
            <ellipse
                cx="165"
                cy="324"
                rx="133"
                ry="14"
                fill="none"
                stroke="#bc8758"
                strokeWidth="2"
                strokeDasharray="5 5"
            />
            <path
                d="M46 35h162v216H46Z"
                fill="#4a3026"
                stroke="#8b6340"
                strokeWidth="5"
            />
            <path
                d="M48 109h158m-158 70h158m-147 20h139"
                stroke="#8b6340"
                strokeWidth="6"
            />
            {[0, 1, 2, 3, 4, 5].map((i) => (
                <g key={i}>
                    <rect
                        x={60 + i * 22}
                        y={50 + (i % 2) * 7}
                        width="15"
                        height={54 - (i % 2) * 7}
                        rx="2"
                        fill={['#8b6a4a', '#68704b', '#934b3b'][i % 3]}
                    />
                    <path
                        d={`M${63 + i * 22} 63h9m-9 26h9`}
                        stroke="#d0af76"
                        strokeWidth="2"
                    />
                </g>
            ))}
            <g transform="translate(61 140)">
                <rect width="122" height="27" rx="2" fill="#a37f50" />
                <text
                    x="61"
                    y="18"
                    textAnchor="middle"
                    fontSize="12"
                    fontFamily="monospace"
                    fill="#33291f"
                >
                    DON'T PANIC
                </text>
            </g>
            <path
                d="M185 42q-26-23-11-51 5 24 24 23 1-28 21-43 0 32 17 52Z"
                fill="#c9773c"
            />
            <path d="M197 42q-14-16 2-31 3 14 15 18l-4 13" fill="#efb762" />
            <path d="M98 275v43m124-43v43" stroke="#b28452" strokeWidth="8" />
            <ellipse
                cx="160"
                cy="270"
                rx="90"
                ry="20"
                fill="#b78a55"
                stroke="#53382a"
                strokeWidth="3"
            />
            <ellipse cx="160" cy="266" rx="80" ry="12" fill="#c49b65" />
            <rect
                x="114"
                y="244"
                width="70"
                height="17"
                rx="3"
                fill="#cfba8c"
                transform="rotate(-8 114 244)"
            />
            <path
                d="m125 243 42-6m-41 12 40-6"
                stroke="#785f43"
                strokeWidth="2"
            />
            <path
                d="M216 235v-24q0-13 14-13t14 13v24Z"
                fill="#cab18a"
                stroke="#725237"
                strokeWidth="2"
            />
            <circle
                cx="230"
                cy="233"
                r="16"
                fill="#cb9768"
                stroke="#725237"
                strokeWidth="2"
            />
            <path
                d="m230 223 2 11 6 3"
                stroke="#6a442f"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M268 206h29v83h-29Z"
                fill="#a34c38"
                stroke="#c37b59"
                strokeWidth="2"
            />
            <path
                d="m277 206 1-11h15m-15 13q-19-12-26 9"
                fill="none"
                stroke="#bca78a"
                strokeWidth="4"
            />
            <text
                x="282"
                y="246"
                textAnchor="middle"
                fontFamily="monospace"
                fontSize="8"
                fill="#ead6b2"
            >
                LATER
            </text>
        </svg>
        <svg
            className="absolute left-2 top-[22%] w-16 opacity-60 sm:left-[3%] sm:top-5 sm:w-24"
            viewBox="0 0 120 100"
        >
            <circle
                cx="60"
                cy="50"
                r="37"
                fill="#51382d"
                stroke="#b88d58"
                strokeWidth="4"
            />
            <circle cx="60" cy="50" r="30" fill="#ceb68a" />
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                <path
                    key={i}
                    d="M60 24v4"
                    transform={`rotate(${i * 30} 60 50)`}
                    stroke="#66462e"
                    strokeWidth="2"
                />
            ))}
            <path
                d="M60 29v21l13 10"
                fill="none"
                stroke="#66462e"
                strokeWidth="3"
            />
            <circle cx="60" cy="50" r="3" fill="#66462e" />
        </svg>
    </div>
)
