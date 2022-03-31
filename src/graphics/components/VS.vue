<template>
    <img :src="logo" class="logo" />
    <img :src="banner" class="banner" ref="bannerRef" />
    <h1 class="vs">VERSUS</h1>
    <div class="bot left" v-show="bot1" ref="leftBot">
        <img class="avatar" :src="bot1?.Image?.[0].url ?? ''" />
        <div class="box">
            <div class="race-container">
                <img v-if="bot1Race" class="race" :src="bot1Race" />
            </div>
            <h1 class="name">{{ bot1?.Name }}</h1>
            <div class="info">
                <h4 class="author">{{ bot1?.Author }}</h4>
                <h4 class="lang">{{ bot1?.Language }}</h4>
            </div>
        </div>
    </div>
    <div class="bot right" v-show="bot2" ref="rightBot">
        <img class="avatar" :src="bot2?.Image?.[0].url ?? ''" />
        <div class="box">
            <div class="race-container">
                <img v-if="bot2Race" class="race" :src="bot2Race" />
            </div>
            <h1 class="name">{{ bot2?.Name }}</h1>
            <div class="info">
                <h4 class="author">{{ bot2?.Author }}</h4>
                <h4 class="lang">{{ bot2?.Language }}</h4>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useReplicant } from 'nodecg-vue-composable'
import anime from 'animejs'

import * as repDefaults from '../../replicants'
import { raceToImg } from './raceToImg'

import banner from '../assets/VS/Banner.png'
import logo from '../assets/VS/ProBots Logo 2.png'

const scoreboard = useReplicant('scoreboard', 'eschamp-bundle', {
    defaultValue: repDefaults.scoreboard,
})

const bots = useReplicant('bots', 'eschamp-bundle', {
    defaultValue: repDefaults.bots,
})

const bot1 = computed(() => {
    if (!bots?.data || !scoreboard?.data?.bot1) return null

    return bots.data[scoreboard.data.bot1.id]
})
const bot2 = computed(() => {
    if (!bots?.data || !scoreboard?.data?.bot2) return null

    return bots.data[scoreboard.data.bot2.id]
})

const leftBot = ref<HTMLElement | null>(null)
const rightBot = ref<HTMLElement | null>(null)
const bannerRef = ref<HTMLElement | null>(null)

const animateIn = () => {
    if (!leftBot.value || !rightBot.value || !bannerRef.value) {
        setTimeout(() => animateIn(), 50)
        return
    }

    const margin = '160px'

    const delay = 300

    anime({
        targets: [leftBot.value],
        left: margin,
        delay,
        easing: 'easeOutQuad',
    })
    anime({
        targets: [rightBot.value],
        right: margin,
        delay,
        easing: 'easeOutQuad',
    })
}

const bot1Race = computed(() => {
    if (!bot1?.value?.Race) return null
    return raceToImg(bot1.value.Race)
})
const bot2Race = computed(() => {
    if (!bot2?.value?.Race) return null
    return raceToImg(bot2.value.Race)
})

onMounted(() => {
    animateIn()
})
</script>

<style lang="scss" scoped>
@use '../styles/colors.scss';

.banner {
    position: absolute;
    top: 450px;
    left: 0;
}

.logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50px;
}

.vs {
    opacity: 1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 520px;
    font-size: 3em;
    color: colors.$lightblue;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.bot {
    $width: 500px;
    $margin: -$width;
    position: absolute;
    top: 230px;
    height: 800px;
    width: $width;
    overflow: hidden;

    &.left {
        left: $margin;
    }
    &.right {
        right: $margin;
    }

    > * {
        position: absolute;
    }

    .avatar {
        bottom: 190px;
        left: 0;
        width: 100%;
    }

    .box {
        background-color: colors.$yellow;
        width: 100%;
        bottom: 0;
        left: 0;
        height: 185px;
        color: colors.$blue;

        font-size: 1.25em;

        .race-container {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 125px;
            background-color: colors.$lightblue;
            .race {
                position: absolute;
                top: 50%;
                left: 62px;
                height: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .name {
            position: absolute;
            top: 0;
            right: 0;
            width: 500px - 125px;
            padding: 20px 25px;
            box-sizing: border-box;

            margin: 0;
        }

        .info {
            position: absolute;
            bottom: 0;
            right: 0;
            height: 93px;
            background-color: colors.$blue;
            width: 500px - 125px;
            color: white;
            padding: 15px 25px;
            box-sizing: border-box;

            h4 {
                margin: 0;
                margin-bottom: 12px;
                font-weight: normal;
            }
        }
    }
}
</style>

<style>
.marquee-text-text {
    padding-right: 4px;
}
</style>
