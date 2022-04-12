<template>
    <div class="losers-bracket">
        <img class="bg" :src="bg" />

        <div v-if="bracket?.data" class="bracket">
            <div class="round" v-for="(round, roundIndex) in bracket.data">
                <div class="match" v-for="(match, matchIndex) in round">
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
import bg from '../../assets/Brackets/Losers.png'

import * as repDefaults from '../../../replicants'

const bracket = useReplicant('losersBracket', 'eschamp-bundle', {
    defaultValue: repDefaults.losersBracket,
})

const bots = useReplicant('bots', 'eschamp-bundle', {
    defaultValue: repDefaults.bots,
})

const nameFromId = (id: string) => {
    if (!bots?.data) return null
    return bots.data[id]?.Name
}
</script>

<style lang="scss" scoped>
.losers-bracket {
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
    }

    .bracket {
        position: absolute;
        top: 364px;
        left: 84px;
        height: 511px;
        width: 1535px;

        .round {
            height: 100%;
            width: 333px;

            position: absolute;
            top: 0;

            &:nth-child(1) {
                padding-top: 56px;

                .match {
                    margin-bottom: 24px;
                    &:nth-child(2) {
                        margin-bottom: 68px;
                    }
                }
            }

            &:nth-child(2) {
                left: 333px + 82px;

                .match {
                    margin-bottom: 44px;
                }
            }

            &:nth-child(3) {
                left: (333px + 82px) * 2 + 5px;
                padding-top: 63px;

                .match {
                    margin-bottom: 178px;
                }
            }

            &:nth-child(4) {
                left: (333px + 82px) * 3 - 9px;
                padding-top: 19px;
                .match {
                    margin-bottom: 176px;
                }
            }

            .match {
                width: 100%;
                height: 84px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-bottom: 21px;

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
