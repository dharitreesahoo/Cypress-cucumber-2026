class LoginPage {
    visit() {
        cy.visit("https://www.saucedemo.com");
    }

    verifyDashboard() {
        cy.contains("Products").should("be.visible");
    }
}

export default LoginPage;