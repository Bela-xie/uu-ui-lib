import './lib/index.scss'
import './index.scss'
import { router } from './router';
import { createApp } from 'vue'
import App from './App.vue'


createApp(App).use(router).mount('#app')
