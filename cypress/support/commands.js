// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })

Cypress.Commands.add('LoginWithValidCredential', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear
    cy.get('#user-name').type(username)
    cy.get('#password').clear
    cy.get('#password').type(password, { sensitive: true })  // Show asterisk character in password
    cy.get('#login-button').click()
})

Cypress.Commands.add('LoginWithInvalidCredential', (username, password) => {
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.get('#user-name').clear
  cy.get('#user-name').type(username)
  cy.get('#password').clear
  cy.get('#password').type(password, { sensitive: true })  // Show asterisk character in password
  cy.get('#login-button').click()
})

// Cypress.Commands.add('FillPersonalInformation', (firstname, lastname, postalcode) => {
//   cy.clearCookies()
//   cy.clearLocalStorage()
//   cy.get('#first-name').clear
//   cy.get('#first-name').type(firstname)
//   cy.get('#last-name').clear
//   cy.get('#last-name').type(lastname)
//   cy.get('#postal-code').clear()
//   cy.get('#postal-code').type(postalcode)
//   cy.get('#continue').click()
// })