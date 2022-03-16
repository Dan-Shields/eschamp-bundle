import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import NodeCGPlugin from 'vite-plugin-nodecg'
import { globbySync } from 'globby'

export default defineConfig({
    plugins: [vue(), NodeCGPlugin()],
    build: {
        rollupOptions: {
            input: globbySync([
                './src/graphics/*.ts',
                './src/dashboard/*.ts',
                '!**.d.ts',
            ]),
        },
    },
})
