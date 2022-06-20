// 解决 ts 在引入 .vue 文件报错的问题
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}

// 解决 ts 在引入 .md 文件报错的问题
declare module '*.md' {
    const string: String
    export default string
}

declare module "*.png" {
    export default String;
}