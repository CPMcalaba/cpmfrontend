import { createApp } from 'vue'
import Vue3Marquee from 'vue3-marquee'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/cpm_api/users/'
createApp(App).use(store).use(router, axios, Vue3Marquee).mount('#app')
