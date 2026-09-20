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
                    canvas: 'rgb(var(--game-canvas) / <alpha-value>)',
                    surface: 'rgb(var(--game-surface) / <alpha-value>)',
                    tile: 'rgb(var(--game-tile) / <alpha-value>)',
                    line: 'rgb(var(--game-line) / <alpha-value>)',
                    muted: 'rgb(var(--game-muted) / <alpha-value>)',
                    text: 'rgb(var(--game-text) / <alpha-value>)',
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
