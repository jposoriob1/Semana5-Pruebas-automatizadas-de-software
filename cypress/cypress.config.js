const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    'username': 'camis.069@gmail.com',
    'password': 'OSO*994290',
    'url': 'http://localhost:3001/',
  }
});
