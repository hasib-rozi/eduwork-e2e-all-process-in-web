/// <reference types="cypress" />

describe('Login Swag Labs with valid credentials', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Should login with correct credential', () => {
        cy.fixture("login-with-valid-credentials").then(user => {
            const username = user.username_performance
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.url().should('include', '/inventory.html')
        })
    })
})