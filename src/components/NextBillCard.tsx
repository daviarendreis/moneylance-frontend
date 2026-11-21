import formatCurrency from "../logic/formatCurrency";
import formatDate from "../logic/formatDate";
import getNextBill from "../logic/getNextBill";
import type { Bill } from "../types/bill";
import { CheckIcon } from "./ui/icons";
import styles from "./NextBillCard.module.css";

interface NextBillCardProps {
    bills: Bill[]
}

export default function NextBillCard({ bills }: NextBillCardProps) {
    const bill = getNextBill(bills)

    // Nenhuma conta a pagar: a faixa vira uma confirmação tranquila, em azul
    if (!bill) {
        return (
            <section className={`${styles.strip} ${styles.empty}`} aria-label="Próxima conta">
                <p className={styles.emptyText}>
                    <CheckIcon size={18} /> Nenhuma conta a pagar
                </p>
            </section>
        )
    }

    return (
        <section className={styles.strip} aria-label="Próxima conta">
            <p className={styles.meta}>
                <span className={styles.label}>Próxima conta</span> · Vence {formatDate(bill.dueDate)}
            </p>
            <p className={styles.description}>{bill.description}</p>
            <p className={`${styles.amount} tabular`}>{formatCurrency(bill.amount)}</p>
        </section>
    )
}
