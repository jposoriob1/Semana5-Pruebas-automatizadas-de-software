const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    'username': 'camila@GIT_DESTROYER.com',
    'password': 'YOUR_COMMITS_SHALL_NOT_PASS.',
    'url': 'http://localhost:3001/',
  }
});
