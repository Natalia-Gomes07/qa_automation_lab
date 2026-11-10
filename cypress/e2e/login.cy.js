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

        cy.realizarLogin(email, senha)
        cy.contains('Usuário Teste').should('be.visible')

        cy.get('@numeroConta').then((numeroConta) => {
            cy.get('#textAccountNumber span')
                .should('have.text', numeroConta)
        })     
    })

    it('CT-006 - Deve realizar logout com sucesso', () => {
        
        const email = `teste${Date.now()}@exemplo.com`
        const senha = 'Teste123'

        cy.cadastrarUsuario(email, 'Usuário Teste', senha)
        cy.get('#btnCloseModal').click()

        cy.realizarLogin(email, senha)
        cy.contains('Usuário Teste').should('be.visible')

        cy.get('#btnExit').click()
        cy.get('.card__login').should('be.visible')

    })

    it('CT-010 - Não deve permitir login com senha inválida', () => {

        const email = `teste${Date.now()}@exemplo.com`
        const senha = 'Teste123'
        const senhaInvalida = 'SenhaErrada123'

        cy.cadastrarUsuario(email, 'Usuário Teste', senha)
        cy.get('#btnCloseModal').click()

        cy.realizarLogin(email, senhaInvalida)

        cy.get('#modalText')
            .should('be.visible')
            .and('contain.text', 'Usuário ou senha inválido')
    })

})