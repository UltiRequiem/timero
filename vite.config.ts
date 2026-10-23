import { defineConfig } from "vitest/config";

// served from its own domain (see public/CNAME), so assets live at the root
export default defineConfig({
  base: "/",
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
