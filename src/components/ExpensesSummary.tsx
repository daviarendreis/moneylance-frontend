import formatCurrency from "../logic/formatCurrency";
import getTotalExpensesByCategory from "../logic/getTotalExpensesByCategory";
import getTotalExpenses from "../logic/getTotalExpenses";
import type { Category } from "../types/category";
import type { Transaction } from "../types/transaction";
import styles from "./ExpensesSummary.module.css";

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

    if (totalExpenses === 0) return <p className={styles.empty}>Nenhum gasto registrado</p>
    return (
        <div className={styles.summary}>
        <p className={styles.total}>
            <span className={styles.totalLabel}>Total de gastos</span>
            <strong className={`${styles.totalValue} tabular`}>{formatCurrency(totalExpenses)}</strong>
        </p>
        <ul className={styles.categories}>
        {expensesByCategoryList.map(([categoryId, total]) => (
            <li key={categoryId} className={styles.category}>
                <span className={styles.categoryLine}>
                    <span className={styles.categoryName}>{findCategory(categoryId)}</span>
                    <span className={`${styles.categoryValue} tabular`}>{formatCurrency(total)}</span>
                </span>
                <span className={styles.track}>
                    <span className={styles.bar} style={{ width: `${(total / totalExpenses) * 100}%` }} />
                </span>
            </li>
        ))}
        </ul>
        </div>
    )
}
