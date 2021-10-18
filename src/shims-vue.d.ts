// 解决 ts 在引入 .vue 文件报错的问题
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}