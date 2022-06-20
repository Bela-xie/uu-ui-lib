import UuMessage from './Message.vue'
import { createApp, h, VNode } from 'vue/dist/vue.esm-bundler.js'
type Options = {
    message: string | VNode;
    type?: 'info' | 'success' | 'warn' | 'error'
    showClose?: boolean
    duration?: number
    center?: boolean
    dangerouslyUseHTMLString?: boolean
}
export const openUuMessage = (options: Options | string) => {
    let mainText = ''
    // 使用返回 null 的函数将渲染一个注释
    let MainNode: VNode = h(() => null)
    const showType = (options as Options).type || 'info'
    const showClose = (options as Options).showClose || false
    const center = (options as Options).center || false
    const dangerouslyUseHTMLString = (options as Options).dangerouslyUseHTMLString || false
    let duration = (options as Options).duration || 3
    if (typeof options === 'string') {
        mainText = options
    }
    if (typeof options === 'object') {
        if (typeof options.message === 'string') {
            mainText = options.message
        } else {
            MainNode = options.message
        }
        if (options.duration === 0) {
            duration = 0
        }
    }
    const app = createApp({
        components: { UuMessage, MainNode },
        data() { return { type: showType, showClose, center, mainText, dangerouslyUseHTMLString } },
        methods: {
            unmount() { unmountApp() }
        },
        template: `<uu-message :dangerouslyUseHTMLString='dangerouslyUseHTMLString' :content="mainText" @unmountMsgApp="unmount" :type="type" :showClose="showClose" :center="center">
           ${MainNode ? '<main-node />' : ''}
        </uu-message>`
    })
    const div = document.createElement("div")
    document.body.appendChild(div)
    app.mount(div)
    const unmountApp = () => {
        app.unmount()
        div.remove()
    }
    // 如果 duration 为 0 就表示不会自动关闭消息框
    if (duration) {
        setTimeout(() => {
            unmountApp()
        }, duration * 1000)
    }
}