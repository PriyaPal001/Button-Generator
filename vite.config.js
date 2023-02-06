import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess'

// server.hmr.overlay = false;
// https://vitejs.dev/config/

export default defineConfig({
    base: '/Button-Generator/',
    plugins: [svelte({
        preprocess: sveltePreprocess(),
    })],
})
