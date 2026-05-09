const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "cypress/cucumber-report",

    metadata: {
        browser: {
            name: "chrome",
            version: "latest",
        },
        device: "Local test machine",
        platform: {
            name: "windows",
            version: "11",
        },
    },

    customData: {
        title: "Execution Info",
        data: [
            { label: "Project", value: "Cypress Cucumber" },
            { label: "Release", value: "1.0.0" },
            { label: "Cycle", value: "Smoke Tests" },
        ],
    },
});