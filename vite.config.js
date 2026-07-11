import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Situs disajikan di sub-path GitHub Pages: https://imvinnn.github.io/portofolio/
  base: process.env.NODE_ENV === 'production' ? '/portofolio/' : '/',
  plugins: [react(), tailwindcss()],
})
