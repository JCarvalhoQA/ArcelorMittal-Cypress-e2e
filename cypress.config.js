const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://loja.arcelormittal.com.br', // Define o baseUrl
    specPattern: 'cypress/integration/specs/**/*.spec.js',
    pageLoadTimeout: 60000, // 60 segundos
    defaultCommandTimeout: 10000, // Timeout padrão para comandos
    viewportWidth: 1920,
    viewportHeight: 1080,
    browser: 'chrome, edge',
    setupNodeEvents(on, config) {
      // configure plugins here if needed
    },
  },
});
