import type { NodeCG } from 'nodecg-types/types/server'
import { set } from './nodecg-util'

export = (nodecg: NodeCG) => {
    set(nodecg)
    require('./timers')
    require('./airtable')
}
