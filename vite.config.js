import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Mysky/",  // Set the base to match your GitHub repository name
  plugins: [react()],
})
