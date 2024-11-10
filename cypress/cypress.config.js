const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    'username': 'juan@noPudoIrAlRockAlParque.com',
    'password': ':(((((((((',
    'url': 'http://localhost:3001/',
  }
});
