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

export const getDailyWords = (date = new Date()): string[] => {
    initializeWords()

    // UTC days give every timezone the same seed, changing at midnight UTC.
    let seed = Math.floor(date.getTime() / 86_400_000) >>> 0
    const random = () => {
        // Mulberry32: fixed integer arithmetic keeps results browser-independent.
        seed = (seed + 0x6d2b79f5) >>> 0
        let value = Math.imul(seed ^ (seed >>> 15), seed | 1)
        value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
        return ((value ^ (value >>> 14)) >>> 0) / 4_294_967_296
    }

    // Keep this word set and algorithm stable to preserve published puzzles.
    // Sorting also makes the result independent of the source file's order.
    const shuffled = [...ANSWER_WORDS].sort()
    for (let index = shuffled.length - 1; index > 0; index--) {
        const otherIndex = Math.floor(random() * (index + 1))
        const word = shuffled[index]
        shuffled[index] = shuffled[otherIndex]
        shuffled[otherIndex] = word
    }
    return shuffled.slice(0, 16)
}

export const isValidWord = (word: string): boolean => {
    initializeWords()
    return ALL_VALID_WORDS.has(word.toUpperCase())
}
