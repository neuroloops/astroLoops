import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import WindiCSS from 'vite-plugin-windicss'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [WindiCSS()]
  }
})