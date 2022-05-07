// import './lib/index.scss'
import './index.scss'
import { router } from './router';
import { createApp } from 'vue'
import App from './App.vue'
import "github-markdown-css"
import Markdown from './components/markdown.vue'

const app = createApp(App)
app.component("markdown", Markdown)
app.use(router).mount('#app')

