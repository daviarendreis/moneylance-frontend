# Pendências do layout

O layout está pronto, mas alguns pontos ainda mostram **dados fixos** no lugar de dados reais.
Todos os dados fixos ficam em [`src/placeholders/layoutPlaceholders.ts`](src/placeholders/layoutPlaceholders.ts).

**Como usar esta lista:** quando você criar a função de um item, me avise. Eu troco o dado fixo pelo real no componente indicado e marco o item aqui. Quando o arquivo de placeholders não for mais usado por ninguém, ele pode ser apagado.

## Lógica a implementar

- [x] **1. Formatar datas** (ex.: `"2026-11-20"` → `"20/11"`)
  - Sugestão: `logic/formatDate.ts`, no mesmo estilo do `formatCurrency`.
  - Destrava os itens 2, 3, 4 e 7.

- [x] **2. Data nas linhas de transação**
  - Hoje mostra: `PLACEHOLDER_TRANSACTION_META` ("Categoria · 18/11") em todas as linhas.
  - Precisa de: `createdAt` formatado (item 1).
  - Onde troca: `components/TransactionsList.tsx`.
  - Atenção: `createdAt` é o momento do registro, não do gasto, e no mock todas as transações têm a mesma data.

- [x] **3. Categoria nas linhas de transação**
  - Hoje mostra: a parte "Categoria" de `PLACEHOLDER_TRANSACTION_META`.
  - Precisa de: buscar o nome da categoria pelo `categoryId`. Hoje o `TransactionsList` só recebe `transactions`, então é preciso **passar `categories` como prop** (mudança de interface, decisão sua).
  - Onde troca: `components/TransactionsList.tsx` e a chamada em `App.tsx`.

- [x] **4. Vencimento nas linhas de conta**
  - Hoje mostra: `PLACEHOLDER_BILL_DUE` ("Vence 20/11") em todas as contas.
  - Precisa de: `dueDate` formatado (item 1).
  - Onde troca: `components/BillsList.tsx`.

- [x] **5. Próxima conta a pagar**
  - Hoje mostra: `PLACEHOLDER_NEXT_BILL` (Conta de luz, R$ 237,45).
  - Precisa de: entre as contas com `isPaid: false`, a de `dueDate` mais próximo, e o que mostrar quando não houver nenhuma.
  - Onde troca: `components/NextBillCard.tsx` (vai passar a receber a conta por prop) e `App.tsx`.

- [x] **6. Contador de contas**
  - Hoje mostra: `PLACEHOLDER_BILLS_COUNT` ("3 a pagar · 2 pagas").
  - Precisa de: contar as contas pagas e as a pagar.
  - Onde troca: o `subtitle` do card "Contas" em `App.tsx`.

- [x] **7. Gráfico do saldo** (componente pronto com Recharts; falta só a função)
  - Hoje mostra: `PLACEHOLDER_BALANCE_HISTORY`, uma lista fixa de 30 dias calculada à mão a partir dos mocks. É o **gabarito**: com os mocks atuais, a função deve devolver exatamente essa lista.
  - Precisa de: `getBalanceHistory(transactions)` → lista de `{ date: "AAAA-MM-DD", balance: number }` (tipo `BalancePoint`, exportado de `components/BalanceChart.tsx`).
  - Regras decididas: últimos 30 dias (30 itens, do mais antigo para hoje); o primeiro dia parte do saldo acumulado até o dia anterior à janela; dias sem transação repetem o saldo do dia anterior; o último item = `getBalance` de hoje.
  - Onde troca: em `App.tsx`, `<BalanceChart />` vira `<BalanceChart history={getBalanceHistory(transactions)} />`. Depois disso, `layoutPlaceholders.ts` pode ser apagado.

- [x] **8. "Mostrar mais" nas transações**
  - Hoje: o botão aparece, mas não faz nada, e a lista mostra todas as transações.
  - Precisa de: mostrar só as N mais recentes e expandir ao tocar.
  - Onde troca: `components/TransactionsList.tsx`.

- [x] **9. Ordem das transações**
  - Hoje: a lista segue a ordem do array. Transações novas entram **no fim** (`[...state, nova]`), mas o card se chama "Últimas transações".
  - Precisa de: ordenar da mais recente para a mais antiga.

- [ ] **10. Ordem das contas** (opcional)
  - Hoje: a ordem do mock. O desenho mostrava as a pagar primeiro, por vencimento.

- [x] **11. Mês no cabeçalho**
  - Hoje mostra: `PLACEHOLDER_MONTH` ("Novembro").
  - Precisa de: o nome do mês atual.
  - Onde troca: `App.tsx`.

- [x] **12. Fechar a folha depois de "Adicionar"**
  - Hoje: a folha só fecha no "×" ou tocando fora dela.
  - Precisa de: o formulário avisar que foi enviado (por exemplo, uma prop `onSubmitted` no `AddTransactionForm` e no `AddBillForm`, ou envolver `addTransaction` e `addBill` no `App`).

- [x] **13. Conta atrasada x conta a vencer**
  - Hoje: a faixa "Próxima conta" e as linhas de conta sempre dizem "Vence 20/11", mesmo quando a data já passou (ex.: hoje é 21/11 e a Conta de luz venceu em 20/11).
  - Precisa de: uma função que compare o `dueDate` com a data de hoje (ex.: `logic/isOverdue.ts`, retornando `true`/`false`).
  - Onde troca (eu pinto): `components/NextBillCard.tsx` e `components/BillsList.tsx`. A faixa ganha tom de alerta e o texto vira "Venceu 20/11" / "Atrasada"; nas linhas de conta, o mesmo aviso.

## Fora do layout (tarefas separadas)

- [x] **PWA instalável:** manifest (`public/manifest.webmanifest`), ícones (`public/icons/`, `public/favicon.svg`) e meta tags `apple-mobile-web-app-*`. Já dá para "Adicionar à Tela de Início" no iPhone e abrir em tela cheia.
- [x] **Funcionar offline:** service worker via `vite-plugin-pwa` (configurado em `vite.config.ts`). O app abre sem internet. Quando o back-end existir, os dados vão precisar de uma estratégia própria de cache/sincronização.
- [ ] **Campo de data no formulário de transação:** só se você quiser que a data seja a do gasto, e não a do registro.
- [ ] **Versão futura: "Pagar" vira transação.** Ao confirmar o pagamento de uma conta, criar uma transação de saída com o valor dela, descontando do saldo. Hoje o saldo é só entradas menos saídas e não considera as contas.
