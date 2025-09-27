# Sedecordle - Project Documentation

## Overview
Sedecordle is a word-guessing game inspired by Wordle, where players must solve 16 independent 5-letter word puzzles simultaneously using only 21 total guesses. Each guess is applied to all 16 boards at once, providing feedback for each board independently.

## Game Rules
- **Objective**: Guess all 16 different 5-letter words within 21 attempts
- **Gameplay**:
  - Each guess is a valid 5-letter word
  - The same guess is applied to all 16 boards simultaneously
  - Each board provides independent color-coded feedback:
    - 🟩 Green: Correct letter in correct position
    - 🟨 Yellow: Correct letter in wrong position
    - ⬜ Gray: Letter not in the word
- **Constraints**:
  - All 16 target words must be unique (no duplicates)
  - Players have exactly 21 guesses to solve all boards
  - Win condition: All 16 words correctly guessed
  - Loss condition: 21 guesses used without solving all words
- **Timing**: Games are timed from first guess to completion for leaderboard ranking

## User Interface Requirements
- **Layout**: 4x4 grid of Wordle boards (16 total)
- **Each Board**:
  - 21 rows × 5 columns for letter input
  - Visual indication when a board is solved (shows "G" or similar marker)
- **Interactive Keyboard**:
  - QWERTY layout at the bottom of the interface
  - Enter and Backspace functionality
- **Visual Feedback**:
  - Color-coded letters based on correctness (green/yellow/gray)
- **Timer**: Display elapsed time from first guess to completion
- **Leaderboard**: Separate view showing top scores (sorted by fewest attempts, then fastest time)
- **Score Saving**: Modal for players to enter their name after winning

## Technology Stack

### Frontend
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Hosting**: Firebase Hosting

### Backend (Serverless)
- **Database**: Firebase Firestore (direct client access)
- **Authentication**: None (anonymous play)
- **Architecture**: Client-side only, no server/backend needed

## Project Structure

```
sedecordle/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── firebase.json
├── firestore.rules
└── CLAUDE.md
```

## Firebase Configuration

### Firestore Data Structure

```typescript
// Collection: scores
{
  id: auto-generated,
  playerName: string,
  attempts: number,        // 1-21
  timeSeconds: number,     // Time in seconds to complete
  completedAt: timestamp,
  boards: number[]        // Which guess # solved each board (1-21)
}
```

### Firestore Security Rules
- Allow anonymous reads for leaderboard
- Allow anonymous writes for score submission
- Validate score data structure and ranges
- Prevent modification of existing scores

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run deploy     # Deploy to Firebase Hosting
```

## Code Guidelines

- **Indentation**: Use 4 spaces per indent level for all files
- **Empty lines**: Never include indents or spaces in empty lines
- **Code quality**: Focus heavily on readability and maintainability
- **Comments**: Be extremely conservative with comments. Code should be self-explanatory. Only add comments when code is unavoidably complex
- **Code placement**: Before writing code, consider:
  1. Is this the correct location for this code?
  2. Check existing patterns in the repository for similar functionality
  3. Can this code be written more clearly?
- **No dead code**: Don't add unused functions or features "for the future"
- **Consistency**: Follow existing patterns, structures, and naming conventions throughout the codebase
- **File naming**: All lowercase with dash separation (e.g., `image-cache.tsx`, `game-engine.ts`, not `imageCache.tsx` or `GameEngine.ts`)