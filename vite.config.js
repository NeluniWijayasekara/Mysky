import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Mysky/",  // Ensure this matches your GitHub repository name
  plugins: [react()],
})
