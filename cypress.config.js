const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({

  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",

    async setupNodeEvents(on, config) {

      // 👉 cucumber plugin
      await addCucumberPreprocessorPlugin(on, config);

      // 👉 esbuild for .feature files
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      config.env.stepDefinitions =
        "cypress/e2e/step_definitions/**/*.js";

      return config;
    },
  },
});