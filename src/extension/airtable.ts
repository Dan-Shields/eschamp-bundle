import { get as nodecg } from './nodecg-util'
import * as repDefaults from '../replicants'
import Airtable from 'airtable'
import _ from 'lodash'

syncAirtable()

function syncAirtable() {
    if (!process.env.AIRTABLE_API_KEY) {
        nodecg().log.error('NO AIRTABLE API KEY CONFIGURED')
        return
    }

    Airtable.configure({
        apiKey: process.env.AIRTABLE_API_KEY,
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
}
