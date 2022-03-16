import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import ControlPanel from './components/ControlPanel.vue'

library.add(faPlay)
library.add(faStop)

const app = createApp(ControlPanel)

app.use(ElementPlus)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
