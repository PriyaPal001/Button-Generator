import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess'

// server.hmr.overlay = false;
// https://vitejs.dev/config/

export default defineConfig({
    // server: {
    //     hmr: {
    //         overlay: false,
    //     },
    // },
    plugins: [svelte({
        preprocess: sveltePreprocess(),

    })],
})
