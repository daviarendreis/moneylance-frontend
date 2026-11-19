import formatCurrency from "../logic/formatCurrency";
import getTotalExpensesByCategory from "../logic/getTotalExpensesByCategory";
import getTotalExpenses from "../logic/getTotalExpenses";
import type { Category } from "../types/category";
import type { Transaction } from "../types/transaction";

interface ExpensesSummaryProps {
    transactions: Transaction[]
    categories: Category[]
}

export default function ExpensesSummary ({ transactions, categories}: ExpensesSummaryProps) {
    const totalExpenses = getTotalExpenses(transactions)
    const byCategory = getTotalExpensesByCategory(transactions)

    const expensesByCategoryList = Object.entries(byCategory)
 
    function findCategory (categoryId: string) {
        const category = categories.find(cat => cat.id === categoryId)
        return category?.name
    }

    if (totalExpenses === 0) return <p>Nenhum gasto registrado</p>
    return (
        <>
        <p><strong>Total de Gastos: {formatCurrency(totalExpenses)}</strong></p>
        {expensesByCategoryList.map(([categoryId, total]) => (
            <p key={categoryId}>{findCategory(categoryId)}: {formatCurrency(total)}</p>
        ))}
        </>
    )
}