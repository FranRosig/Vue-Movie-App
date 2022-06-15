import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/store"
import TripleStateSlider from '@samrahnama/triple-state-slider'
import "@samrahnama/triple-state-slider/dist/main.css"

createApp(App).use(store).use(TripleStateSlider).use(router).mount('#app')
