import { get as nodecg } from './nodecg-util'
import * as repDefaults from '../replicants'

const timers = nodecg().Replicant('timers', {
    defaultValue: repDefaults.timers,
})

setInterval(async () => {
    if (!timers.value.nextMatchPlaying) return

    let newValue = timers.value.nextMatch - 1

    if (newValue <= 0) {
        newValue = 0
        timers.value.nextMatchPlaying = false
    }

    timers.value.nextMatch = newValue
}, 1000)
