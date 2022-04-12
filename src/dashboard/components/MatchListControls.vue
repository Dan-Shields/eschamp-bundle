<template>
    <el-card v-if="matches?.data" style="width: 100%">
        <template #header>
            Match List
            <span style="float: right">
                <el-button
                    type="success"
                    :disabled="!matches.changed"
                    @click="matches.save"
                    >SAVE</el-button
                >
            </span>
        </template>
        <el-row>
            <el-col v-for="i in 4" :span="6">
                <h3>Match {{ i }}</h3>
                <el-select
                    v-model="matches.data[i - 1].bot1"
                    placeholder="Please select"
                    clearable
                    filterable
                    ><el-option
                        v-for="bot in botOptions"
                        :key="bot.value"
                        :label="bot.label"
                        :value="bot.value"
                /></el-select>
                <div style="text-align: center; width: 100%">vs</div>
                <el-select
                    v-model="matches.data[i - 1].bot2"
                    placeholder="Please select"
                    clearable
                    filterable
                    ><el-option
                        v-for="bot in botOptions"
                        :key="bot.value"
                        :label="bot.label"
                        :value="bot.value"
                /></el-select>
            </el-col>
            <el-divider direction="vertical" />
        </el-row>
    </el-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useReplicant } from 'nodecg-vue-composable'

import * as repDefaults from '../../replicants'

const matches = useReplicant<typeof repDefaults.matches>(
    'matches',
    'eschamp-bundle',
    { defaultValue: repDefaults.matches }
)

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
</script>
