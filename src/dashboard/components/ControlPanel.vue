<template>
    <el-container>
        <el-header></el-header>
        <el-container>
            <el-aside width="200px"></el-aside>
            <el-main>
                <MainPage />
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TickerControls from './TickerControls.vue'
import MainPage from './MainPage.vue'
const test = ref('hello')
</script>

<style lang="scss" scoped>
.el-header {
    background-color: #dadada;
}
.el-aside {
    background-color: #ececec;
}
.el-container {
    height: 100vh;
}

.el-main {
    max-width: 1200px;
}
</style>

<style lang="scss">
body {
    margin: 0;
    background: unset;
    color: unset;
}

* {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>
