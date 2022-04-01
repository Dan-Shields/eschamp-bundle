<template>
    <el-card v-if="timers?.data" style="width: 100%">
        <template #header>Timers</template>

        <el-form label-width="140px">
            <el-form-item label="Next Match Timer">
                <el-input class="timer-input" v-model="nextMatchText">
                </el-input>
                <el-button
                    @click="runNextMatch"
                    v-if="!timers.data.nextMatchPlaying"
                    type="success"
                >
                    <font-awesome-icon :icon="['fas', 'play']" />
                </el-button>
                <el-button v-else @click="stopNextMatch" type="danger">
                    <font-awesome-icon :icon="['fas', 'stop']" />
                </el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useReplicant } from 'nodecg-vue-composable'
import * as repDefaults from '../../replicants'

const timers = useReplicant<typeof repDefaults.timers>(
    'timers',
    'eschamp-bundle',
    {
        defaultValue: repDefaults.timers,
    }
)

const nextMatchText = ref('5:00')

const runNextMatch = () => {
    if (nextMatchText.value === '' || !timers?.data) return

    const frags = nextMatchText.value.split(':')

    let time = 0

    for (let i = frags.length - 1; i >= 0; i--) {
        if (isNaN(parseInt(frags[i]))) return

        time += Math.pow(60, frags.length - 1 - i) * parseInt(frags[i])
    }

    timers.data.nextMatch = time
    timers.data.nextMatchPlaying = true
    timers.save()
}

const stopNextMatch = () => {
    if (!timers?.data) return
    timers.data.nextMatchPlaying = false
    timers.save()
}
</script>

<style lang="scss" scoped>
.timer-input {
    width: 150px;
}
</style>
