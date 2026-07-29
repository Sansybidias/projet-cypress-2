///<reference types="cypress" />

describe('authentification sauce demo', () => {

     beforeEach('setup', () => {
            cy.visit('https://www.saucedemo.com/');
        });
        
        afterEach('teardown', function() {
            /*if(this.currentTest.state === 'failed') {
                cy.screenshot('failure-${this.currentTest.title}'); //si le test a echoué il fait un screenshot et lui donne un titre 
             }*/
            cy.clearAllCookies();
            cy.clearAllLocalStorage();
            sessionStorage.clear();
        
        });

    it('login valide ', {tags:'@smoke'}, () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce'); 
        cy.get('#login-button').click();

        // Assertions 

        cy.url().should('include','/inventory.html')
    });

    it('login invalide',{tags:'@sandy'}, () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_u');
        cy.get('#password').type('secret_sau'); 
        cy.get('#login-button').click();

        // Assertions
        cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface');

        
    });
});