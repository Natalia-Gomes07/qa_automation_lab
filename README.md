# QA Automation Lab 🧪

Laboratório de automação de testes End-to-End (E2E) utilizando Cypress e JavaScript.


## 📌 Sobre o projeto

Este repositório foi criado para praticar automação de testes, aplicar conceitos de Quality Assurance e documentar a evolução de um projeto de testes automatizados.

A aplicação utilizada inicialmente é o [BugBank](https://bugbank.netlify.app/), um sistema bancário fictício desenvolvido para a prática de testes de software.

O projeto é independente e não possui vínculo com os desenvolvedores do BugBank.


## 🛠️ Tecnologias e ferramentas

- **Cypress:** automação de testes E2E.
- **JavaScript:** linguagem utilizada nos testes.
- **Node.js e npm:** ambiente de execução e gerenciamento de dependências.
- **Git e GitHub:** versionamento e hospedagem do código.


## ✅ Cenários automatizados

### Cadastro de usuário

| ID | Cenário | Tipo |
|---|---|---|
| CT-001 | Impedir cadastro sem nome | Negativo |
| CT-002 | Impedir cadastro com e-mail inválido | Negativo |
| CT-003 | Impedir cadastro com senhas diferentes | Negativo |
| CT-004 | Cadastrar usuário com dados válidos | Positivo |

Os testes estão implementados no arquivo `cypress/e2e/cadastro.cy.js`.


## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js compatível com a versão do Cypress instalada
- npm
- Git

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Natalia-Gomes07/qa_automation_lab.git
```

2. Entre na pasta do projeto:

```bash
cd qa_automation_lab
```

3. Instale as dependências:

```bash
npm ci
```

### Executar os testes

Para abrir a interface gráfica do Cypress:

```bash
npx cypress open
```

Selecione **E2E Testing**, escolha o navegador e execute `cadastro.cy.js`.

Para executar os testes pelo terminal:

```bash
npx cypress run
```
