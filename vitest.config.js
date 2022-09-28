import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./__tests__/setup.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      './__tests__/e2e/**',
    ],
    coverage: {
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      reporter: process.env.GITHUB_ACTIONS ? ['text', 'json-summary', 'json'] : 'html',
    },
  },
})
