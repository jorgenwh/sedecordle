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
        </svg>
        <Palm className="absolute -left-16 top-[22%] w-40 opacity-65 sm:-left-10 sm:w-52" />
        <Palm className="absolute -right-20 bottom-16 w-40 -scale-x-100 opacity-50 sm:-right-10 sm:w-48" />
        <svg
            className="absolute bottom-12 left-5 w-28 opacity-70 sm:bottom-20 sm:left-16 sm:w-40"
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
    </div>
)
