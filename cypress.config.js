const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    
    // ← Estas 3 linhas resolvem o problema de testes rodando juntos
    experimentalSessionAndOrigin: false,
    experimentalModifyObstructiveThirdPartyCode: false,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});