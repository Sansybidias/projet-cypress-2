///<reference types="cypress" />
import loginPom from "../pages/loginPom.page" ;

describe('Login avec le POM', () => {
    beforeEach('setup', () => {
        cy.visit("https://www.saucedemo.com/")
    });

    it('login with POM valide', () => {
        loginPom.goLogin("standard_user", "secret_sauce");
        cy.url().should('include', '/inventory.html');
    });

    it('login with POM invalide', () => {
        loginPom.goLogin("standard_us", "secret_sau");
        loginPom.getErrormsg();
    });
    
});