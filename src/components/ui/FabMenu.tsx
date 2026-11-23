import { useEffect, useState, type ReactNode } from "react"
import { CalendarIcon, CheckIcon, CloseIcon, PlusIcon, SwapIcon } from "./icons"
import styles from "./FabMenu.module.css"

interface FabMenuProps {
    transactionForm: (onSubmitted: () => void) => ReactNode
    billForm: (onSubmitted: () => void) => ReactNode
}

type View = "closed" | "menu" | "transaction" | "bill"

export default function FabMenu({ transactionForm, billForm }: FabMenuProps) {
    const [view, setView] = useState<View>("closed")
    // Estado só de interface: fora do topo da página, o "+" fica menor e transparente
    const [compact, setCompact] = useState(false)

    useEffect(() => {
        const onScroll = () => setCompact(window.scrollY > 24)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const sheetTitle = view === "transaction" ? "Nova transação" : "Nova conta"
    const isSheet = view === "transaction" || view === "bill"
    const closeSheet = () => setView("closed")

    // Aviso depois de salvar: fecha a folha (como antes) e mostra "… adicionada" por alguns segundos
    const [toast, setToast] = useState<string | null>(null)
    const handleSubmitted = () => {
        setToast(view === "transaction" ? "Transação adicionada" : "Conta adicionada")
        closeSheet()
    }

    useEffect(() => {
        if (!toast) return
        const timer = window.setTimeout(() => setToast(null), 2600)
        return () => window.clearTimeout(timer)
    }, [toast])

    return (
        <>
            {view !== "closed" ? (
                <div className={styles.backdrop} onClick={() => setView("closed")} aria-hidden="true" />
            ) : null}

            {view === "menu" ? (
                <div className={styles.options} role="menu">
                    <button type="button" role="menuitem" className={styles.option} onClick={() => setView("transaction")}>
                        <span className={styles.optionIcon}><SwapIcon /></span>
                        <span className={styles.optionText}>
                            <span className={styles.optionTitle}>Nova transação</span>
                            <span className={styles.optionSub}>Entrada ou saída de dinheiro</span>
                        </span>
                    </button>
                    <button type="button" role="menuitem" className={styles.option} onClick={() => setView("bill")}>
                        <span className={styles.optionIcon}><CalendarIcon /></span>
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
                        <button type="button" className={styles.closeButton} onClick={() => setView("closed")} aria-label="Fechar">
                            <CloseIcon />
                        </button>
                    </div>
                    {view === "transaction" ? transactionForm(handleSubmitted) : billForm(handleSubmitted)}
                </div>
            ) : (
                <button
                    type="button"
                    className={`${styles.fab} ${view === "menu" ? styles.fabOpen : ""} ${compact && view === "closed" ? styles.fabCompact : ""} glass glass--orange`}
                    onClick={() => setView(view === "menu" ? "closed" : "menu")}
                    aria-label={view === "menu" ? "Fechar menu" : "Adicionar"}
                    aria-expanded={view === "menu"}
                >
                    <PlusIcon />
                </button>
            )}

            <div className={styles.toastRegion} role="status" aria-live="polite">
                {toast ? (
                    <div key={toast} className={styles.toast}>
                        <span className={styles.toastIcon}><CheckIcon size={16} /></span>
                        {toast}
                    </div>
                ) : null}
            </div>
        </>
    )
}
