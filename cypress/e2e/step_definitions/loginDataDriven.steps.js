import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage();


// STEP 2: Data-driven login (Scenario Outline)
When(
    "I enter username {string} and password {string}",
    (username, password) => {

        // Direct use of values from Examples table
        cy.login(username, password);
    }
);

