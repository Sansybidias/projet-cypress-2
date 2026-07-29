///<reference types="cypress" />

class loginPom {

    elements = {
        username:() => cy.get("#user-name"),
        password:() => cy.get("#password"),
        loginButton:() => cy.get("#login-button"),
        msgErreur:() => cy.get("[data-test='error']"),   
    };

    saisirUsername(u) {
        this.elements.username().type(u);
    }
    saisirPassword(u) {
        this.elements.password().type(u);
    }
    clickLogin() {
        this.elements.loginButton().click();
    }
    getErrormsg() {
        return this.elements.msgErreur();
    }

    goLogin (u, p) {
        this.saisirUsername(u);
        this.saisirPassword(p);
        this.clickLogin();
    }

}

export default new loginPom();