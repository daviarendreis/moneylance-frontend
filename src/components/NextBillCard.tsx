import formatCurrency from "../logic/formatCurrency";
import { PLACEHOLDER_NEXT_BILL } from "../placeholders/layoutPlaceholders";
import styles from "./NextBillCard.module.css";

// Dado fixo: mostra PLACEHOLDER_NEXT_BILL até existir a função de próxima conta (ver PENDENCIAS.md)
export default function NextBillCard() {
    const bill = PLACEHOLDER_NEXT_BILL

    return (
        <section className={styles.card} aria-label="Próxima conta">
            <p className={styles.label}>
                <span className={styles.dot} />
                Próxima conta
            </p>
            <div className={styles.body}>
                <p className={styles.description}>{bill.description}</p>
                <p className={`${styles.amount} tabular`}>{formatCurrency(bill.amount)}</p>
                <p className={styles.due}>{bill.dueLabel}</p>
            </div>
        </section>
    )
}
