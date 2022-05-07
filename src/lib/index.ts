// 等价于 import Button from "./Button.vue";export default Button
import "./index.scss"
export { default as Button } from './Button.vue'
export { default as Dialog } from './Dialog.vue'
export { default as Switch } from './Switch.vue'
export { default as Tabs } from './Tabs.vue'
export { default as Tab } from './Tab.vue'
export { openDialog as openDialog } from './openDialog'