
# QA Automation Lab 🧪

Laboratório de automação de testes End-to-End (E2E) com Cypress e JavaScript.

## 📌 Sobre o projeto

O QA Automation Lab é um projeto pessoal desenvolvido para praticar processos de qualidade de software, desde a exploração funcional até a automação de testes e integração contínua (CI).

Na versão 1.0, a aplicação utilizada é o [BugBank](https://bugbank.netlify.app/), um sistema bancário fictício voltado à prática de testes de software.

A automação contempla oito casos de teste dos fluxos de cadastro e autenticação, incluindo cenários positivos e negativos.

O projeto também utiliza GitHub Actions para execução automatizada dos testes e geração de relatórios HTML.

Este é um projeto independente, sem vínculo com os desenvolvedores do BugBank.


## 🛠️ Tecnologias e ferramentas

- **Cypress:** automação de testes End-to-End (E2E).
- **JavaScript:** linguagem utilizada para desenvolver os testes.
- **Node.js e npm:** ambiente de execução e gerenciamento de dependências.
- **Git e GitHub:** versionamento e hospedagem do código.
- **GitHub Actions:** execução automatizada dos testes no pipeline de integração contínua (CI).
- **cypress-mochawesome-reporter:** geração de relatórios HTML com os resultados dos testes.



## ✅ Cenários automatizados

A versão 1.0 contempla oito casos de teste automatizados, distribuídos entre cadastro e autenticação.

### Cadastro de usuário

| ID | Cenário | Tipo |
|---|---|---|
| CT-001 | Impedir cadastro sem nome | Negativo |
| CT-002 | Impedir cadastro com e-mail inválido | Negativo |
| CT-003 | Impedir cadastro com senhas diferentes | Negativo |
| CT-004 | Cadastrar usuário com dados válidos | Positivo |

**Arquivo:** `cypress/e2e/cadastro.cy.js`

### Autenticação

| ID | Cenário | Tipo |
|---|---|---|
| CT-005 | Realizar login com credenciais válidas | Positivo |
| CT-006 | Realizar logout | Positivo |
| CT-007 | Impedir login com senha inválida | Negativo |
| CT-008 | Impedir login com e-mail inválido | Negativo |

**Arquivo:** `cypress/e2e/login.cy.js`


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

**Modo interativo — Interface do Cypress**

```bash
npx cypress open
```

Selecione **E2E Testing**, escolha o navegador e execute os testes disponíveis:

- `cadastro.cy.js`
- `login.cy.js`

**Modo headless — Terminal**

```bash
npx cypress run
```

Esse comando executa todos os testes automatizados sem abrir a interface gráfica do Cypress.

Após a execução, o relatório HTML é gerado em `cypress/reports/html/`.


## 🔄 Integração contínua (CI)

O projeto utiliza o GitHub Actions para executar os testes automatizados sempre que um Pull Request é aberto ou atualizado com destino à branch `main`.

O workflow está configurado no arquivo `.github/workflows/cypress.yml`.

Durante a execução, o pipeline:

1. Prepara o ambiente com Node.js.
2. Instala as dependências com `npm ci`.
3. Executa os testes automatizados com `npx cypress run`.
4. Disponibiliza o relatório HTML como artifact.
5. Disponibiliza screenshots quando ocorrem falhas nos testes.

O pipeline foi validado tanto em execuções bem-sucedidas quanto em uma simulação de falha intencional, realizada em uma branch separada.


## 📊 Relatórios e evidências

O projeto utiliza o `cypress-mochawesome-reporter` para gerar relatórios HTML com os resultados da execução dos testes.

### Execução local

Após executar:

```bash
npx cypress run
```

O relatório HTML fica disponível em:

`cypress/reports/html/`

### GitHub Actions

Na página do repositório, acesse:

1. **Actions** e selecione a execução desejada.
2. Na seção **Artifacts**, localize `relatorio-cypress`.
3. Baixe o artifact para consultar o relatório HTML.

Em execuções com falha, as screenshots também são disponibilizadas no artifact `cypress-screenshots`.

Os artifacts possuem prazo de retenção e podem deixar de estar disponíveis após esse período.


## 📚 Documentação de testes

A documentação da versão 1.0 está organizada na pasta `docs/`:

- [Plano de Testes](./docs/plano-de-testes.md) — apresenta o objetivo, o escopo, a estratégia e os critérios de teste.
- [Mapeamento de Casos de Teste](./docs/casos-de-teste.md) — descreve os oito casos automatizados e seus resultados esperados.
- [Relatório de Encerramento dos Testes](./docs/relatorio-de-encerramento.md) — reúne os resultados obtidos, as evidências e as limitações da cobertura.

A documentação complementa o código automatizado e registra as atividades de qualidade realizadas durante o desenvolvimento da v1.0.
