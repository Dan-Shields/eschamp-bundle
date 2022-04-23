<template>
    <div>
        <el-row :gutter="20">
            <el-col><ScoreboardControls /></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12"><TickerControls /></el-col>
            <el-col :span="12">
                <el-row>
                    <TimerControls />
                </el-row>
                <el-row>
                    <IntroControls />
                </el-row>
            </el-col>
        </el-row>
        <el-row>
            <el-col><MatchListControls /></el-col>
        </el-row>
        <el-row>
            <el-col><CreditsControls /></el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import TickerControls from './TickerControls.vue'
import TimerControls from './TimerControls.vue'
import ScoreboardControls from './ScoreboardControls.vue'
import IntroControls from './IntroControls.vue'
import MatchListControls from './MatchListControls.vue'
import CreditsControls from './CreditsControls.vue'
</script>

<style lang="scss" scoped>
.el-row {
    margin-bottom: 20px;
}
</style>
