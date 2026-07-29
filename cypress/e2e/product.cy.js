///<reference types="cypress" />

describe('Ajouter un produit', () => {
    beforeEach('setup', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce'); 
        cy.get('#login-button').click();
    });

    afterEach('teardown', () => {
        
        cy.clearAllCookies();
            cy.clearAllLocalStorage();
            sessionStorage.clear();
        
    });

    it('ajouter un produit',{tags:'@smoke'}, function () {

      /*  cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce'); 
        cy.get('#login-button').click();*/


        cy.url().should('include','/inventory.html');
        cy.get("[data-test='add-to-cart-sauce-labs-backpack']").click();
        cy.get("[data-test='shopping-cart-badge']").should('be.visible');
        cy.get("[data-test='remove-sauce-labs-backpack']").should('be.visible').and('contain','Remove');
        cy.get ("[data-test='shopping-cart-link']").click();

        // Assertions
        cy.url().should('include','/cart.html')


    });
    
});