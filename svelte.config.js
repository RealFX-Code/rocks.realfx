import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess({})],

    alias: {
        '@storyblok/svelte': './node_modules/@storyblok/svelte',
        $lib: './src/lib'
    },

    kit: {
        adapter: adapter()
    }
};

export default config;
