<template>
    <el-card v-if="ticker && ticker.data">
        <template #header>
            Ticker
            <span style="float: right">
                <el-button
                    type="success"
                    :disabled="!ticker.changed"
                    @click="ticker.save"
                    >SAVE</el-button
                >
            </span>
        </template>

        <el-form label-width="140px">
            <el-form-item label="Ticker Top Text">
                <el-input
                    v-model="ticker.data.topText"
                    placeholder="Ticker Top Text"
                >
                </el-input>
            </el-form-item>
            <el-form-item label="Ticker Scroll Speed">
                <el-slider
                    v-model="ticker.data.speed"
                    show-input
                    :min="1"
                    :max="25"
                />
            </el-form-item>
            <el-form-item label="Ticker Bottom Text">
                <el-input
                    v-model="ticker.data.bottomText"
                    :rows="4"
                    type="textarea"
                    placeholder="Ticker Bottom Text"
                >
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button-group>
                    <el-button type="success" @click="showTicker"
                        >SHOW</el-button
                    >
                    <el-button type="danger" @click="hideTicker"
                        >HIDE</el-button
                    >
                </el-button-group>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script lang="ts" setup>
import { useReplicant } from 'nodecg-vue-composable'
import * as repDefaults from '../../replicants'

const ticker = useReplicant<typeof repDefaults.ticker>(
    'ticker',
    'eschamp-bundle',
    {
        defaultValue: repDefaults.ticker,
    }
)

const showTicker = () => nodecg.sendMessage('show-main-ticker')
const hideTicker = () => nodecg.sendMessage('hide-main-ticker')
</script>
