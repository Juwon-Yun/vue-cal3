import { createApp } from 'vue'
import App from './App.vue'
import scheduler from './scheduler.js'

let app = createApp(App);

app.use(scheduler).mount('#app')
