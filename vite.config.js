import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import pug from '@vituum/vite-plugin-pug'
import vituum from 'vituum'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => ({
  plugins: [
    tailwindcss(),
    ...(mode === 'test'
      ? []
      : [
          vituum(),
          pug({
            root: './src'
          })
        ])
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['tests/setup.js'],
    include: ['tests/**/*.test.js']
  },
  build: {
    rollupOptions: {
      plugins: [visualizer({ filename: 'stats.html', open: true })]
    }
  }
}))
