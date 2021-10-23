import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import md from 'rollup-plugin-md';
import vueDemoPlugin from './plugins/vueDemoPlugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), md(), vueDemoPlugin],
})
