///<reference types="cypress" />

// const cypress = require("cypress");

describe('authentification sauce demo', () => {

     beforeEach('setup', () => {
        let environnement = Cypress.env('var');
        let url ;

        switch (environnement ) {
            case ('Dev'):
                url = 'https://www.saucedemo.com/'
                break;
            case ('Recette'):
                url = 'https://www.saucedemo.com/Recette/'
                break;
            case ('Integration'):
                url = 'https://www.saucedemo.com/Integration/'
                break;
            case ('Preprod'):
                url = 'https://www.saucedemo.com/Preprod/'
                break;
            default:
                url = 'https://www.saucedemo.com/'
                break;
        }
            cy.visit(url);
        });
        
        afterEach('teardown', function() {
            /*if(this.currentTest.state === 'failed') {
                cy.screenshot('failure-${this.currentTest.title}'); //si le test a echoué il fait un screenshot et lui donne un titre 
             }*/
            cy.clearAllCookies();
            cy.clearAllLocalStorage();
            sessionStorage.clear();
        
        });

    it('login valide', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce'); 
        cy.get('#login-button').click();

        // Assertions 

        cy.url().should('include','/inventory.html')
    });

    it('login invalide', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_u');
        cy.get('#password').type('secret_sau'); 
        cy.get('#login-button').click();

        // Assertions
        cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface');

        
    });
});