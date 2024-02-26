import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir: 'client',
    rollupOptions:{
      input:{
        main: './src/main.jsx',
        login: './login.html',
        signup: './signup.html'
      }
    }
  },
  plugins: [react()],
    server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
