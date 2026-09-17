import { GameState } from '../types/game'

const storageKey = (date: string) => `superwordle:daily:v1:${date}`

export const loadDailyProgress = (date: string): GameState | null => {
    try {
        const raw = localStorage.getItem(storageKey(date))
        if (!raw) return null

        const saved = JSON.parse(raw)
        if (
            !saved ||
            !Array.isArray(saved.targetWords) ||
            saved.targetWords.length !== 16 ||
            new Set(saved.targetWords).size !== 16 ||
            !saved.targetWords.every(
                (word: unknown) =>
                    typeof word === 'string' && /^[A-Z]{5}$/.test(word),
            ) ||
            !Array.isArray(saved.guesses) ||
            saved.guesses.length < 1 ||
            saved.guesses.length > 21 ||
            !saved.guesses.every(
                (word: unknown) =>
                    typeof word === 'string' && /^[A-Z]{5}$/.test(word),
            ) ||
            typeof saved.currentGuess !== 'string' ||
            !/^[A-Z]{0,5}$/.test(saved.currentGuess) ||
            typeof saved.startTime !== 'number' ||
            !Number.isFinite(saved.startTime) ||
            saved.startTime <= 0 ||
            (saved.elapsedMs !== undefined &&
                (typeof saved.elapsedMs !== 'number' ||
                    !Number.isFinite(saved.elapsedMs) ||
                    saved.elapsedMs < 0)) ||
            (saved.endTime !== null &&
                (typeof saved.endTime !== 'number' ||
                    !Number.isFinite(saved.endTime) ||
                    saved.endTime < saved.startTime))
        ) {
            return null
        }

        const targetWords: string[] = saved.targetWords
        const guesses: string[] = saved.guesses
        const solvedBoards = new Set(
            targetWords.flatMap((word, index) =>
                guesses.includes(word) ? [index] : [],
            ),
        )
        const gameStatus =
            solvedBoards.size === targetWords.length
                ? 'won'
                : guesses.length === 21
                  ? 'lost'
                  : 'playing'
        if ((gameStatus === 'playing') !== (saved.endTime === null)) return null

        // Older saves only had a start timestamp. Preserve their existing time;
        // new saves resume from active time without adding the time spent away.
        const now = Date.now()
        const elapsedMs = saved.elapsedMs ?? Math.max(0, now - saved.startTime)

        return {
            targetWords,
            guesses,
            currentGuess: gameStatus === 'playing' ? saved.currentGuess : '',
            solvedBoards,
            gameStatus,
            startTime:
                gameStatus === 'playing' ? now - elapsedMs : saved.startTime,
            endTime: saved.endTime,
        }
    } catch {
        return null
    }
}

export const saveDailyProgress = (
    date: string,
    gameState: GameState,
    now = Date.now(),
) => {
    if (gameState.startTime === null || gameState.guesses.length === 0) return

    try {
        const { targetWords, guesses, currentGuess, startTime, endTime } =
            gameState
        localStorage.setItem(
            storageKey(date),
            JSON.stringify({
                targetWords,
                guesses,
                currentGuess,
                startTime,
                endTime,
                elapsedMs: Math.max(0, (endTime ?? now) - startTime),
            }),
        )
    } catch {
        // Storage may be unavailable; keep the current game playable.
    }
}
