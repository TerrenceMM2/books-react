import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
// TanStack Router - https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing#configuration-with-vite
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react()
  ],
})
