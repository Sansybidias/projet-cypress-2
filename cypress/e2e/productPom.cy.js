///<reference types="cypress" />
import loginPom from "../pages/loginPom.page" ;
import productPom from "../pages/productPom.page" ;

describe('ajouter des produits', () => {
    
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        loginPom.goLogin("standard_user", "secret_sauce");
        cy.url().should('include', '/inventory.html');
    });


    it('ajouter un produit ', () => {
        productPom.clickButtonAdd1();
        productPom.clickButtonAdd2();
        productPom.view();
        productPom.verify();
        productPom.clickButtonCard();  
        cy.url().should('include', '/cart.html');    
    });
    
});