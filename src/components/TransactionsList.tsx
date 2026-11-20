import formatCurrency from "../logic/formatCurrency";
import type { Transaction } from "../types/transaction";
import { ArrowDownIcon, ArrowUpIcon } from "./ui/icons";
import { PLACEHOLDER_TRANSACTION_META } from "../placeholders/layoutPlaceholders";
import styles from "./TransactionsList.module.css";

interface TransactionsListProps {
    transactions: Transaction[]
}

export default function TransactionsList ({ transactions }: TransactionsListProps) {
    return (
        <>
        {transactions.length > 0 ? (
            <>
            <ul className={styles.list}>
                {transactions.map((tr) => (
                    <li key={tr.id} className={`${styles.row} ${tr.type === "income" ? styles.income : styles.expense}`}>
                        <span className={styles.icon}>
                            {tr.type === "income" ? <ArrowUpIcon /> : <ArrowDownIcon />}
                        </span>
                        <span className={styles.text}>
                            <span className={styles.description}>{tr.description}</span>
                            <span className={styles.meta}>{PLACEHOLDER_TRANSACTION_META}</span>
                        </span>
                        <span className={`${styles.amount} tabular`}>
                            {tr.type === "income" ? "+" : "−"} {formatCurrency(tr.amount)}
                        </span>
                    </li>
                ))}
            </ul>
            {/* Dado fixo: botão ainda sem ação (ver PENDENCIAS.md) */}
            <button type="button" className={styles.moreButton}>Mostrar mais</button>
            </>
        ) : <p className={styles.empty}>Nenhuma transação registrada</p>}
        </>
    )
}
