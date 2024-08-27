import { defineConfig } from "cypress";

import ccTask from "@cypress/code-coverage/task";

export default defineConfig({
  env: {
    codeCoverage: {
      url: "http://localhost:3000/api/coverage",
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      ccTask(on, config);

      return config;
    },
  },
});
