<template>
    <el-card v-if="introBot" style="width: 100%">
        <template #header> Intros </template>

        <el-row :gutter="20">
            <el-col :span="12" class="switch" @click="change1">
                <el-switch
                    :modelValue="introBot.data === 1"
                    :disabled="introBot.data === 2"
                ></el-switch>
                Bot 1
            </el-col>
            <el-col :span="12" class="switch" @click="change2">
                <el-switch
                    :modelValue="introBot.data === 2"
                    :disabled="introBot.data === 1"
                ></el-switch>
                Bot 2
            </el-col>
        </el-row>
    </el-card>
</template>

<script lang="ts" setup>
import { useReplicant } from 'nodecg-vue-composable'
import * as repDefaults from '../../replicants/index'

const introBot = useReplicant<typeof repDefaults.introBot>(
    'introBot',
    'eschamp-bundle',
    { defaultValue: repDefaults.introBot }
)

const change1 = (value: boolean) => {
    if (!introBot) return
    if (introBot.data === 2) return

    introBot.data = introBot.data === 1 ? null : 1
    introBot.save()
}
const change2 = (value: boolean) => {
    if (!introBot) return
    if (introBot.data === 1) return

    introBot.data = introBot.data === 2 ? null : 2
    introBot.save()
}
</script>

<style lang="scss" scoped>
.switch {
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-border-radius-small);
    cursor: pointer !important;
    padding: 5px;
}
</style>
