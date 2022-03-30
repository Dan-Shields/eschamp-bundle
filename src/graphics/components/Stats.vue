<template>
    <div class="bot" v-if="bot">
        <img class="avatar" :src="bot?.Image?.[0].url ?? ''" />
        <div class="profile">
            <img v-if="botRace" class="race" :src="botRace" />
            <h1 class="name">{{ bot?.Name }}</h1>
            <h4 class="author">{{ bot?.Author }}</h4>
            <h4 class="lang">{{ bot?.Language }}</h4>
        </div>
        <div class="stats">
            <div
                v-for="i in 4"
                class="stat"
                v-show="bot[`Stat${i}` as (keyof repDefaults.Bot)]"
            >
                <h2 class="label">
                    {{ bot[`Stat${i}` as (keyof repDefaults.Bot)]  }}
                </h2>
                <h1 class="value">
                    {{ bot[`Stat${i}Val` as (keyof repDefaults.Bot)] }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useReplicant } from 'nodecg-vue-composable'

import * as repDefaults from '../../replicants'
import { raceToImg } from './raceToImg'

const scoreboard = useReplicant('scoreboard', 'eschamp-bundle', {
    defaultValue: repDefaults.scoreboard,
})

const bots = useReplicant('bots', 'eschamp-bundle', {
    defaultValue: repDefaults.bots,
})

const searchParams = new URLSearchParams(window.location.search)
const botNum = searchParams.get('bot') === '2' ? 'bot2' : 'bot1'

const bot = computed(() => {
    if (!bots?.data || !scoreboard?.data?.[botNum]) return null

    return bots.data[scoreboard.data[botNum].id]
})

const botRace = computed(() => {
    if (!bot?.value?.Race) return null
    return raceToImg(bot.value.Race)
})
</script>

<style lang="scss" scoped>
@use '../styles/colors.scss';

.banner {
    position: absolute;
    top: 450px;
    left: -1920px;
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
    > * {
        position: absolute;
    }

    .avatar {
        top: 255px;
        left: 222px;
        height: 610px;
    }

    .profile {
        background-color: colors.$yellow;
        width: 375px;
        height: 175px;
        top: 72px;
        left: 1356px;
        padding-left: 125px;
        color: colors.$blue;

        font-size: 1.25em;

        .race {
            position: absolute;
            top: 50%;
            left: 62px;
            height: 50%;
            transform: translate(-50%, -50%);
        }

        h1 {
            margin-bottom: 10px;
        }

        h4 {
            margin: 8px 0;
        }
    }

    .stats {
        left: 960px;
        top: 320px;
        width: 895px;

        .stat {
            width: 100%;
            box-sizing: border-box;
            padding: 20px 60px;
            margin-bottom: 15px;

            background-color: rgba(0, 0, 0, 0.87);

            display: flex;
            justify-content: space-between;

            .label {
                color: colors.$lightblue;
                font-size: 2.5em;
                margin: auto 0;
            }

            .value {
                color: white;
                font-size: 4em;
                margin: 0;
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
