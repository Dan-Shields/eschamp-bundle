<template>
    <div class="container" ref="container">
        <div class="slidein cta-slidein">
            <div class="cta">
                <h1>ESCHAMP.COM/JOIN</h1>
            </div>
        </div>

        <div class="slidein ticker-slidein">
            <div class="ticker" v-if="ticker?.data && scoreboard?.data">
                <div class="yellow-box"></div>
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
        </div>
        <div class="slidein timer-slidein">
            <div class="next-match-timer" v-if="timers?.data">
                <h3>NEXT MATCH</h3>
                <h1 style="margin-top: -5px">
                    {{ nextMatchTimer }}
                </h1>
            </div>
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

const tl = anime.timeline({
    easing: 'easeInOutExpo',
    autoplay: false,
})

onMounted(() => {
    const elements = Array.from(document.getElementsByClassName('slidein'))

    elements.forEach((el, index) => {
        if (!(el.firstChild instanceof HTMLElement)) return

        const width = window.getComputedStyle(el.firstChild)?.width
        if (!width) return

        tl.add(
            {
                targets: el,
                width,
            },
            index * 100
        )
    })

    tl.play()
})

nodecg.listenFor('show-main-ticker', () => {
    if (tl.currentTime === tl.duration) return
    console.log('SHOWING ticker')

    if (tl.direction === 'reverse') tl.reverse()
    tl.play()
})

nodecg.listenFor('hide-main-ticker', () => {
    if (tl.currentTime === 0) return
    console.log('hiding ticker')

    if (tl.direction === 'normal') tl.reverse()
    tl.play()
})
</script>

<style lang="scss" scoped>
@use '../styles/colors.scss';

.container {
    position: absolute;
    top: 935px;
    left: 0;
    height: 107px;

    > * {
        position: absolute;
        top: 0;
        height: 100%;
    }

    .slidein {
        overflow: hidden;
        width: 0;

        > * {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
        }

        &.cta-slidein {
            left: 24px;
        }

        &.ticker-slidein {
            left: 370px;
        }

        &.timer-slidein {
            left: 1650px;
        }
    }
}

.cta {
    width: 336px;
    height: 100%;
    background-color: colors.$lightblue;
    bottom: 0;

    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
        margin: 0;
        font-size: 1.55em;
    }
}

.ticker {
    width: 1270px;
    background-color: colors.$blue;
    * {
        text-transform: uppercase;
    }

    .yellow-box {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 65px;

        background-color: colors.$yellow;
    }

    .head2head {
        color: #9b9b9b;
        position: absolute;
        left: 80px;
        top: 15px;

        > div {
            margin-bottom: 15px;
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: 15px;

            &:first-child {
                color: white;
            }

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
        width: 900px;
        font-weight: 900;
        position: absolute;

        left: 350px;
    }

    .top-text {
        color: white;
        font-size: 28px;
        top: 16px;
        margin: 0;
    }

    .bottom-text {
        color: #53aee0;
        font-size: 23px;
        top: 63px;
    }
}

.next-match-timer {
    width: 250px;
    background-color: colors.$yellow;
    color: colors.$blue;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > * {
        width: 100%;
        text-align: center;
        font-size: 1.2em;
        margin: 0;
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
