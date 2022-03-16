import { createApp } from 'vue'
import './styles/font.scss'

import Ticker from './components/Ticker.vue'

const app = createApp(Ticker)
app.mount('#app')
