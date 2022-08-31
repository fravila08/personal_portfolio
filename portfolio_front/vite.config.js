import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/static/',
  build:{
    outDir: '../portfolio_back/static',
    emptyOutDir: true,
  },
  define: {
    "process.env": {},
  },
  plugins: [react()],
  devtool: 'source-map'
})