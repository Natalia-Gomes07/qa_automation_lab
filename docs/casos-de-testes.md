
# Mapeamento de Casos de Teste — BugBank v1.0

## 1. Objetivo

Este documento apresenta os casos de teste
automatizados na versão 1.0 do QA Automation Lab,
relacionando os cenários selecionados aos resultados
esperados e aos arquivos de implementação no Cypress.

## 2. Casos de teste — Cadastro

| ID | Cenário | Resultado esperado | Arquivo |
|---|---|---|---|
| CT-001 | Cadastro sem nome | Cadastro impedido e mensagem "Nome não pode ser vazio" | `cadastro.cy.js` |
| CT-002 | Cadastro com e-mail inválido | Exibir "Formato inválido" e identificar formato incompatível na validação HTML5 | `cadastro.cy.js` |
| CT-003 | Cadastro com senhas diferentes | Cadastro impedido e mensagem "As senhas não são iguais" | `cadastro.cy.js` |
| CT-004 | Cadastro válido | Exibir confirmação de conta criada com sucesso | `cadastro.cy.js` |

## 3. Casos de teste — Autenticação

| ID | Cenário | Resultado esperado | Arquivo |
|---|---|---|---|
| CT-005 | Login com credenciais válidas | Permitir acesso à área autenticada e validar os dados da conta | `login.cy.js` |
| CT-006 | Logout | Encerrar a sessão e retornar à tela de login | `login.cy.js` |
| CT-007 | Login com senha inválida | Impedir autenticação e exibir a mensagem "Usuário ou senha inválido" | `login.cy.js` |
| CT-008 | Login com e-mail inválido | Exibir "Formato inválido" e identificar formato incompatível na validação HTML5 | `login.cy.js` |

## 4. Cobertura e limitações

A versão 1.0 possui oito casos de teste automatizados, distribuídos entre os fluxos de cadastro e autenticação.

Os casos foram selecionados após exploração funcional da aplicação, considerando comportamentos positivos e negativos.

A cobertura implementada não contempla todas as combinações de entradas nem todas as funcionalidades do BugBank.

As operações de transferência, extrato, pagamento e saque permanecem fora do escopo da automação nesta versão.

Os resultados das execuções podem ser consultados nos relatórios HTML gerados pelo Cypress e publicados como artifacts no GitHub Actions.

## 5. Referências

- [Plano de testes](./plano-de-testes.md)
- [Testes de cadastro](../cypress/e2e/cadastro.cy.js)
- [Testes de autenticação](../cypress/e2e/login.cy.js)
