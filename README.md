# MoneyLance

Aplicação full stack de controle financeiro pessoal. Permite registrar contas a pagar e transações (entradas e saídas) organizadas por categoria, acompanhar o saldo e visualizar para onde o dinheiro vai.

> 🚧 **Em desenvolvimento.** O front-end está sendo construído primeiro contra dados mock; o back-end (API REST com Node.js, Prisma e PostgreSQL) e a autenticação entram na sequência.

## Funcionalidades

**Em construção (front-end):**
- Contas a pagar: adicionar, listar e marcar como paga
- Transações: registrar entradas e saídas organizadas por categoria
- Saldo e resumo de gastos

**Planejado:**
- Back-end próprio (API REST em Node.js + Prisma + PostgreSQL)
- Autenticação e autorização, com cada usuário acessando apenas os próprios dados
- Persistência real substituindo os dados mock

## Stack

- **Front-end:** React, TypeScript, Vite
- **Back-end (planejado):** Node.js, Prisma, PostgreSQL
- **Autenticação (planejada):** JWT

## Arquitetura

Organização por funcionalidade (feature-based), com separação entre dados (camada de API/mock), estado (hooks), lógica (funções puras) e apresentação (componentes). O front-end é construído sobre consumo de API: hoje contra dados mock, depois contra o back-end real, trocando apenas a camada de dados.

## Como rodar (front-end)

```bash
npm install
npm run dev
```

## Status

Projeto pessoal em desenvolvimento ativo. Este repositório contém o front-end; o back-end virá em repositório separado.