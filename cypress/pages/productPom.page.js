///<reference types="cypress" />

class productPom {
   
    elements = {
        clickAdd1 : () => cy.get("[data-test='add-to-cart-sauce-labs-backpack']"),
        clickAdd2 : () => cy.get("[data-test='add-to-cart-sauce-labs-bike-light']"),
        viewnumber : () => cy.get("[data-test='shopping-cart-badge']"),
        verifyRemove : () => cy.get("[data-test='remove-sauce-labs-backpack']"),
        verifyBikeLight: () => cy.get('[data-test="remove-sauce-labs-bike-light"]'),
        clickCard : () => cy.get ("[data-test='shopping-cart-link']")
        
    };

    clickButtonAdd1 () {
        this.elements.clickAdd1().click();
    }
    clickButtonAdd2 () {
        this.elements.clickAdd2().click();
    }
    view () {
        this.elements.viewnumber().should('be.visible')
    }
    verify () {
        this.elements.verifyRemove().should('be.visible');
        this.elements.verifyBikeLight().should('be.visible')
    }
    clickButtonCard () {
        this.elements.clickCard().click();
    }
    
}

export default new productPom();