///<reference types="cypress" />
import csv from "csvtojson";

describe('authentification avec un fichier csv', () => {
    
    it('login avec un fichier csv', () => {
        cy.readFile("cypress/fixtures/jdd.csv").then((csvdata) =>{         //le then permet de convertir vers un tableau js pour lire les données 
           
           csv().fromString(csvdata).then((jsondata) => {
    
            cy.wrap(jsondata).each((user) => {

           
                cy.visit('https://www.saucedemo.com/');
                cy.get('#user-name').type(user.username);
                cy.get('#password').type(user.password);
                cy.get('#login-button').click()

                if (user.result == "success"){
                    cy.url().should('include', '/inventory.html');
                }
                else{
                    cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface');
                }
            })
        })
        })

        })
})

    