import { useState } from "react";
import formatCurrency from "../logic/formatCurrency";
import type { Bill } from "../types/bill";
import { CheckIcon } from "./ui/icons";
import styles from "./BillsList.module.css";
import formatDate from "../logic/formatDate";

interface BillsListProps {
    bills: Bill[]
    markAsPaid: (id: string) => void
}

export default function BillsList ({bills, markAsPaid}: BillsListProps) {
    // Estado só de interface: qual conta está pedindo confirmação antes de ser marcada como paga
    const [confirmingId, setConfirmingId] = useState<string | null>(null)

    if (bills.length === 0) return <p className={styles.empty}>Nenhuma conta cadastrada. Toque no + para adicionar.</p>
    return (
        <ul className={styles.list}>
            {bills.map(bill => (
                <li key={bill.id} className={`${styles.row} ${bill.isPaid ? styles.paid : ""}`}>
                    <span className={styles.text}>
                        <span className={styles.description}>{bill.description}</span>
                        <span className={`${styles.amount} tabular`}>{formatCurrency(bill.amount)}</span>
                        <span className={styles.meta}>Vence {formatDate(bill.dueDate)}{bill.isRecurring ? " · Todo mês" : ""}</span>
                    </span>
                    {bill.isPaid
                        ? <span className={styles.paidBadge}><CheckIcon /> Paga</span>
                        : confirmingId !== bill.id
                            ? <button type="button" className={styles.payButton} onClick={() => setConfirmingId(bill.id)}>Pagar</button>
                            : null}
                    {!bill.isPaid && confirmingId === bill.id ? (
                        <div className={styles.confirm} role="group" aria-label={`Confirmar pagamento de ${bill.description}`}>
                            <p className={styles.confirmText}>Marcar como paga?</p>
                            <div className={styles.confirmActions}>
                                <button type="button" className={styles.cancelButton} onClick={() => setConfirmingId(null)} autoFocus>Cancelar</button>
                                <button type="button" className={styles.confirmButton} onClick={() => { markAsPaid(bill.id); setConfirmingId(null) }}>Confirmar</button>
                            </div>
                        </div>
                    ) : null}
                </li>
            ))}
        </ul>
    )
}
