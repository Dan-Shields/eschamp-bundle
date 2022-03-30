<template>
    <div class="in-game">
        <div class="ticker">
            <div class="cta">
                <img :src="crown" />
                <h1>ESCHAMP.COM/JOIN</h1>
            </div>
            <marquee-text
                v-if="marquee && marquee?.duration"
                class="marquee"
                :repeat="10"
                :duration="marquee.duration"
                :key="marquee.revision"
            >
                {{ marquee.text }}
            </marquee-text>
            <div class="yellow-bookend"></div>
        </div>
        <div class="intro" ref="introRef">
            <img class="avatar" :src="bot?.Image?.[0].url ?? ''" />
            <div class="yellow-box">
                <h1>{{ bot?.Name }}</h1>
            </div>
            <div class="blue-box"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import MarqueeText from 'vue-marquee-text-component'

import * as repDefaults from '../../replicants/index'
import { useMarqueeText } from '../composables/marquee-text'

import crown from '../assets/InGame/Logo.png'
import { useReplicant } from 'nodecg-vue-composable'
import anime from 'animejs'

const marquee = useMarqueeText()

const bots = useReplicant<typeof repDefaults.bots>('bots', 'eschamp-bundle', {
    defaultValue: repDefaults.bots,
})

const scoreboard = useReplicant<typeof repDefaults.scoreboard>(
    'scoreboard',
    'eschamp-bundle',
    { defaultValue: repDefaults.scoreboard }
)

const introBot = useReplicant<typeof repDefaults.introBot>(
    'introBot',
    'eschamp-bundle',
    {
        defaultValue: repDefaults.introBot,
    }
)

const bot = ref<repDefaults.Bot>()
const introRef = ref<HTMLElement>()

let introAnim: anime.AnimeInstance

const showIntro = () => {
    if (!introAnim) return

    if (
        !bots?.data ||
        !scoreboard?.data ||
        !introBot?.data ||
        introAnim.currentTime >= 10
    )
        return

    console.log('showing intro')

    const botId =
        introBot.data === 1 ? scoreboard.data.bot1.id : scoreboard.data.bot2.id
    bot.value = bots.data[botId]

    if (bot.value?.Intro?.[0]?.url) {
        const music = new Audio(bot.value.Intro[0].url)
        music.play()
    }

    if (introAnim.direction !== 'normal') introAnim.reverse()
    setTimeout(introAnim.play, 100)
}

const hideIntro = () => {
    if (!introAnim) return

    if (!bots?.data || introAnim.currentTime === 0) return
    console.log('hiding intro')

    if (introAnim.direction === 'normal') introAnim.reverse()
    introAnim.play()
}

onMounted(() => {
    introAnim = anime({
        autoplay: false,
        easing: 'easeInOutQuad',
        targets: introRef.value,
        translateX: [700, 0],
        duration: 1000,
        changeComplete: () => showIntro(),
    })
    showIntro()
})

if (introBot) {
    watch(
        () => introBot.data,
        (newVal, oldVal) => {
            if (!introAnim) return
            if (newVal === oldVal) return
            if (introAnim.currentTime !== 0) {
                hideIntro()
            } else {
                showIntro()
            }
        }
    )
}
</script>

<style lang="scss" scoped>
@use '../styles/colors.scss';

.ticker {
    position: absolute;
    left: 255px;
    top: 864px;
    height: 95px;

    display: flex;
    justify-content: space-between;

    gap: 15px;

    .cta {
        background-color: colors.$yellow;
        display: flex;
        padding-right: 10px;

        img {
            height: 50%;
            margin: auto 10px;
        }

        h1 {
            font-size: 1.5em;
            margin: auto 0;
        }
    }

    .marquee {
        color: white;
        background-color: colors.$blue;
        width: 1245px;
        font-size: 2em;
        font-weight: 700;
        line-height: 95px;
    }

    .yellow-bookend {
        width: 28px;
        height: 100%;
        background-color: colors.$yellow;
    }
}

.intro {
    position: absolute;
    left: 1260px;
    top: 135px;
    width: 663px;
    height: 700px;

    transform: translateX(700);

    .avatar {
        height: 610px;
    }

    .yellow-box {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 355px;
        height: 58px;
        box-sizing: border-box;
        padding-left: 20px;
        background-color: colors.$yellow;
        display: flex;

        h1 {
            margin: auto 0;
        }
    }

    .blue-box {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 300px;
        height: 58px;

        background-color: colors.$blue;
    }
}
</style>

<style>
.marquee-text-text {
    padding-right: 4px;
}
</style>
