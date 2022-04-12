import { Attachment } from 'airtable'

export const ticker = {
    topText: '',
    bottomText: '',
    speed: 5,
}

export const timers = {
    nextMatchPlaying: false,
    nextMatch: 300,
}

export type Bot = {
    Name: string
    Author: string
    Language: string
    Race?: string
    Image?: Attachment[]
    Intro?: Attachment[]
    Stat1?: string
    Stat1Val?: string
    Stat2?: string
    Stat2Val?: string
    Stat3?: string
    Stat3Val?: string
    Stat4?: string
    Stat4Val?: string
}

export const bots: { [index: string]: Bot } = {}

export const scoreboard = {
    bot1: {
        id: '',
        score: 0,
    },
    bot2: {
        id: '',
        score: 0,
    },
}

export type Patron = {
    Name: string
    'Membership Type': string
}

export const patrons: Patron[] = []

export const introBot: 1 | 2 | null = null

export type Match = {
    bot1: string | null
    bot2: string | null
}

export const matches: Match[] = Array.from({ length: 4 }, () => ({
    bot1: null,
    bot2: null,
}))

export type BracketMatch = {
    bot1: {
        id: string | null
        score: number
    }
    bot2: {
        id: string | null
        score: number
    }
}

export type Bracket = BracketMatch[][]

const generateBracketMatch = () => ({
    bot1: {
        id: null,
        score: 0,
    },
    bot2: {
        id: null,
        score: 0,
    },
})

export const mainBracket: Bracket = (() => {
    const rounds = 4
    return Array.from({ length: rounds }, (_, index) => {
        return Array.from({ length: Math.pow(2, rounds - 1 - index) }, () =>
            generateBracketMatch()
        )
    })
})()

export const losersBracket: Bracket = Array.from({ length: 4 }, (_, index) => {
    return Array.from({ length: index < 2 ? 4 : 2 }, () =>
        generateBracketMatch()
    )
})

export const finalsBracket: Bracket = Array.from({ length: 3 }, (_, index) => {
    return Array.from({ length: index < 2 ? 1 : 2 }, () =>
        generateBracketMatch()
    )
})

export const gauntletBracket: Bracket = Array.from({ length: 7 }, () => [
    generateBracketMatch(),
])
