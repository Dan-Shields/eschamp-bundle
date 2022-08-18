<template>
    <el-card v-if="scoreboard?.data">
        <template #header>
            Scoreboard
            <span style="float: right">
                <el-button
                    type="success"
                    :disabled="!scoreboard.changed"
                    @click="scoreboard.save"
                    >SAVE</el-button
                >
            </span>
        </template>

        <el-form label-position="top">
            <el-row>
                <el-col :span="6">
                    <el-form-item label="Bot 1">
                        <el-select
                            v-model="scoreboard.data.bot1.id"
                            placeholder="Please select"
                            clearable
                            filterable
                        >
                            <el-option
                                v-for="bot in botOptions"
                                :key="bot.value"
                                :label="bot.label"
                                :value="bot.value"
                            />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="Bot 1 Score">
                        <el-input-number
                            v-model="scoreboard.data.bot1.score"
                            :min="0"
                            placeholder="Bot 1 Score"
                        />
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="Bot 2 Score">
                        <el-input-number
                            v-model="scoreboard.data.bot2.score"
                            :min="0"
                            placeholder="Bot 2 Score"
                        />
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="Bot 2">
                        <el-select
                            v-model="scoreboard.data.bot2.id"
                            placeholder="Please select"
                            clearable
                            filterable
                        >
                            <el-option
                                v-for="bot in botOptions"
                                :key="bot.value"
                                :label="bot.label"
                                :value="bot.value"
                            />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </el-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useReplicant } from 'nodecg-vue-composable'
import * as repDefaults from '../../replicants'

const scoreboard = useReplicant('scoreboard', 'eschamp-bundle', {
    defaultValue: repDefaults.scoreboard,
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
</script>
