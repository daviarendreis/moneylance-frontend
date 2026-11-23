/*
 * DADOS FIXOS DO LAYOUT
 *
 * Tudo aqui é provisório: são valores fixos para o layout já aparecer pronto.
 * Cada constante será trocada por um dado real quando a função correspondente existir.
 * A lista completa do que falta implementar está em PENDENCIAS.md, na raiz do projeto.
 * Quando nada mais importar este arquivo, ele pode ser apagado.
 */

import type { BalancePoint } from "../components/BalanceChart"

/*
 * Gráfico "Últimos 30 dias". Trocar por: getBalanceHistory(transactions).
 * Calculado à mão a partir dos mocks, com "hoje" = 23/11/2026:
 * é o GABARITO — com os mocks atuais, a função deve devolver exatamente esta lista.
 */
export const PLACEHOLDER_BALANCE_HISTORY: BalancePoint[] = [
    { date: "2026-10-25", balance: 0.00 },
    { date: "2026-10-26", balance: 0.00 },
    { date: "2026-10-27", balance: 0.00 },
    { date: "2026-10-28", balance: 0.00 },
    { date: "2026-10-29", balance: 0.00 },
    { date: "2026-10-30", balance: 0.00 },
    { date: "2026-10-31", balance: 0.00 },
    { date: "2026-11-01", balance: 0.00 },
    { date: "2026-11-02", balance: 0.00 },
    { date: "2026-11-03", balance: 0.00 },
    { date: "2026-11-04", balance: 0.00 },
    { date: "2026-11-05", balance: 5500.00 },
    { date: "2026-11-06", balance: 5500.00 },
    { date: "2026-11-07", balance: 5500.00 },
    { date: "2026-11-08", balance: 4854.10 },
    { date: "2026-11-09", balance: 4854.10 },
    { date: "2026-11-10", balance: 3204.10 },
    { date: "2026-11-11", balance: 3204.10 },
    { date: "2026-11-12", balance: 5004.10 },
    { date: "2026-11-13", balance: 5004.10 },
    { date: "2026-11-14", balance: 5004.10 },
    { date: "2026-11-15", balance: 4948.20 },
    { date: "2026-11-16", balance: 4948.20 },
    { date: "2026-11-17", balance: 4948.20 },
    { date: "2026-11-18", balance: 4948.20 },
    { date: "2026-11-19", balance: 4948.20 },
    { date: "2026-11-20", balance: 4948.20 },
    { date: "2026-11-21", balance: 4923.70 },
    { date: "2026-11-22", balance: 4923.70 },
    { date: "2026-11-23", balance: 4923.70 },
]
