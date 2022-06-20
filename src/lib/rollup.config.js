// 运行 rollup -c 命令，以执行该 rollup.config.js 文件
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
// import vue from '@vitejs/plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"
import typescript from 'rollup-plugin-typescript2';
const overrides = {
    compilerOptions: { declaration: true }, // 生成.d.ts的文件
}
export default {
    input: './index.ts',
    output: [{
        globals: {
            vue: 'Vue'
        },
        name: 'UU',
        file: 'dist/lib/uu.esm.js',
        format: 'es',
        plugins: [terser({})]
    }],
    plugins: [
        // prefix的使用是为了防止报错：@use rules must be written before any other rules.这样改之后也没有完全解决，偶尔会成功，偶尔也会失败，失败的时候尝试多运行几次
        scss({ include: /\.scss$/, sass: dartSass, prefix: `@use "./index.scss";` }),
        // 下面的代码，vue···一定要写在 esbuild···之前，否则会一直报错 Error: Transform failed with 1 error:·····
        // 想了很多办法，找了很久的解决办法才发现 vue···一定要写在esbuild···之前
        // 原因是：ensure decorators before export，网址：https://github.com/vitejs/vite/issues/2776
        typescript({
            clean: true,
            tsconfigOverride: overrides
        }),
        vue({
            include: /\.vue$/,
        }),
        esbuild({
            include: /\.[jt]s$/,
            target: 'es2015',
        }),
    ],
}