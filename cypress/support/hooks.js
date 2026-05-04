import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("Test started");
    cy.clearCookies();
    cy.clearLocalStorage();
});

After(() => {
    cy.log("Test finished");
});