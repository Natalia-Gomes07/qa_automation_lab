
const preencherCadastro = ({
  email = `teste${Date.now()}@exemplo.com`,
  nome = 'Usuário Teste',
  senha = 'Teste123',
  confirmacao = 'Teste123'
} = {}) => {
  cy.get('.card__register input[name="email"]').type(email)

  if (nome) {
    cy.get('.card__register input[name="name"]').type(nome)
  }

  cy.get('.card__register input[name="password"]').type(senha)
  cy.get('.card__register input[name="passwordConfirmation"]').type(confirmacao)
}

describe('Cadastro de usuário', () => {

  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/')
    cy.contains('Registrar').click()
    cy.contains('Cadastrar').should('be.visible')
  })

  it('CT-001 - Deve impedir cadastro sem nome', () => {
    preencherCadastro({ nome: '' })

    cy.contains('Cadastrar').click()
    cy.contains('Nome não pode ser vazio').should('be.visible')
  })

  it('CT-002 - Deve impedir cadastro com e-mail inválido', () => {
    preencherCadastro({ email: 'teste@' })

    cy.contains('Cadastrar').click()
    cy.contains('Formato inválido').should('be.visible')

    cy.get('.card__register input[name="email"]')
      .should('have.prop', 'validity')
      .its('typeMismatch')
      .should('be.true')
  })

  it('CT-003 - Deve impedir cadastro com senhas diferentes', () => {
    preencherCadastro({ confirmacao: 'Teste456' })

    cy.contains('Cadastrar').click()
    cy.contains('As senhas não são iguais').should('be.visible')
  })

  it('CT-004 - Deve cadastrar usuário com dados válidos', () => {
    preencherCadastro()

    cy.contains('Cadastrar').click()
    cy.contains('foi criada com sucesso').should('be.visible')
  })

})
