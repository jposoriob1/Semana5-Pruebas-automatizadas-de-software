const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    'username': 'USURAIO@USUARIO.com',
    'password': 'CONTRASEÑA123',
    'url': 'http://localhost:3001/',
  }
});
