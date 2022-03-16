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
