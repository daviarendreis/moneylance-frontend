import formatCurrency from "../logic/formatCurrency";
import { PLACEHOLDER_NEXT_BILL } from "../placeholders/layoutPlaceholders";
import styles from "./NextBillCard.module.css";

// Dado fixo: mostra PLACEHOLDER_NEXT_BILL até existir a função de próxima conta (ver PENDENCIAS.md)
export default function NextBillCard() {
    const bill = PLACEHOLDER_NEXT_BILL

    return (
        <section className={styles.strip} aria-label="Próxima conta">
            <p className={styles.meta}>
                <span className={styles.label}>Próxima conta</span> · {bill.dueLabel}
            </p>
            <p className={styles.description}>{bill.description}</p>
            <p className={`${styles.amount} tabular`}>{formatCurrency(bill.amount)}</p>
        </section>
    )
}
