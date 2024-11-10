const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    'username': 'carlos@buscaMarido.com',
    'password': 'rarrrww123',
    'url': 'http://localhost:3001/',
  }
});
