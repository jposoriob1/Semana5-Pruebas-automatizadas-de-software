const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    'username': 'c.bayona@uniandes.edu.co',
    'password': 'miau1234567890',
    'url': 'http://localhost:3001/',
  }
});
