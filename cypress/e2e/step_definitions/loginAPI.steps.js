import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I login using ReqRes API', () => {
    cy.request({
        url: "https://jsonplaceholder.typicode.com/users",
    }).then((res) => {
        expect(res.status).to.eq(200);
    });
});

