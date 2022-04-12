<template>
    <el-container>
        <el-aside width="200px"></el-aside>
        <el-container>
            <el-header>
                <el-menu
                    :default-active="pageIndex"
                    mode="horizontal"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    @select="handleSelect"
                >
                    <el-menu-item index="1">Info</el-menu-item>
                    <el-menu-item index="2">Brackets</el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <MainPage v-show="pageIndex === '1'" />
                <el-tabs v-show="pageIndex === '2'" type="card">
                    <el-tab-pane label="Main Stage">
                        <BracketPage type="main" />
                    </el-tab-pane>
                    <el-tab-pane label="Losers">
                        <BracketPage type="losers" />
                    </el-tab-pane>
                    <el-tab-pane label="Finals">
                        <BracketPage type="finals" />
                    </el-tab-pane>
                    <el-tab-pane label="Gauntlet">
                        <BracketPage type="gauntlet" />
                    </el-tab-pane>
                </el-tabs>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MainPage from './MainPage.vue'
import BracketsPage from './BracketsPage.vue'
import BracketPage from './BracketPage.vue'
const pageIndex = ref('1')

const handleSelect = (index: string) => {
    pageIndex.value = index
}
</script>

<style lang="scss" scoped>
.el-header {
    background-color: #545c64;
}
.el-aside {
    background-color: #ececec;
}
.el-container {
    height: 100vh;
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
