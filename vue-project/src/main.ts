import { createApp, ref } from 'vue'
import App from './App.vue'

const app = createApp(App)

const count = ref(0)
app.provide('count', count)

app.mount('#app')
