import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then('page should be accessible', () => {

    cy.injectAxe();

    cy.checkA11y(null, null, (violations) => {

        cy.task('saveAccessibilityReport', {
            page: Cypress.currentTest.title,
            violations
        });

    });

});