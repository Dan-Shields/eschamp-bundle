<template>
    <el-card class="bracket-page" shadow="always">
        <div class="rep-controls">
            <el-button-group>
                <el-button
                    type="success"
                    @click="bracket?.save()"
                    :disabled="!bracket?.changed"
                    >SAVE</el-button
                >
                <el-button
                    type="warning"
                    @click="bracket?.revert()"
                    :disabled="!bracket?.changed"
                    >CANCEL</el-button
                >
                <el-button type="danger" @click="bracket?.loadDefault()"
                    >CLEAR</el-button
                >
            </el-button-group>
        </div>
        <div v-if="bracket?.data" class="bracket-header">
            <div class="round" v-for="(round, roundIndex) in bracket.data">
                <label>{{ roundTitle(roundIndex) }}</label>
            </div>
        </div>
        <div
            v-if="bracket?.data"
            class="bracket"
            :style="{ height: bracketHeight }"
        >
            <div
                class="round"
                v-for="(round, roundIndex) in bracket.data"
                :style="{
                    justifyContent: type === 'finals' ? 'start' : undefined,
                }"
            >
                <div class="match" v-for="(match, matchIndex) in round">
                    <label style="margin: 0; font-size: 0.75em">
                        {{ matchTitle(roundIndex, matchIndex) }}
                    </label>
                    <div>
                        <el-select
                            v-model="match.bot1.id"
                            placeholder="Select Bot 1"
                            clearable
                            filterable
                            style="width: 67%"
                        >
                            <el-option
                                v-for="bot in botOptions"
                                :key="bot.value"
                                :label="bot.label"
                                :value="bot.value"
                            />
                        </el-select>
                        <el-input-number
                            v-model="match.bot1.score"
                            :min="0"
                            style="width: 33%"
                            controls-position="right"
                        />
                    </div>
                    <div>
                        <el-select
                            v-model="match.bot2.id"
                            placeholder="Select Bot 2"
                            clearable
                            filterable
                            style="width: 67%"
                        >
                            <el-option
                                v-for="bot in botOptions"
                                :key="bot.value"
                                :label="bot.label"
                                :value="bot.value"
                            />
                        </el-select>
                        <el-input-number
                            v-model="match.bot2.score"
                            :min="0"
                            style="width: 33%"
                            controls-position="right"
                        />
                    </div>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { useReplicant } from 'nodecg-vue-composable'

import * as repDefaults from '../../replicants'

const props = defineProps({
    type: {
        type: String as PropType<
            'main' | 'losers' | 'finals' | 'gauntlet' | 'group'
        >,
        required: true,
    },
    group: {
        type: String as PropType<'A' | 'B' | 'C' | 'D' | null>,
        default: null,
    },
})

const repName = `${props.type}${props.group ?? ''}Bracket`
const repDefaultName = `${props.type}Bracket` as keyof typeof repDefaults

const bracket = useReplicant(repName, 'eschamp-bundle', {
    defaultValue: repDefaults[repDefaultName] as repDefaults.Bracket,
})

const bots = useReplicant('bots', 'eschamp-bundle', {
    defaultValue: repDefaults.bots,
})

const botOptions = computed(() => {
    if (!bots?.data) return []

    return Object.entries(bots.data).map(([id, bot]) => ({
        value: id,
        label: bot.Name,
    }))
})

const bracketHeight = computed(() => {
    if (!bracket?.data?.length) return ''
    const largestRoundIndex = bracket.data.reduce(
        (maxI, el, i, arr) => (el.length > arr[maxI].length ? i : maxI),
        0
    )

    return `${100 * bracket.data[largestRoundIndex].length}px`
})

const roundTitle = (roundIndex: number): string => {
    switch (props.type) {
        case 'main':
            return `WB Round ${roundIndex + 1}`

        case 'losers':
            return `LB Round ${roundIndex + 1}`

        case 'finals':
            if (roundIndex === 0) return `LB Round 1`
            else return roundIndex === 1 ? 'LB Final' : 'Grand Finals'

        case 'gauntlet':
        case 'group':
            return `Round ${roundIndex + 1}`
    }
}

const matchTitle = (roundIndex: number, matchIndex: number): string => {
    switch (props.type) {
        case 'main':
            return `WB ${
                roundIndex < 3 ? `${roundIndex + 1}.${matchIndex + 1}` : 'Final'
            }`

        case 'losers':
            return `LB ${roundIndex + 1}.${matchIndex + 1}`

        case 'finals':
            if (roundIndex < 2) return `LB ${roundIndex + 5}.1`
            else return `Round ${matchIndex + 1}`

        case 'gauntlet':
            return `G ${roundIndex + 1}.1`

        case 'group':
            if (roundIndex === 0) {
                if (matchIndex === 0) return 'Semifinal 1'
                else if (matchIndex === 1) return 'Semifinal 2'
                else return 'Losers round 1'
            } else {
                return matchIndex ? 'Losers round 2' : 'Finals'
            }
    }
}
</script>

<style lang="scss" scoped>
.bracket-page {
    margin-right: 25px;
    color: rgb(48, 49, 51);

    overflow-x: scroll;

    background-color: rgb(241, 244, 248);
}

.rep-controls {
    color: white !important;
    margin-bottom: 15px;
}

$gap: 15px;

.bracket-header {
    display: flex;
    gap: $gap;

    > * {
        width: 250px;
        flex-shrink: 0;
        margin-bottom: 40px;
    }

    label {
        text-decoration: underline;
    }
}
.bracket {
    display: flex;
    gap: $gap;

    margin: 0;

    .round {
        height: 100%;
        width: 250px;

        flex-shrink: 0;

        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: space-around;
    }
}
</style>
<style>
.el-tab-pane {
}
</style>
