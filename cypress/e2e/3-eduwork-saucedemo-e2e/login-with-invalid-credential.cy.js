/// <reference types="cypress" />

describe('Login Swag Labs with invalid credential', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Should login with invalid credential', () => {
        cy.fixture("invalid-login").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithInvalidCredential(username, password)

            cy.get('h3').should('be.visible').and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
        })
    })
})