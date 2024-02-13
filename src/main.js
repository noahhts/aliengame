import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import Artist from './components/Artist.vue'
import Baker from './components/Baker.vue'
import Mechanic from './components/Mechanic.vue'

const app = createApp(App)

app.use(createPinia())

app.component('artist', Artist)
app.component('baker', Baker)
app.component('mechanic', Mechanic)

app.mount('#app')
