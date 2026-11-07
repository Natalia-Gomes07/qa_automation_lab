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

Cypress.Commands.add('cadastrarUsuario', (email, nome, senha) => {
    cy.visit('https://bugbank.netlify.app/')
    cy.contains('Registrar').click()

    cy.get('.card__register input[name="email"]').type(email)
    cy.get('.card__register input[name="name"]').type(nome)
    cy.get('.card__register input[name="password"]').type(senha)
    cy.get('.card__register input[name="passwordConfirmation"]').type(senha)

    cy.contains('Cadastrar').click()
    cy.contains('foi criada com sucesso').should('be.visible')
})