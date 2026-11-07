describe('Autenticação de usuário', () => {

    it('CT-005 - Deve realizar login com credenciais válidas', () => {

        const email = `teste${Date.now()}@exemplo.com`
        const senha = 'Teste123'

        cy.cadastrarUsuario(email, 'Usuário Teste', senha)
                
        cy.get('#modalText').invoke('text').then((mensagem) => {
            const numeroConta = mensagem.match(/\d+-\d+/)[0]
            cy.wrap(numeroConta).as('numeroConta')
        })

        cy.get('#btnCloseModal').click()

        cy.get('.card__login input[name="email"]').type(email)
        cy.get('.card__login input[name="password"]').type(senha)
        cy.contains('button', 'Acessar').click()

        cy.contains('Usuário Teste').should('be.visible')

        
        cy.get('@numeroConta').then((numeroConta) => {
            cy.get('#textAccountNumber span')
                .should('have.text', numeroConta)
        })     
    })

})