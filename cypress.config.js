const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  viewportWidth: 1400,
  viewportHeight: 1000,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome/individual",
    reportFilename: "[status]_[datetime]-[name]-report",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: "https://www.ubank.com.au",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
