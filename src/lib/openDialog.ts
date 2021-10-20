import Dialog from "./Dialog.vue"
import { createApp, h } from "vue"
export const openDialog = (options) => {
    const { title, content, ok, cancel } = options
    const div = document.createElement("div")
    document.body.appendChild(div)
    const close = () => {
        app.unmount()
        div.remove()
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,
                // 监听 "update:visible" 事件，即在 Dialog 中 context.emit("update:visible")触发
                "onUpdate:visible": newVisible => {
                    if (newVisible === false) {
                        close()
                    }
                },
                ok,
                cancel
            }, {
                title,
                content
            })
        }
    })
    app.mount(div)
}