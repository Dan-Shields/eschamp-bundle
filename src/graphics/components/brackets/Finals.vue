<template>
    <div class="finals-bracket">
        <img class="bg" :src="bg" />

        <div v-if="bracket?.data" class="bracket">
            <div class="round" v-for="(round, roundIndex) in bracket.data">
                <div class="match" v-for="(match, matchIndex) in round">
                    <img class="match-bg" :src="matchBg" />
                    <div class="bot">
                        <h1>{{ nameFromId(match.bot1.id || '') }}</h1>
                        <h1>{{ match.bot1.score }}</h1>
                    </div>
                    <div class="bot">
                        <h1>{{ nameFromId(match.bot2.id || '') }}</h1>
                        <h1>{{ match.bot2.score }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useReplicant } from 'nodecg-vue-composable'
import anime from 'animejs'
import { onMounted } from 'vue'

import bg from '../../assets/Brackets/Finals_Lines.png'
import matchBg from '../../assets/Brackets/Match.png'

import * as repDefaults from '../../../replicants'

const bracket = useReplicant('finalsBracket', 'eschamp-bundle', {
    defaultValue: repDefaults.finalsBracket,
})

const bots = useReplicant('bots', 'eschamp-bundle', {
    defaultValue: repDefaults.bots,
})

const nameFromId = (id: string) => {
    if (!bots?.data) return null
    return bots.data[id]?.Name
}

const intro = () => {
    anime({
        targets: '.round',
        translateX: [-100, 0],
        opacity: [0, 1],
        delay: anime.stagger(500),
        duration: 750,
        easing: 'easeOutQuad',
        complete: () => {
            anime({
                targets: '.bg',
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutQuad',
            })
        },
    })
}

onMounted(() => setTimeout(intro, 1500))
</script>

<style lang="scss" scoped>
.finals-bracket {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1000;
        opacity: 0;
    }

    .bracket {
        position: absolute;
        top: 0;
        left: 237px;
        height: 511px;
        width: 1535px;

        .round {
            height: 100%;
            width: 333px;

            position: absolute;
            top: 0;

            opacity: 0;

            &:nth-child(1) {
                padding-top: 752px;
            }

            &:nth-child(2) {
                left: 333px + 75px;
                padding-top: 601px;
            }

            &:nth-child(3) {
                left: (333px + 77px) * 2 - 1px;
                padding-top: 469px;
                display: flex;
                width: 333px * 2 + 103px;
                justify-content: space-between;

                > .match {
                    width: 333px;
                }
            }

            .match {
                width: 100%;
                height: 84px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-bottom: 21px;

                .match-bg {
                    position: absolute;
                    transform: translate(-38px, -40px);
                    z-index: -5;
                }

                .bot {
                    display: flex;
                    width: 100%;
                    height: 38px;
                    justify-content: space-between;

                    padding: 0 10px;
                    box-sizing: border-box;

                    h1 {
                        margin: 0;
                        color: white;
                        margin: auto 0;

                        &:first-child {
                            font-size: 1.55em;
                        }

                        &:last-child {
                            width: 50px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
}
</style>
