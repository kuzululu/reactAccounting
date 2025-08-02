import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    base: "/reactAccounting"
    // host: '0.0.0.0',
    // port: Number(process.env.VITE_PORT)
  }
})
