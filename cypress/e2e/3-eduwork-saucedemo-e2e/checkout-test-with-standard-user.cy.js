/// <reference types="cypress" />

describe('Checkout test with standard_user credentials', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Should login with correct credential', () => {
        cy.fixture("login-with-valid-credentials").then(user => {
            const username = user.username_standard
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            // Should be on a new URL which includes '/inventory.html' 
            cy.url().should('include', '/inventory.html')

            cy.get('#add-to-cart-sauce-labs-bike-light').click()

            cy.contains('1').click()

            cy.url().should('include', '/cart.html')

            cy.get('#checkout').click()

            cy.get('span').should('be.visible').and('contain.text', 'Checkout: Your Information')

        })
    })

    // Fill customer personal information
    // it('Should fill customer personal information', () => {
    //     cy.fixture("personal-information").then(user => {
    //         const firstname = user.firstname
    //         const lastname = user.lastname
    //         const postalcode = user.postalcode

    //         cy.FillPersonalInformation(firstname, lastname, postalcode)

    //         cy.get('span').should('be.visible').and('contain.text', 'Checkout: Your Information')

            // cy.url().should('include', '/checkout-step-two.html')

            // cy.get('#finish').click()

            // cy.get('span').should('be.visible').and('contain.text', 'Checkout: Complete!')
    //     })
    // })
})