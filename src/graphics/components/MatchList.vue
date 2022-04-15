<template>
    <div class="match-list">
        <img :src="bg" class="bg" />

        <div class="matches">
            <div v-for="match in matchesPopulated" class="match">
                <div v-if="match.bot1" class="bot">
                    <h1 class="name">{{ match.bot1.Name }}</h1>
                    <div class="race-container">
                        <img class="race" :src="match.bot1.race" />
                    </div>
                </div>
                <div v-if="match.bot2" class="bot right">
                    <h1 class="name">{{ match.bot2.Name }}</h1>
                    <div class="race-container">
                        <img class="race" :src="match.bot2.race" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useReplicant } from 'nodecg-vue-composable'

import * as repDefaults from '../../replicants'

import bg from '../assets/MatchList/background.png'
import { raceToImg } from '../composables/raceToImg'

const matches = useReplicant<typeof repDefaults.matches>(
    'matches',
    'eschamp-bundle',
    { defaultValue: repDefaults.matches }
)

const bots = useReplicant('bots', 'eschamp-bundle', {
    defaultValue: repDefaults.bots,
})

const matchesPopulated = computed(() => {
    if (!bots?.data || !matches?.data) return []

    return matches.data.map((match) => ({
        bot1: match.bot1
            ? {
                  Name: bots.data?.[match.bot1]?.Name,
                  race: raceToImg(bots.data?.[match.bot1]?.Race, true),
              }
            : null,
        bot2: match.bot2
            ? {
                  Name: bots.data?.[match.bot2]?.Name,
                  race: raceToImg(bots.data?.[match.bot2]?.Race, true),
              }
            : null,
    }))
})
</script>

<style lang="scss" scoped>
@use '../styles/colors.scss';

.match-list {
    position: absolute;
    top: 72px;
    left: 0;
    height: 100%;
    width: 100%;

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .matches {
        margin-top: 30px;

        .match {
            height: 200px;
            margin-bottom: 24px;

            position: relative;

            .bot {
                $offset: 175px;
                width: 720px - $offset;
                height: 100%;

                position: absolute;
                top: 0;

                left: $offset;

                color: white;

                $name-offset: 180px;

                &.right {
                    left: unset;
                    right: $offset;

                    .name {
                        right: unset;
                        left: $name-offset;
                    }

                    .race-container {
                        right: unset;
                        left: 0;
                    }
                }

                .name {
                    position: absolute;
                    margin: auto;
                    top: 50%;
                    transform: translateY(-50%);

                    right: $name-offset;

                    font-size: 2.5em;
                }

                .race-container {
                    position: absolute;
                    top: 27%;
                    height: 33%;
                    right: 0;

                    .race {
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>
