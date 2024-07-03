const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://loja.arcelormittal.com.br',
    specPattern: 'cypress/integration/specs/**/*.spec.js',
    pageLoadTimeout: 60000, 
    defaultCommandTimeout: 10000, 
    viewportWidth: 1920,
    viewportHeight: 1080,
    browser: 'chrome, edge',
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // configure plugins here if needed
    },
  },
});
