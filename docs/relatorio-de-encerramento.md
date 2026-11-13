
# Relatório de Encerramento dos Testes — BugBank v1.0

## 1. Objetivo

Este documento apresenta os resultados da etapa de testes da versão 1.0 do QA Automation Lab, utilizando a aplicação BugBank como ambiente de estudo.

O relatório tem como finalidade registrar a execução dos testes automatizados, os resultados obtidos, as evidências disponíveis e as limitações da cobertura implementada.

## 2. Escopo executado

Foram implementados e executados oito casos de teste funcionais automatizados com Cypress e JavaScript, distribuídos entre:

- **Cadastro:** CT-001 a CT-004.
- **Autenticação:** CT-005 a CT-008.

Os testes contemplam fluxos positivos e negativos, incluindo validações de formulários, criação de conta, login e logout.

As funcionalidades de transferência, extrato, pagamento e saque não fizeram parte da cobertura automatizada desta versão.

Para consultar os cenários e resultados esperados, acesse o [Mapeamento de Casos de Teste](./casos-de-testes.md).

## 3. Resultados dos testes

A suíte automatizada foi executada localmente com Cypress e também no GitHub Actions, por meio do pipeline de integração contínua.

Nas execuções de validação bem-sucedidas, os oito casos de teste apresentaram resultado aprovado.

| Indicador | Resultado |
|---|---|
| Casos automatizados | 8 |
| Testes aprovados na execução de referência | 8 |
| Testes reprovados na execução de referência | 0 |
| Arquivos de testes | 2 |
| Execução no GitHub Actions | Validada |
| Relatório HTML consolidado | Gerado e validado |

### 3.1 Validação do pipeline em cenário de falha

Foi realizada uma execução experimental com uma alteração intencional na asserção do CT-007, para verificar o comportamento do pipeline diante de uma falha.

O GitHub Actions identificou o teste como reprovado e disponibilizou o relatório HTML e a screenshot correspondente.

O experimento foi realizado em uma branch separada, sem integração à `main`.

A falha intencional não representa um defeito confirmado da aplicação BugBank.

## 4. Evidências de execução

Os resultados dos testes automatizados podem ser consultados por meio dos logs e artifacts disponibilizados pelo GitHub Actions.

As evidências incluem:

- Logs da execução dos testes Cypress.
- Relatório HTML consolidado, gerado pelo cypress-mochawesome-reporter.
- Screenshots produzidas pelo Cypress em situações de falha.

O pipeline foi validado em execuções bem-sucedidas e em uma execução experimental com falha intencional.

Os artifacts possuem prazo de retenção no GitHub Actions e podem deixar de estar disponíveis após esse período.

## 5. Conclusão

A etapa de testes da versão 1.0 foi concluída com sucesso, considerando o escopo definido para o projeto.

Os oito testes automatizados de cadastro e autenticação foram aprovados na execução de referência. O pipeline de integração contínua também foi validado, incluindo a geração de relatórios e evidências em situações de sucesso e falha.

As funcionalidades de transferência, extrato, pagamento e saque permanecem fora da cobertura automatizada desta versão e poderão ser consideradas em futuras evoluções do projeto.

Os resultados obtidos atendem aos critérios de aprovação estabelecidos para a etapa de testes da v1.0.
