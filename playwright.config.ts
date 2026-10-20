import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: false,
  workers: 1,
  use: { baseURL: "http://localhost:3001", channel: "msedge", headless: true },
  webServer: {
    command: "node node_modules/next/dist/bin/next start -p 3001",
    url: "http://localhost:3001",
    reuseExistingServer: !process.env.CI,
  },
  reporter: "list",
});
