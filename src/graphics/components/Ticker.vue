<template>
    <div class="container" ref="container">
        <div class="sponsors"></div>
        <div class="ticker" v-if="ticker?.data && scoreboard?.data">
            <div class="head2head">
                <div>
                    <h1>{{ bot1Name }}</h1>
                    <h1 class="score">{{ scoreboard.data.bot1.score }}</h1>
                </div>
                <div>
                    <h1>{{ bot2Name }}</h1>
                    <h1 class="score">{{ scoreboard.data.bot2.score }}</h1>
                </div>
            </div>
            <h1 class="top-text">{{ ticker.data.topText }}</h1>
            <marquee-text
                v-if="bottomText && duration"
                class="bottom-text"
                :repeat="10"
                :duration="duration"
                :key="revision"
            >
                {{ bottomText }}
            </marquee-text>
        </div>
        <div class="next-match-timer" v-if="timers?.data">
            <h2>NEXT MATCH</h2>
            <h1>
                {{ nextMatchTimer }}
            </h1>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import MarqueeText from 'vue-marquee-text-component'
import { useReplicant } from 'nodecg-vue-composable'
import formatDuration from 'format-duration'
import anime from 'animejs'

import * as repDefaults from '../../replicants'

// TICKER
const ticker = useReplicant<typeof repDefaults.ticker>(
    'ticker',
    'eschamp-bundle',
    {
        defaultValue: repDefaults.ticker,
    }
)

const revision = ref(0)
watch(
    () => ticker?.data,
    (newVal, oldVal) => {
        if (newVal?.bottomText !== oldVal?.bottomText) revision.value++
    }
)

const bottomText = computed(() => {
    if (!ticker?.data) return null
    return `${ticker?.data?.bottomText.trimEnd().split('\n').join(' | ')} | `
})
const duration = computed(() => {
    if (!bottomText.value || !ticker?.data) return null
    return Math.round(bottomText.value.length / ticker?.data?.speed)
})

// TIMERS
const timers = useReplicant<typeof repDefaults.timers>(
    'timers',
    'eschamp-bundle',
    {
        defaultValue: repDefaults.timers,
    }
)

const nextMatchTimer = computed(() => {
    if (!timers?.data || !timers.data.nextMatchPlaying) return 'SOON'
    return formatDuration(timers.data.nextMatch * 1000, { leading: true })
})

// SCOREBOARD
const scoreboard = useReplicant<typeof repDefaults.scoreboard>(
    'scoreboard',
    'eschamp-bundle',
    { defaultValue: repDefaults.scoreboard }
)

const bots = useReplicant<typeof repDefaults.bots>('bots', 'eschamp-bundle', {
    defaultValue: repDefaults.bots,
})

const bot1Name = computed(() => {
    if (!scoreboard?.data?.bot1?.id || !bots?.data) return null
    return bots.data[scoreboard.data.bot1.id]?.Name
})
const bot2Name = computed(() => {
    if (!scoreboard?.data?.bot2?.id || !bots?.data) return null
    return bots.data[scoreboard.data.bot2.id]?.Name
})

const container = ref<HTMLElement | null>(null)

const animateIn = () => {
    if (!container.value) return

    anime({
        targets: [container.value],
        top: '935px',
        easing: 'easeOutQuad',
    })
}

onMounted(() => {
    animateIn()
})
</script>

<style lang="scss" scoped>
@use '../styles/colors.scss';

.container {
    position: absolute;
    top: 1080px;
    left: 0;
    height: 107px;

    > * {
        position: absolute;
    }
    .ticker,
    .next-match-timer {
        top: 0;
        height: 100%;
    }
}

.sponsors {
    left: 24px;
    width: 250px;
    height: 8px;
    background-color: colors.$yellow;
    bottom: 0;
}

.ticker {
    left: 280px;
    width: 1356px;
    background-color: colors.$blue;
    * {
        text-transform: uppercase;
    }

    .head2head {
        color: white;
        position: absolute;
        left: 35px;
        top: 15px;

        > div {
            margin-bottom: 15px;
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: 15px;
            h1 {
                margin: 0;
                font-size: 1em;
            }
            .score {
                background-color: colors.$yellow;
                color: colors.$blue;
                width: 25px;
                padding: 5px;
                text-align: center;
            }
        }
    }

    .top-text,
    .bottom-text {
        width: 75%;
        font-weight: 900;
        position: absolute;

        left: 285px;
    }

    .top-text {
        color: white;
        font-size: 28px;
        top: 16px;
        margin: 0;
    }

    .bottom-text {
        color: #53aee0;
        font-size: 20px;
        top: 65px;
    }
}

.next-match-timer {
    left: 1650px;
    width: 250px;
    background-color: colors.$yellow;
    color: colors.$blue;

    h1,
    h2 {
        width: 100%;
        text-align: center;
        font-size: 1.5em;
        margin: 0;
        margin-top: 8px;
    }
    h1 {
        font-size: 3em;
    }
}
</style>

<style>
.marquee-text-text {
    padding-right: 4px;
}
</style>
