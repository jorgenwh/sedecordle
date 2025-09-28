import laWordsRaw from '../data/wordle_words_la.txt?raw'
import taWordsRaw from '../data/wordle_words_ta.txt?raw'

let ANSWER_WORDS: string[] = []
let ALL_VALID_WORDS: Set<string> = new Set()

const initializeWords = () => {
    if (ANSWER_WORDS.length === 0) {
        ANSWER_WORDS = laWordsRaw
            .split('\n')
            .map((word) => word.trim().toUpperCase())
            .filter((word) => word.length === 5)

        const taWords = taWordsRaw
            .split('\n')
            .map((word) => word.trim().toUpperCase())
            .filter((word) => word.length === 5)

        ALL_VALID_WORDS = new Set([...ANSWER_WORDS, ...taWords])
    }
}

export const getRandomWords = (count: number): string[] => {
    initializeWords()
    const shuffled = [...ANSWER_WORDS].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
}

export const isValidWord = (word: string): boolean => {
    initializeWords()
    return ALL_VALID_WORDS.has(word.toUpperCase())
}
