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

    const mainBase = Airtable.base('appfSOqFLhZ2iq4GN')
    const creditsBase = Airtable.base('appHuPYAMch4gfqhi')

    const bots = nodecg().Replicant('bots', { defaultValue: repDefaults.bots })
    const patrons = nodecg().Replicant('patrons', {
        defaultValue: repDefaults.patrons,
    })

    setInterval(() => {
        mainBase('Bots')
            .select()
            .all((err, records) => {
                const newBots: typeof repDefaults.bots = {}

                records?.forEach((record) => {
                    newBots[record.id] = record.fields as repDefaults.Bot
                })

                if (!err && !_.isEqual(newBots, bots.value)) {
                    bots.value = newBots
                }
            })

        creditsBase('Members')
            .select({ fields: ['Name', 'Membership Type'] })
            .all((err, records) => {
                const newPatrons = records?.map((record) => {
                    return record.fields as repDefaults.Patron
                })

                if (
                    !err &&
                    newPatrons &&
                    !_.isEqual(newPatrons, patrons.value)
                ) {
                    patrons.value = newPatrons
                }
            })
    }, 1000)
}
