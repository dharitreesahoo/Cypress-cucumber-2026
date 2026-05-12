const { defineConfig } = require("cypress");

const fs = require("fs");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({

  e2e: {

    specPattern: "cypress/e2e/**/*.feature",

    async setupNodeEvents(on, config) {

      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Accessibility Report Task
      on("task", {

        saveAccessibilityReport({ page, violations }) {

          const reportFolder = "./cypress/accessibility-report";

          const reportFile =
            "./cypress/accessibility-report/accessibility-report.json";

          // Create folder
          if (!fs.existsSync(reportFolder)) {

            fs.mkdirSync(reportFolder, {
              recursive: true
            });
          }

          let reportData = [];

          // Read existing data
          if (fs.existsSync(reportFile)) {

            reportData = JSON.parse(
              fs.readFileSync(reportFile, "utf8")
            );
          }

          // Add current test violations
          reportData.push({
            page,
            violations
          });

          // Save updated report
          fs.writeFileSync(
            reportFile,
            JSON.stringify(reportData, null, 2)
          );

          return null;
        }

      });

      return config;
    },

  },

});