<template>
    <el-row :gutter="20">
        <el-col><ScoreboardControls /></el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="12"><TickerControls /></el-col>
        <el-col :span="12"><TimerControls /></el-col>
    </el-row>
</template>

<script lang="ts" setup>
import TickerControls from './TickerControls.vue'
import TimerControls from './TimerControls.vue'
import ScoreboardControls from './ScoreboardControls.vue'
</script>

<style lang="scss" scoped>
.el-row {
    margin-bottom: 20px;
}
</style>
