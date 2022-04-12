import { ref, watch, computed, reactive } from 'vue'
import { useReplicant } from 'nodecg-vue-composable'
import * as repDefaults from '../../replicants'

export function useMarqueeText() {
    const ticker = useReplicant<typeof repDefaults.ticker>(
        'ticker',
        'eschamp-bundle',
        {
            defaultValue: repDefaults.ticker,
        }
    )

    const patrons = useReplicant<typeof repDefaults.patrons>(
        'patrons',
        'eschamp-bundle',
        { defaultValue: repDefaults.patrons }
    )

    const text = computed(() => {
        let string = ''
        if (ticker?.data) {
            string = `${ticker.data?.bottomText
                .trimEnd()
                .split('\n')
                .join(' | ')} | `
        }
        if (patrons?.data) {
            string += `<span style="color: white">Members:</span> ${patrons.data
                ?.map((patron) => patron.Name)
                .join(' <span style="color: white">//</span> ')} | `
        }
        return string
    })

    const revision = ref(0)
    watch(text, (newVal, oldVal) => {
        if (newVal !== oldVal) revision.value++
    })

    const duration = computed(() => {
        if (!text.value || !ticker?.data) return null
        return Math.round(text.value.length / ticker?.data?.speed)
    })

    return reactive({
        text,
        revision,
        duration,
    })
}
