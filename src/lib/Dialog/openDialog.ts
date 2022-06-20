import UuDialog from "./Dialog.vue"
import { createApp, h } from "vue"
export const openUuDialog = (options) => {
    const { title, content, ok, cancel } = options
    const div = document.createElement("div")
    document.body.appendChild(div)
    const close = () => {
        app.unmount()
        div.remove()
    }
    const app = createApp({
        render() {
            return h(UuDialog, {
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
                title: () => title,
                content: () => content
            })
        }
    })
    app.mount(div)
}