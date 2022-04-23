<template>
    <div class="credits-container">
        <div class="credits" ref="creditsRef">
            <h1>{{ creditsText }}</h1>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import * as repDefaults from '../../replicants/index'

import { useReplicant } from 'nodecg-vue-composable'
import anime from 'animejs'

const credits = useReplicant('credits', 'eschamp-bundle', { defaultValue: '' })

const patrons = useReplicant('patrons', 'eschamp-bundle', {
    defaultValue: repDefaults.patrons,
})

const creditsRef = ref<HTMLElement>()
const creditsText = ref('')

const setup = () => {
    if (!credits?.data || !patrons?.data) {
        setTimeout(setup, 100)
        return
    }

    creditsText.value = credits.data.replaceAll(
        ':patreon:',
        patrons.data.map((patron) => patron.Name).join('\n')
    )

    const animate = () => {
        const height = creditsRef.value?.clientHeight

        if (!height) {
            nextTick(animate)
            return
        }

        anime({
            targets: [creditsRef.value],
            translateY: `${-height - 552}px`,
            duration: (height / 50) * 1000,
            easing: 'linear',
        })
    }

    nextTick(animate)
}

onMounted(() => setTimeout(setup, 1500))
</script>

<style lang="scss" scoped>
.credits-container {
    position: absolute;
    top: 318px;
    left: 0;
    width: 100%;
    height: 552px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.459);
    color: white;
    overflow: hidden;
    .credits {
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        h1 {
            white-space: pre-wrap;
            margin: 0;
            text-shadow: 2px 2px black;
        }
    }
}
</style>
