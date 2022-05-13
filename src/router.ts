import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import ButtonDemo from './components/ButtonDemo/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo/DialogDemo.vue'
import InputDemo from './components/InputDemo/InputDemo.vue'
import TabsDemo from './components/TabsDemo/TabsDemo.vue'
import SwitchDemo from './components/SwitchDemo/SwitchDemo.vue'
import ContainerDemo from './components/ContainerDemo/ContainerDemo.vue'
import LayoutDemo from './components/LayoutDemo/LayoutDemo.vue'
import { h } from "vue"
import Markdown from './components/Markdown.vue'
import Install from './markdowns/Install.md'
import Intro from './markdowns/Intro.md'
import GetStarted from './markdowns/GetStarted.md'

const hashHistory = createWebHashHistory()
const md = content => h(Markdown, { content, key: content })
export const router = createRouter({
    history: hashHistory,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc",
            component: Doc,
            children: [
                { path: "", redirect: "/doc/intro" },
                { path: "intro", component: md(Intro) },
                { path: "install", component: md(Install) },
                { path: "get-started", component: md(GetStarted) },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
                { path: "container", component: ContainerDemo },
                { path: "input", component: InputDemo },
                { path: "layout", component: LayoutDemo },
            ]
        }
    ]
})
