import { LetterBoardStatus, UsedLetterStatus } from '../types/game'

const priority = { absent: 0, present: 1, correct: 2 }

export const getLetterStatuses = (guesses: string[], targetWords: string[]) => {
    const usedLetters = new Map<string, UsedLetterStatus>()
    const letterBoardStatus = new Map<string, LetterBoardStatus>()
    const solvedBoards = new Set<number>()

    for (const guess of guesses) {
        targetWords.forEach((target, boardIndex) => {
            if (solvedBoards.has(boardIndex)) return

            for (const letter of guess) {
                const status: UsedLetterStatus = [...guess].some(
                    (value, index) =>
                        value === letter && target[index] === letter,
                )
                    ? 'correct'
                    : target.includes(letter)
                      ? 'present'
                      : 'absent'
                const boardStatus = letterBoardStatus.get(letter) ?? {
                    boardStatuses: new Map<number, UsedLetterStatus>(),
                }
                const previous = boardStatus.boardStatuses.get(boardIndex)
                if (!previous || priority[status] > priority[previous]) {
                    boardStatus.boardStatuses.set(boardIndex, status)
                }
                letterBoardStatus.set(letter, boardStatus)

                const overall = usedLetters.get(letter)
                if (!overall || priority[status] > priority[overall]) {
                    usedLetters.set(letter, status)
                }
            }

            if (guess === target) solvedBoards.add(boardIndex)
        })
    }

    return { usedLetters, letterBoardStatus }
}
