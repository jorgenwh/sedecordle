/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                game: {
                    canvas: '#080b0f',
                    surface: '#151c24',
                    tile: '#374151',
                    line: '#465365',
                    muted: '#b0bccb',
                    text: '#f3f4f6',
                    accent: '#86efac',
                    correct: '#16a34a',
                    present: '#ca8a04',
                    'correct-fill': '#117a38',
                    'present-fill': '#986803',
                    absent: '#1f2937',
                },
            },
        },
    },
    plugins: [],
}
