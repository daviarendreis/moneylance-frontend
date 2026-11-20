import { useState, type ReactNode } from "react"
import { CalendarIcon, CloseIcon, PlusIcon, SwapIcon } from "./icons"
import styles from "./FabMenu.module.css"

interface FabMenuProps {
    transactionForm: ReactNode
    billForm: ReactNode
}

type View = "closed" | "menu" | "transaction" | "bill"

export default function FabMenu({ transactionForm, billForm }: FabMenuProps) {
    const [view, setView] = useState<View>("closed")

    const sheetTitle = view === "transaction" ? "Nova transação" : "Nova conta"
    const isSheet = view === "transaction" || view === "bill"

    return (
        <>
            {view !== "closed" ? (
                <div className={styles.backdrop} onClick={() => setView("closed")} aria-hidden="true" />
            ) : null}

            {view === "menu" ? (
                <div className={styles.options} role="menu">
                    <button type="button" role="menuitem" className={`${styles.option} glass glass--frost`} onClick={() => setView("transaction")}>
                        <span className={`${styles.optionIcon} glass glass--ink`}><SwapIcon /></span>
                        <span className={styles.optionText}>
                            <span className={styles.optionTitle}>Nova transação</span>
                            <span className={styles.optionSub}>Entrada ou saída de dinheiro</span>
                        </span>
                    </button>
                    <button type="button" role="menuitem" className={`${styles.option} glass glass--frost`} onClick={() => setView("bill")}>
                        <span className={`${styles.optionIcon} glass glass--ink`}><CalendarIcon /></span>
                        <span className={styles.optionText}>
                            <span className={styles.optionTitle}>Nova conta</span>
                            <span className={styles.optionSub}>Algo para pagar até uma data</span>
                        </span>
                    </button>
                </div>
            ) : null}

            {isSheet ? (
                <div className={styles.sheet} role="dialog" aria-modal="true" aria-labelledby="sheet-title">
                    <div className={styles.handle} />
                    <div className={styles.sheetHeader}>
                        <h2 id="sheet-title" className={styles.sheetTitle}>{sheetTitle}</h2>
                        <button type="button" className={`${styles.closeButton} glass glass--clear`} onClick={() => setView("closed")} aria-label="Fechar">
                            <CloseIcon />
                        </button>
                    </div>
                    {view === "transaction" ? transactionForm : billForm}
                </div>
            ) : (
                <button
                    type="button"
                    className={`${styles.fab} ${view === "menu" ? styles.fabOpen : ""} glass glass--orange`}
                    onClick={() => setView(view === "menu" ? "closed" : "menu")}
                    aria-label={view === "menu" ? "Fechar menu" : "Adicionar"}
                    aria-expanded={view === "menu"}
                >
                    <PlusIcon />
                </button>
            )}
        </>
    )
}
