///<reference types="cypress" />

class cartPom {

    elements = {
        prod :() => cy.get("[data-test='inventory-item-name']"),
        price :() => cy.get("[data-test='inventory-item-price']"),
        shop :() => cy.get("[data-test='continue-shopping']"),
        checkoutButton: () => cy.get('[data-test="checkout"]')
    };

    verifyprod() {
        this.elements.prod().should('be.visible');
    }
    verifyProductPrice(price) {
        this.elements.productPrice().should('be.visible').and('contain', price);
    }
    clickContinue () {
        this.elements.shop().click();
    }
    verifyProductsInCart() {
    this.elements.prod().should('have.length', 2);
    this.elements.prod().eq(0).should('contain', 'Sauce Labs Backpack');
    this.elements.prod().eq(1).should('contain', 'Sauce Labs Bike Light');
    }

    clickCheckout() {
    this.elements.checkoutButton().click();
    }
}
export default new cartPom();