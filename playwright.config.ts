import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Allow running tests in standard spec files or specifically in visual-qa-agent.ts
  testMatch: ['**/*.spec.ts', '**/visual-qa-agent.ts'],
  use: {
    viewport: { width: 1280, height: 800 },
    screenshot: 'only-on-failure',
  },
  reporter: 'list',
});
