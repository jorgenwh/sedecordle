export interface GameState {
    targetWords: string[]
    guesses: string[]
    currentGuess: string
    gameStatus: 'playing' | 'won' | 'lost'
    solvedBoards: Set<number>
    startTime: number | null
    endTime: number | null
}

export type UsedLetterStatus = 'correct' | 'present' | 'absent'

export interface LetterBoardStatus {
    boardStatuses: Map<number, UsedLetterStatus>
}

export interface Score {
    id?: string
    playerName: string
    attempts: number
    timeSeconds: number
    completedAt: Date
    targetWords: string[]
}
