import path from 'path'
import dotenv from 'dotenv'
import type { NodeCG } from 'nodecg-types/types/server'
import { set } from './nodecg-util'

dotenv.config({
    path: path.join(__dirname, '../.env'),
})

export = (nodecg: NodeCG) => {
    set(nodecg)
    require('./timers')
    require('./airtable')
}
