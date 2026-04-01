import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/', // <--- Add this line exactly like this
  plugins: [react()],
})
