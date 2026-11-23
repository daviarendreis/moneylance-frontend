import type { Transaction } from "../types/transaction";

export const mockTransactions: Transaction[] = [
  {
    id: crypto.randomUUID(),
    description: 'Salário Mensal',
    amount: 5500.00,
    type: 'income',
    createdAt: "2026-11-05T12:00:00.000Z",
    categoryId: 'cat-salario',
  },
  {
    id: crypto.randomUUID(),
    description: 'Compras do Mês',
    amount: 645.90,
    type: 'expense',
    createdAt: "2026-11-08T12:00:00.000Z",
    categoryId: 'cat-mercado',
  },
  {
    id: crypto.randomUUID(),
    description: 'Projeto Freelance Web',
    amount: 1800.00,
    type: 'income',
    createdAt: "2026-11-12T12:00:00.000Z",
    categoryId: 'cat-venda',
  },
  {
    id: crypto.randomUUID(),
    description: 'Aluguel Apartamento',
    amount: 1650.00,
    type: 'expense',
    createdAt: "2026-11-10T12:00:00.000Z",
    categoryId: 'cat-conforto',
  },
  {
    id: crypto.randomUUID(),
    description: 'Café da Tarde (Dinheiro)',
    amount: 24.50,
    type: 'expense',
    createdAt: "2026-11-21T12:00:00.000Z",
    categoryId: 'cat-mercado',
  },
  {
    id: crypto.randomUUID(),
    description: 'Assinatura Streaming',
    amount: 55.90,
    type: 'expense',
    createdAt: "2026-11-15T12:00:00.000Z",
    categoryId: 'cat-conforto',
  },
];

export function getTransactions(): Promise<Transaction[]> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockTransactions), (500))
    })
}
