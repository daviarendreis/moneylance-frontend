import formatCurrency from "../logic/formatCurrency";
import type { Bill } from "../types/bill";
import { CheckIcon } from "./ui/icons";
import { PLACEHOLDER_BILL_DUE } from "../placeholders/layoutPlaceholders";
import styles from "./BillsList.module.css";

interface BillsListProps {
    bills: Bill[]
    markAsPaid: (id: string) => void
}

export default function BillsList ({bills, markAsPaid}: BillsListProps) {
    if (bills.length === 0) return <p className={styles.empty}>Nenhuma conta cadastrada</p>
    return (
        <ul className={styles.list}>
            {bills.map(bill => (
                <li key={bill.id} className={`${styles.row} ${bill.isPaid ? styles.paid : ""}`}>
                    <span className={styles.text}>
                        <span className={styles.description}>{bill.description}</span>
                        <span className={`${styles.amount} tabular`}>{formatCurrency(bill.amount)}</span>
                        <span className={styles.meta}>{PLACEHOLDER_BILL_DUE}{bill.isRecurring ? " · Todo mês" : ""}</span>
                    </span>
                    {!bill.isPaid
                        ? <button type="button" className={styles.payButton} onClick={() => markAsPaid(bill.id)}>Pagar</button>
                        : <span className={styles.paidBadge}><CheckIcon /> Paga</span>}
                </li>
            ))}
        </ul>
    )
}
