# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview
Sedecordle is a word-guessing game where players solve 16 independent 5-letter word puzzles simultaneously using only 21 total guesses. Each guess applies to all 16 boards at once, with independent color-coded feedback per board.

## Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore (direct client access, no backend)
- **Deployment**: Firebase Hosting via GitHub Actions

## Development Commands

```bash
npm install           # Install dependencies
npm run dev           # Start dev server (http://localhost:5173)
npm run build         # Production build (includes TypeScript check)
npm run preview       # Preview production build
npm run format        # Format code with Prettier
npm run format:check  # Check formatting (used in CI)
npm run lint          # Lint with ESLint
npm run lint:fix      # Fix ESLint issues
npm run deploy        # Build and deploy to Firebase
./run-checks.sh       # Run all quality checks (format, lint, build) - mirrors CI
```

There is no test framework configured. The quality gate is `./run-checks.sh` (format + lint + build).

## Core Architecture

### Game State (`src/hooks/use-game.ts`)
The `useGame` hook is the central game engine. It manages target words, guesses (max 21), solved boards (Set of indices), game status (`'playing' | 'won' | 'lost'`), and timing for the leaderboard. All word comparisons happen in **UPPERCASE** internally.

### Input Handling (`src/hooks/use-keyboard-handler.ts`)
`useKeyboardHandler` handles both physical keyboard events (via `keydown` listener) and virtual keyboard clicks. It returns a `handleKeyPress` callback that the on-screen `Keyboard` component also uses, so both input paths funnel through the same handler.

### Letter Status Tracking
Two-tier system for keyboard color indication:
1. **Overall status** (`usedLetters` Map): Best status across all unsolved boards (`correct` > `present` > `absent`)
2. **Per-board status** (`letterBoardStatus` Map): Each letter tracks its status on each individual board, enabling detailed keyboard tooltips

### Word System (`src/utils/words.ts`)
- Word files are loaded via Vite's `?raw` import suffix (e.g., `import laWordsRaw from '../data/wordle_words_la.txt?raw'`)
- **Answer words** (`wordle_words_la.txt`): ~2300 common words used as targets
- **Valid guesses** (`wordle_words_la.txt` + `wordle_words_ta.txt` + `horny_words.txt`): ~12000+ total valid words
- Words are lazily initialized on first access via `initializeWords()`

### Horny Mode
Optional toggle that replaces one random board's target word with a word from `horny_words.txt`. Toggling restarts the game. The `hornyBoardIndex` in `GameState` tracks which board (if any) has the special word.

### Leaderboard (`src/services/leaderboard.ts`)
- Firebase Firestore collection: `leaderboard`
- Two ranking modes: by fewest guesses (`getTopScoresByGuesses`) and by fastest time (`getTopScoresBySpeed`)
- Time period filtering (overall/today/week/month/year): overall uses Firestore-side sorting; filtered periods fetch up to 100 recent entries and sort in memory
- Only wins trigger the save-score prompt

### App Composition (`src/app.tsx`)
`App` wires `useGame` and `useKeyboardHandler` together, manages modal state (leaderboard, save-score), and handles the win-triggered save prompt via `hasPromptedSave` flag.

## Code Style Guidelines

### Formatting & Structure
- **Indentation**: 4 spaces (enforced by Prettier)
- **Empty lines**: No indentation on blank lines
- **Quotes**: Single quotes
- **Semicolons**: Never use semicolons
- **Trailing commas**: Always use trailing commas
- **File naming**: Lowercase with dashes (`game-board.tsx`, not `GameBoard.tsx`)

### TypeScript & React
- **Functions**: Always use arrow functions: `const myFunc = () => {}`
- **React components**: Export directly, avoid `React.FC` boilerplate
- **Type definitions**: Define in `src/types/` directory
- **Strict mode**: Enabled with strict TypeScript checks

### Code Quality Principles
- Follow existing patterns in the codebase
- No dead code or unused "future" features
- Before adding code: check if similar functionality exists

## Environment Variables

Copy `.env.example` to `.env` and fill in Firebase config values. The same variables are configured as GitHub Actions secrets (prefixed with `VITE_FIREBASE_`). Deployment also requires a `FIREBASE_SERVICE_ACCOUNT` secret.

## CI/CD

### Branch Protection (`main` branch)
- Direct pushes disabled; pull requests required
- Required status checks: format, lint, build

### GitHub Actions Workflows
- **PR Checks** (`.github/workflows/pr-checks.yml`): Runs format, lint, build on all PRs to `main`
- **Deploy** (`.github/workflows/deploy.yml`): On push to `main`, runs checks then deploys to Firebase Hosting

## Git Guidelines

- Only create commits when the user explicitly requests it
- Never use destructive commands (`push --force`, `reset --hard`) without explicit approval
- Interactive git commands (`-i` flag) are not supported
