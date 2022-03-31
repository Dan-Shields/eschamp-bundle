import * as races from '../assets/VS/races'

export function raceToImg(race: string) {
    switch (race) {
        case 'Protoss':
            return races.protoss.default
        case 'Zerg':
            return races.Zerg.default
        case 'Terran':
            return races.terran.default
    }
}
