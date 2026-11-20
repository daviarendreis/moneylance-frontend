/*
 * DADOS FIXOS DO LAYOUT
 *
 * Tudo aqui é provisório: são valores fixos para o layout já aparecer pronto.
 * Cada constante será trocada por um dado real quando a função correspondente existir.
 * A lista completa do que falta implementar está em PENDENCIAS.md, na raiz do projeto.
 * Quando nada mais importar este arquivo, ele pode ser apagado.
 */

// Cabeçalho: mês atual. Trocar por: data de hoje formatada como nome do mês.
export const PLACEHOLDER_MONTH = "Novembro"

// Card "Próxima conta". Trocar por: a conta não paga com o vencimento mais próximo.
export const PLACEHOLDER_NEXT_BILL = {
    description: "Conta de luz",
    amount: 237.45,
    dueLabel: "Vence 20/11",
}

// Linha de transação: "Categoria · data". Trocar por: nome da categoria + createdAt formatado.
export const PLACEHOLDER_TRANSACTION_META = "Categoria · 18/11"

// Linha de conta: vencimento. Trocar por: dueDate formatado.
export const PLACEHOLDER_BILL_DUE = "Vence 20/11"

// Card "Contas": contador. Trocar por: contagem de contas pagas e a pagar.
export const PLACEHOLDER_BILLS_COUNT = "3 a pagar · 2 pagas"

// Gráfico do saldo: linha fixa (coordenadas SVG, 322 × 150). Trocar por: pontos do saldo acumulado por data.
export const PLACEHOLDER_CHART_LINE =
    "M0 112 C 25 112, 30 30, 60 30 C 85 30, 90 62, 120 66 C 150 70, 160 72, 185 74 C 210 76, 215 40, 245 36 C 270 33, 280 48, 300 50 L 316 50"

// Gráfico do saldo: rótulos do eixo de datas. Trocar por: datas reais do período.
export const PLACEHOLDER_CHART_LABELS = ["01/11", "10/11", "20/11", "Hoje"]
