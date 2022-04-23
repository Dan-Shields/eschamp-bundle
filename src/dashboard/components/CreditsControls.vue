<template>
    <el-card v-if="credits">
        <template #header>
            Credits
            <span style="float: right">
                <el-button
                    type="success"
                    :disabled="!credits.changed"
                    @click="credits.save"
                    >SAVE</el-button
                >
            </span>
        </template>

        <el-form>
            <el-form-item>
                <el-input
                    v-model="credits.data"
                    :rows="8"
                    type="textarea"
                    placeholder="Enter text..."
                >
                </el-input>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script lang="ts" setup>
import { useReplicant } from 'nodecg-vue-composable'

const credits = useReplicant('credits', 'eschamp-bundle', { defaultValue: '' })
</script>
