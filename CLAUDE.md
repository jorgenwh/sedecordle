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
├── .github/
│   └── workflows/      # CI/CD pipelines
├── src/
│   ├── app.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── .prettierrc
├── .gitignore
├── run-checks.sh       # Local code quality checks
├── firebase.json       # (to be added)
├── firestore.rules     # (to be added)
└── CLAUDE.md
```

## Firebase Configuration

### Environment Variables Setup

Since this is an open-source project, Firebase configuration is stored in environment variables:

1. **Local Development**:
   - Copy `.env.example` to `.env`
   - Fill in your Firebase project configuration
   - Never commit `.env` to the repository

2. **GitHub Actions**:
   - Add Firebase config as repository secrets:
     - `VITE_FIREBASE_API_KEY`
     - `VITE_FIREBASE_AUTH_DOMAIN`
     - `VITE_FIREBASE_PROJECT_ID`
     - `VITE_FIREBASE_STORAGE_BUCKET`
     - `VITE_FIREBASE_MESSAGING_SENDER_ID`
     - `VITE_FIREBASE_APP_ID`
   - Add `FIREBASE_SERVICE_ACCOUNT` (JSON content from Firebase Console)

3. **Firebase Hosting**:
   - Environment variables are built into the app during deployment
   - GitHub Actions handles this automatically

### Getting Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Project Settings → General
4. Scroll to "Your apps" → Web app
5. Copy the configuration values

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
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run format     # Format code with Prettier
npm run lint       # Check code with ESLint
npm run lint:fix   # Fix ESLint issues
npm run deploy     # Deploy to Firebase Hosting
./run-checks.sh    # Run all code quality checks
```

## Code Guidelines

- **Indentation**: Use 4 spaces per indent level for all files
- **Empty lines**: Never include indents or spaces in empty lines
- **Function style**: Always use arrow functions (`=>`) for all function definitions
  - Example: `const myFunc = (num: number): boolean => { return true; }`
- **TypeScript**: Avoid boilerplate types like `React.FC` when possible
- **Code quality**: Focus heavily on readability and maintainability
- **Comments**: Be extremely conservative with comments. Code should be self-explanatory. Only add comments when code is unavoidably complex
- **Code placement**: Before writing code, consider:
  1. Is this the correct location for this code?
  2. Check existing patterns in the repository for similar functionality
  3. Can this code be written more clearly?
- **No dead code**: Don't add unused functions or features "for the future"
- **Consistency**: Follow existing patterns, structures, and naming conventions throughout the codebase
- **File naming**: All lowercase with dash separation (e.g., `image-cache.tsx`, `game-engine.ts`, not `imageCache.tsx` or `GameEngine.ts`)
- **Documentation**: Update CLAUDE.md when making significant changes to the project structure, architecture, or development workflow

## CI/CD & Branch Protection

### GitHub Branch Protection Rules (main branch)
- Direct pushes to `main` are disabled
- Pull requests required before merging
- Required status checks must pass before merging:
  - Code formatting check
  - ESLint check
  - TypeScript build check

### GitHub Actions Workflows

#### Pull Request Workflow (`.github/workflows/pr-checks.yml`)
Runs on all pull requests targeting `main`:
- Checks code formatting (Prettier)
- Runs ESLint
- Builds the project (TypeScript check)

#### Deployment Workflow (`.github/workflows/deploy.yml`)
Runs when changes are merged to `main`:
1. **Check Job**: Validates code quality
   - Code formatting
   - ESLint
   - Build
2. **Deploy Job**: Deploys to Firebase Hosting
   - Builds production bundle
   - Deploys to Firebase

### Setting Up Branch Protection
To enable branch protection on GitHub:
1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - Require pull request before merging
   - Require status checks to pass
   - Select required checks: `format`, `lint`, `build`
   - Disable direct pushes