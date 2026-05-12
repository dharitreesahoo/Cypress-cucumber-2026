module.exports = {
    stepDefinitions: "cypress/e2e/step_definitions/**/*.js",
    json: {
        enabled: true,
        output: "cypress/cucumber-report/cucumber-json/cucumber.json",
    },
};