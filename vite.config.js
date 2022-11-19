import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vutejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
    ],
});
