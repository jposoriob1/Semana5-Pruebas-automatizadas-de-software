const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    'username': 'jaimea111@gmail.com',
    'password': 'Warframe2024.',
    'url': 'http://localhost:3001/',
  }
});
