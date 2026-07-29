///<reference types="cypress" />
import loginPom from "../pages/loginPom.page" ;
import productPom from "../pages/productPom.page" ;
import cartPom from "../pages/cartPom.page";

describe('verfication de produit', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        loginPom.goLogin("standard_user", "secret_sauce");
        cy.url().should('include', '/inventory.html');
        productPom.clickButtonAdd();
        productPom.view();
        productPom.verify();
        productPom.clickButtonCard();  
        cy.url().should('include', '/cart.html');
    });

    it('verfier le produit ', () => {
        cartPom.verifyprod() ; 
        cartPom.verifyProductPrice("$29.99");
        cartPom.clickContinue () ;
        cy.url().should('include', '/inventory.html');
    });
    
    it("Vérifier les deux produits puis accéder au Checkout", () => {

        inventoryPom.addBackpackToCart();
        inventoryPom.addBikeLightToCart();
        inventoryPom.clickCart();
        cartPom.verifyProductsInCart();
        cartPom.clickCheckout();
        cy.url().should('include', '/checkout-step-one.html');
});
});