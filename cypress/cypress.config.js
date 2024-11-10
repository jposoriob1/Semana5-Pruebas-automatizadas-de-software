const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    'username': 'Carlitos.Bayona@playboy.com',
    'password': 'miaumiauGRRRR',
    'url': 'http://localhost:3001/',
  }
});
