import type { Transaction } from "../types/transaction";

export default function getTotalExpenses (transactions: Transaction[]) {
    const expenses = transactions.filter(tr => tr.type === "expense")

    const expensesBalance = expenses.reduce((acc, tr) => acc + tr.amount, 0)

    return expensesBalance
}