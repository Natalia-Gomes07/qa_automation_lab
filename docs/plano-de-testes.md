# Plano de Testes - BugBank v1.0

## 1. Objetivo e contexto

Este plano de testes apresenta a estratégia de validação funcional adotada na versão 1.0 do projeto QA Automation Lab, utilizando a aplicação BugBank como ambiente de estudo.

O projeto tem como finalidade praticar o processo de qualidade de software, desde a exploração funcional e identificação dos comportamentos da aplicação até a implementação de testes automatizados e sua integração ao pipeline de CI.

Os testes têm como objetivo verificar os principais comportamentos de cadastro e autenticação, considerando fluxos positivos e negativos, validações dos formulários e acesso à área autenticada.

## 2. Escopo dos testes

A versão 1.0 contempla a automação dos fluxos de cadastro e autenticação do BugBank.

Essas funcionalidades foram priorizadas por serem essenciais para o acesso do usuário à aplicação. Falhas nesses processos podem impedir a utilização das funcionalidades disponíveis na área autenticada.

### 2.1 Funcionalidades contempladas

- Cadastro válido de usuário.
- Validações de cadastro com dados inválidos.
- Login com credenciais válidas.
- Login com credenciais inválidas.
- Encerramento da sessão (logout).

### 2.2 Funcionalidades fora do escopo

- Transferências bancárias.
- Consulta de extrato.
- Pagamentos.
- Saques.

As funcionalidades fora do escopo foram observadas durante a exploração inicial, mas não possuem cobertura automatizada específica nesta versão. Poderão ser consideradas em futuras evoluções do projeto.

## 3. Estratégia e ambiente de testes

### 3.1 Estratégia

A estratégia de testes foi iniciada com a exploração manual do BugBank, permitindo identificar funcionalidades, validações e comportamentos da interface.

A partir dessa análise, foram selecionados oito casos de teste funcionais, contemplando cenários positivos e negativos de cadastro e autenticação.

Os casos foram automatizados com Cypress e JavaScript, utilizando testes End-to-End (E2E) pela interface da aplicação.

A execução automatizada também foi integrada ao GitHub Actions, permitindo verificar os testes em Pull Requests destinados à branch `main`.

### 3.2 Ambiente e ferramentas

| Ferramenta | Finalidade |
|---|---|
| BugBank | Aplicação utilizada nos testes |
| Cypress | Automação de testes E2E |
| JavaScript | Implementação dos testes |
| Node.js e npm | Ambiente e gerenciamento de dependências |
| Git e GitHub | Versionamento e colaboração |
| GitHub Actions | Integração contínua (CI) |
| cypress-mochawesome-reporter | Geração de relatórios HTML |

A aplicação utilizada está disponível em https://bugbank.netlify.app/.
A execução local foi realizada em ambiente Windows, enquanto a integração
contínua utiliza runners Ubuntu disponibilizados pelo GitHub Actions.

## 4. Critérios de conclusão e aprovação

### 4.1 Critérios de conclusão da execução

A execução dos testes será considerada concluída quando:

- Os oito casos de teste planejados forem executados.
- Os resultados forem registrados, incluindo eventuais falhas.
- Os relatórios de execução estiverem disponíveis para análise.
- Falhas identificadas forem investigadas e documentadas quando necessário.

### 4.2 Critérios de aprovação da v1.0

A versão 1.0 será considerada aprovada no escopo definido quando:

- Os oito testes automatizados devem ser executados com sucesso na validação final, sem falhas pendentes de investigação.
- Não houver defeitos críticos conhecidos que comprometam os fluxos de cadastro e autenticação.
- O pipeline de CI executar os testes corretamente.
- Os relatórios e evidências estiverem disponíveis.
- A documentação prevista para a versão estiver concluída.

A aprovação refere-se exclusivamente ao escopo testado e não representa garantia de ausência de defeitos em toda a aplicação.

## 5. Tratamento de falhas

Quando um teste automatizado apresentar falha, o resultado deverá ser investigado antes de ser classificado como defeito da aplicação.

A investigação deve considerar:

- Possíveis defeitos no comportamento da aplicação.
- Erros na implementação ou nas asserções do teste.
- Problemas relacionados ao ambiente de execução.

Os logs, relatórios HTML e screenshots poderão ser utilizados como evidências.

Quando um defeito da aplicação for confirmado, deverá ser documentado com informações suficientes para sua reprodução e análise.

Após uma eventual correção, o cenário deverá ser executado novamente para verificar o comportamento esperado.

## 6. Entregáveis

Os entregáveis previstos para a v1.0 são:

- Suíte automatizada com oito casos de teste.
- Código-fonte versionado no GitHub.
- Pipeline de integração contínua com GitHub Actions.
- Relatórios HTML de execução.
- Screenshots de falhas, quando geradas.
- Plano de testes e mapeamento dos casos.
- README com instruções de execução.
- Resumo de encerramento da versão.
