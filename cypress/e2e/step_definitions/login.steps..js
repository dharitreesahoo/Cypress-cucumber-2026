import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage();

Before(function () {
    cy.fixture("login").then((data) => {
        this.testData = data;
    });
});

Given("I open the login page", () => {
    loginPage.visit();
});

When("I enter valid credentials", function () {
    cy.login(this.testData.username, this.testData.password);
});

Then("I should see the dashboard", () => {
    loginPage.verifyDashboard();
});