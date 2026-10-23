import { defineConfig } from "vitest/config";

// served from https://ulti.js.org/timero/ (a project page), so asset URLs must be relative
export default defineConfig({
  base: "./",
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["src/utils.ts"],
      reporter: ["text", "lcov"],
    },
  },
});
