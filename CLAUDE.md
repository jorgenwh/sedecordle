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
./run-checks.sh       # Run all quality checks (format, lint, build)
```

## Project Structure

```
src/
├── components/       # React components (game boards, keyboard, modals)
├── hooks/            # Custom React hooks (use-game.ts is the core game engine)
├── services/         # Firebase Firestore operations
├── utils/            # Word validation and selection
├── types/            # TypeScript type definitions
├── data/             # Word lists (LA = answers, TA = additional valid guesses)
├── config/           # Firebase initialization
├── app.tsx           # Main app component
└── main.tsx          # React entry point
```

## Core Architecture

### Game State Management (`src/hooks/use-game.ts`)
The `useGame` hook is the central game engine managing:
- **Target words**: 16 random 5-letter words selected from `wordle_words_la.txt`
- **Guesses**: Array of all submitted guesses (max 21)
- **Current guess**: The word being typed (max 5 letters)
- **Solved boards**: Set of board indices that have been solved
- **Game status**: 'playing' | 'won' | 'lost'
- **Timing**: Start and end timestamps for leaderboard

### Letter Status Tracking
Two-tier system for keyboard color indication:
1. **Overall letter status** (`usedLetters` Map):
   - `correct` (green): Letter is in correct position on at least one unsolved board
   - `present` (yellow): Letter exists in at least one unsolved board but wrong position
   - `absent` (gray): Letter not in any unsolved board

2. **Board-specific status** (`letterBoardStatus` Map):
   - Each letter tracks its status per board
   - Used to show which boards have each letter correct/present/absent
   - Enables per-board color indication in keyboard

### Word Validation System
- **Answer words** (`wordle_words_la.txt`): ~2300 common 5-letter words used as target answers
- **Valid guesses** (`wordle_words_la.txt` + `wordle_words_ta.txt`): ~12000 total valid words
- Players can guess any valid word, but only LA words are selected as targets

### Firebase Integration
- **Firestore collection**: `leaderboard`
- **Client-side only**: No backend, direct Firestore access from browser
- **Security rules**: Allow read/create, deny update/delete
- **Score sorting**: Primary by attempts (asc), secondary by time (asc)

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

### Local Development
1. Copy `.env.example` to `.env`
2. Add Firebase config values (from Firebase Console → Project Settings → Web App)
3. `.env` is gitignored - never commit

### GitHub Actions (Required Secrets)
Firebase configuration:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

Deployment:
- `FIREBASE_SERVICE_ACCOUNT` (JSON from Firebase Console → Project Settings → Service Accounts)

## CI/CD

### Branch Protection (`main` branch)
- Direct pushes disabled
- Pull requests required
- Required status checks: format, lint, build

### GitHub Actions Workflows
**PR Checks** (`.github/workflows/pr-checks.yml`):
- Runs on all PRs to `main`
- Validates: formatting, linting, build

**Deploy** (`.github/workflows/deploy.yml`):
- Runs on push to `main`
- Two jobs: checks (quality gates) → deploy (Firebase Hosting)

## Git Guidelines

- Only create commits when the user explicitly requests it
- Never use destructive commands (`push --force`, `reset --hard`) without explicit approval
- Interactive git commands (`-i` flag) are not supported
