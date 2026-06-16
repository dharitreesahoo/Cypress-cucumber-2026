// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
    cy.get("#login-button").click();
});
Cypress.Commands.add('checkAccessibility', () => {

    cy.injectAxe();

    cy.checkA11y(null, {
        includedImpacts: ['critical', 'serious']
    });

});
Cypress.Commands.add("apiLogin", () => {

    cy.request({
        method: "POST",
        url: "https://reqres.in/api/login",
        body: {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        }
    }).then((response) => {

        expect(response.status).to.eq(200);

        const token = response.body.token;

        Cypress.env("token", token);

    });

});