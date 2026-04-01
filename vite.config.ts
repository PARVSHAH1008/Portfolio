import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // <--- THIS IS THE KEY! It must match your repo name exactly.
  plugins: [react()],
})
