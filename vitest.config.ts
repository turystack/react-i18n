import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    // use-intl is linked from a sibling package whose store resolves another
    // React; its hooks must run on this package's copy, or every render fails
    // with "Invalid hook call".
    dedupe: ['react', 'react-dom'],
  },
  test: {
    environment: 'jsdom',
    server: {
      deps: {
        inline: ['use-intl'],
      },
    },
    setupFiles: ['./vitest.setup.ts'],
  },
})
