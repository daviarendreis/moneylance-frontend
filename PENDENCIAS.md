# Pendências do layout

O layout está pronto, mas alguns pontos ainda mostram **dados fixos** no lugar de dados reais.
Todos os dados fixos ficam em [`src/placeholders/layoutPlaceholders.ts`](src/placeholders/layoutPlaceholders.ts).

**Como usar esta lista:** quando você criar a função de um item, me avise. Eu troco o dado fixo pelo real no componente indicado e marco o item aqui. Quando o arquivo de placeholders não for mais usado por ninguém, ele pode ser apagado.

## Lógica a implementar

- [ ] **1. Formatar datas** (ex.: `"2026-11-20"` → `"20/11"`)
  - Sugestão: `logic/formatDate.ts`, no mesmo estilo do `formatCurrency`.
  - Destrava os itens 2, 3, 4 e 7.

- [ ] **2. Data nas linhas de transação**
  - Hoje mostra: `PLACEHOLDER_TRANSACTION_META` ("Categoria · 18/11") em todas as linhas.
  - Precisa de: `createdAt` formatado (item 1).
  - Onde troca: `components/TransactionsList.tsx`.
  - Atenção: `createdAt` é o momento do registro, não do gasto, e no mock todas as transações têm a mesma data.

- [ ] **3. Categoria nas linhas de transação**
  - Hoje mostra: a parte "Categoria" de `PLACEHOLDER_TRANSACTION_META`.
  - Precisa de: buscar o nome da categoria pelo `categoryId`. Hoje o `TransactionsList` só recebe `transactions`, então é preciso **passar `categories` como prop** (mudança de interface, decisão sua).
  - Onde troca: `components/TransactionsList.tsx` e a chamada em `App.tsx`.

- [ ] **4. Vencimento nas linhas de conta**
  - Hoje mostra: `PLACEHOLDER_BILL_DUE` ("Vence 20/11") em todas as contas.
  - Precisa de: `dueDate` formatado (item 1).
  - Onde troca: `components/BillsList.tsx`.

- [ ] **5. Próxima conta a pagar**
  - Hoje mostra: `PLACEHOLDER_NEXT_BILL` (Conta de luz, R$ 237,45).
  - Precisa de: entre as contas com `isPaid: false`, a de `dueDate` mais próximo, e o que mostrar quando não houver nenhuma.
  - Onde troca: `components/NextBillCard.tsx` (vai passar a receber a conta por prop) e `App.tsx`.

- [ ] **6. Contador de contas**
  - Hoje mostra: `PLACEHOLDER_BILLS_COUNT` ("3 a pagar · 2 pagas").
  - Precisa de: contar as contas pagas e as a pagar.
  - Onde troca: o `subtitle` do card "Contas" em `App.tsx`.

- [ ] **7. Gráfico do saldo**
  - Hoje mostra: uma linha fixa (`PLACEHOLDER_CHART_LINE`) e rótulos fixos (`PLACEHOLDER_CHART_LABELS`).
  - Precisa de: o saldo acumulado ao longo do tempo (uma lista de pontos data → saldo) e as datas do eixo (item 1).
  - Decisão: desenhar em SVG à mão (sem dependência) ou usar uma biblioteca de gráficos (dependência nova).
  - Onde troca: `components/BalanceChart.tsx`.

- [ ] **8. "Mostrar mais" nas transações**
  - Hoje: o botão aparece, mas não faz nada, e a lista mostra todas as transações.
  - Precisa de: mostrar só as N mais recentes e expandir ao tocar.
  - Onde troca: `components/TransactionsList.tsx`.

- [ ] **9. Ordem das transações**
  - Hoje: a lista segue a ordem do array. Transações novas entram **no fim** (`[...state, nova]`), mas o card se chama "Últimas transações".
  - Precisa de: ordenar da mais recente para a mais antiga.

- [ ] **10. Ordem das contas** (opcional)
  - Hoje: a ordem do mock. O desenho mostrava as a pagar primeiro, por vencimento.

- [ ] **11. Mês no cabeçalho**
  - Hoje mostra: `PLACEHOLDER_MONTH` ("Novembro").
  - Precisa de: o nome do mês atual.
  - Onde troca: `App.tsx`.

- [ ] **12. Fechar a folha depois de "Adicionar"**
  - Hoje: a folha só fecha no "×" ou tocando fora dela.
  - Precisa de: o formulário avisar que foi enviado (por exemplo, uma prop `onSubmitted` no `AddTransactionForm` e no `AddBillForm`, ou envolver `addTransaction` e `addBill` no `App`).

## Fora do layout (tarefas separadas)

- [ ] **PWA de verdade:** manifest, ícones, service worker (ex.: `vite-plugin-pwa`) e meta tags `apple-mobile-web-app-*`.
- [ ] **Campo de data no formulário de transação:** só se você quiser que a data seja a do gasto, e não a do registro.
