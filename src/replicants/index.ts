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
