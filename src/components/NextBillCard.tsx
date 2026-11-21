import formatCurrency from "../logic/formatCurrency";
import formatDate from "../logic/formatDate";
import getNextBill from "../logic/getNextBill";
import type { Bill } from "../types/bill";
import styles from "./NextBillCard.module.css";

interface NextBillCardProps {
    bills: Bill[]
}

export default function NextBillCard({ bills }: NextBillCardProps) {
    const bill = getNextBill(bills)

    return (
        //Se for undefined, quero que mostre algo como "Nenhuma conta a pagar"
        <section className={styles.strip} aria-label="Próxima conta">
            <p className={styles.meta}>
                <span className={styles.label}>Próxima conta</span> · {formatDate(bill.dueDate)}
            </p>
            <p className={styles.description}>{bill.description}</p>
            <p className={`${styles.amount} tabular`}>{formatCurrency(bill.amount)}</p>
        </section>
    )
}
