// Each band applies from its min value up to the next band's min.
const IQ_COMMENT_BANDS: { min: number; comments: string[] }[] = [
    {
        min: -Infinity,
        comments: [
            'Based on your Superwordle IQ, you cannot open a door.',
            'Based on your Superwordle IQ, you push on doors marked "pull". Every time.',
            'Based on your Superwordle IQ, you lose arguments with vending machines.',
            'Based on your Superwordle IQ, you study for a blood test.',
            'Based on your Superwordle IQ, you water plastic plants.',
        ],
    },
    {
        min: 70,
        comments: [
            'Based on your Superwordle IQ, you can open a door. Most doors.',
            'Based on your Superwordle IQ, you read the instructions after building the furniture.',
            'Based on your Superwordle IQ, you lose the TV remote while holding it.',
            'Based on your Superwordle IQ, you type your password into the username field.',
            'Based on your Superwordle IQ, you say "you too" when the waiter says "enjoy your meal".',
        ],
    },
    {
        min: 85,
        comments: [
            'Based on your Superwordle IQ, you can assemble flat-pack furniture with only two spare screws.',
            'Based on your Superwordle IQ, you can follow a recipe if it has pictures.',
            'Based on your Superwordle IQ, you can find your car in the car park. Eventually.',
            'Based on your Superwordle IQ, you remember why you walked into the room about half the time.',
            'Based on your Superwordle IQ, you win at board games against children. Young children.',
        ],
    },
    {
        min: 100,
        comments: [
            'Based on your Superwordle IQ, you are perfectly, gloriously average.',
            'Based on your Superwordle IQ, you are the reason the bell curve has a middle.',
            'Based on your Superwordle IQ, you know the difference between "your" and "you’re". Usually.',
            'Based on your Superwordle IQ, you are smarter than half of everyone. Not bad.',
            'Based on your Superwordle IQ, you can fold a fitted sheet. Badly, but you can.',
        ],
    },
    {
        min: 115,
        comments: [
            'Based on your Superwordle IQ, you are the friend who gets called to fix the printer.',
            'Based on your Superwordle IQ, you finish the crossword. In pen.',
            'Based on your Superwordle IQ, you win the pub quiz at least once a year.',
            'Based on your Superwordle IQ, you have opinions about fonts.',
            'Based on your Superwordle IQ, you assemble flat-pack furniture with no spare screws.',
        ],
    },
    {
        min: 130,
        comments: [
            'Based on your Superwordle IQ, you could open a door with your mind. You still use the handle, out of politeness.',
            'Based on your Superwordle IQ, you solve the Rubik’s cube to relax.',
            'Based on your Superwordle IQ, you get invited to Mensa, and you decline.',
            'Based on your Superwordle IQ, your spreadsheets have spreadsheets.',
            'Based on your Superwordle IQ, you knew the last word before you typed the first one.',
        ],
    },
    {
        min: 145,
        comments: [
            'Based on your Superwordle IQ, doors open for you before you arrive.',
            'Based on your Superwordle IQ, Einstein would ask you for help with his homework.',
            'Based on your Superwordle IQ, you can see the bell curve from above.',
            'Based on your Superwordle IQ, you play chess against yourself and both of you win.',
            'Based on your Superwordle IQ, the 16 words were afraid of you.',
        ],
    },
]

// Lost games get comments by the number of solved boards instead of by IQ.
const LOSS_COMMENT_BANDS: { min: number; comments: string[] }[] = [
    {
        min: 0,
        comments: [
            'Based on your Superwordle IQ, the words solved you.',
            'Based on your Superwordle IQ, you would lose at Superwordle to a door.',
            'Based on your Superwordle IQ, the keyboard is filing a complaint.',
            'Based on your Superwordle IQ, the dictionary has blocked you.',
            'Based on your Superwordle IQ, you were playing a different game.',
        ],
    },
    {
        min: 1,
        comments: [
            'Based on your Superwordle IQ, you found a word. Then you got tired.',
            'Based on your Superwordle IQ, you know some words. A few.',
            'Based on your Superwordle IQ, the other boards are still waiting for you.',
            'Based on your Superwordle IQ, you are warming up. Slowly.',
            'Based on your Superwordle IQ, you opened the door, but did not walk through it.',
        ],
    },
    {
        min: 6,
        comments: [
            'Based on your Superwordle IQ, you got halfway there. Half a medal for you.',
            'Based on your Superwordle IQ, you are smarter than half the boards.',
            'Based on your Superwordle IQ, you ran out of guesses, not ideas.',
            'Based on your Superwordle IQ, you are a solid "maybe next time".',
            'Based on your Superwordle IQ, the boards respect you, but they do not fear you.',
        ],
    },
    {
        min: 11,
        comments: [
            'Based on your Superwordle IQ, you nearly had it. Nearly.',
            'Based on your Superwordle IQ, a few more guesses and you are a legend.',
            'Based on your Superwordle IQ, the last boards got lucky.',
            'Based on your Superwordle IQ, you were robbed. By yourself.',
            'Based on your Superwordle IQ, you will win the next one. Probably.',
        ],
    },
    {
        min: 15,
        comments: [
            'Based on your Superwordle IQ, one word stood between you and glory.',
            'Based on your Superwordle IQ, you will dream about that last word tonight.',
            'Based on your Superwordle IQ, 15 out of 16 is a win in our hearts. Not on the leaderboard.',
            'Based on your Superwordle IQ, that last word was cheating.',
            'Based on your Superwordle IQ, so close that it hurts.',
        ],
    },
]

const pickComment = (
    bands: { min: number; comments: string[] }[],
    value: number,
) => {
    const band = bands.filter((band) => value >= band.min).pop()!
    return band.comments[Math.floor(Math.random() * band.comments.length)]
}

export const getIqComment = (iq: number) => pickComment(IQ_COMMENT_BANDS, iq)

export const getLossComment = (solvedBoards: number) =>
    pickComment(LOSS_COMMENT_BANDS, solvedBoards)
