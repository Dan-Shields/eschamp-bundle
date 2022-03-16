import { get as nodecg } from './nodecg-util'
import * as repDefaults from '../replicants'
import Airtable from 'airtable'
import _ from 'lodash'

Airtable.configure({
    apiKey: 'keyWv5e3wWx2sBVM6',
})

const base = Airtable.base('appfSOqFLhZ2iq4GN')

const bots = nodecg().Replicant('bots', { defaultValue: repDefaults.bots })

setInterval(() => {
    const newBots: typeof repDefaults.bots = {}
    base('Bots')
        .select()
        .all((err, records) => {
            records?.forEach((record) => {
                newBots[record.id] = record.fields as repDefaults.Bot
            })
            if (!err && !_.isEqual(newBots, bots.value)) {
                bots.value = newBots
            }
        })
}, 1000)
