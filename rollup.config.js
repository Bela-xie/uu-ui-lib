// 运行 rollup -c 命令，以执行该 rollup.config.js 文件
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"

export default {
    input: './src/lib/index.ts',
    output: {
        globals: {
            vue: 'Vue'
        },
        name: 'UU',
        file: 'dist/lib/uu.js',
        format: 'umd',
        plugins: [terser()]
    },
    plugins: [
        scss({ include: /\.scss$/, sass: dartSass }),
        // 下面的代码，vue···一定要写在 esbuild···之前，否则会一直报错 Error: Transform failed with 1 error:·····
        // 想了很多办法，找了很久的解决办法才发现 vue···一定要写在esbuild···之前
        // 原因是：ensure decorators before export，网址：https://github.com/vitejs/vite/issues/2776
        vue({
            include: /\.vue$/,
        }),
        esbuild({
            include: /\.[jt]s$/,
            minify: process.env.NODE_ENV === 'production',
            target: 'es2015'
        })
    ],
}