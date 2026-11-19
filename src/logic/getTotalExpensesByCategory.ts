import type { Transaction } from '../types/transaction';

export default function getTotalExpensesByCategory ( transactions: Transaction[]) {
    const expensesBalanceByCategory = transactions
    .filter(tr => tr.type === "expense")
    .reduce((acc, tr) => {
        acc[tr.categoryId] = (acc[tr.categoryId] ?? 0) + tr.amount
        return acc
    }, {} as Record<string, number>)

    return expensesBalanceByCategory
}