import * as races from '../assets/races'

export function raceToImg(race?: string, white = false) {
    switch (race) {
        case 'Protoss':
            return !white ? races.protoss.default : races.protoss_white.default
        case 'Zerg':
            return !white ? races.Zerg.default : races.Zerg_white.default
        case 'Terran':
            return !white ? races.terran.default : races.terran_white.default
        default:
            return !white ? races.random.default : races.random_white.default
    }
}
