import formatCurrency from "../logic/formatCurrency";
import type { Transaction } from "../types/transaction";
import { ArrowDownIcon, ArrowUpIcon } from "./ui/icons";
import styles from "./TransactionsList.module.css";
import findCategory from "../logic/findCategory";
import type { Category } from "../types/category";
import formatDate from "../logic/formatDate";
import { useState } from "react";
import sortTransactions from "../logic/sortTransactions";

interface TransactionsListProps {
    transactions: Transaction[]
    categories: Category[]
}

export default function TransactionsList ({ transactions, categories }: TransactionsListProps) {
    const [expanded, setExpanded] = useState<boolean>(false)

    const sorted = sortTransactions(transactions)
    const visible = expanded ? sorted : sorted.slice(0, 5)

    return (
        <>
        {transactions.length > 0 ? (
            <>
            <ul className={styles.list}>
                {visible.map((tr) => (
                    <li key={tr.id} className={`${styles.row} ${tr.type === "income" ? styles.income : styles.expense}`}>
                        <span className={styles.icon}>
                            {tr.type === "income" ? <ArrowUpIcon size={22} /> : <ArrowDownIcon size={22} />}
                        </span>
                        <span className={styles.text}>
                            <span className={styles.description}>{tr.description}</span>
                            <span className={styles.meta}>{findCategory(tr.categoryId, categories)} · {formatDate(tr.createdAt)}</span>
                        </span>
                        <span className={`${styles.amount} tabular`}>
                            {tr.type === "income" ? "+" : "−"} {formatCurrency(tr.amount)}
                        </span>
                    </li>
                ))}
            </ul>
            
            {transactions.length > 5 && <button type="button" 
                className={styles.moreButton}
                onClick={() => setExpanded(!expanded)}
                >{expanded ? "Mostrar menos" : "Mostrar mais"}</button>}
            </>
        ) : <p className={styles.empty}>Nenhuma transação ainda. Toque no + para registrar a primeira.</p>}
        </>
    )
}
