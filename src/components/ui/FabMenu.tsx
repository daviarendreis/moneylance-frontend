import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react"
import { CalendarIcon, CheckIcon, CloseIcon, PlusIcon, SwapIcon } from "./icons"
import styles from "./FabMenu.module.css"

interface FabMenuProps {
    transactionForm: (onSubmitted: () => void) => ReactNode
    billForm: (onSubmitted: () => void) => ReactNode
}

type View = "closed" | "menu" | "transaction" | "bill"

const FOCUSABLE = 'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'

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

    // ---------- Proteção da folha (só interface) ----------
    const sheetRef = useRef<HTMLDivElement>(null)
    const fabRef = useRef<HTMLButtonElement>(null)
    const [nudge, setNudge] = useState(false)

    // Há algo digitado no formulário aberto? (lê os campos na tela; não muda os formulários)
    function isFormDirty() {
        const fields = sheetRef.current?.querySelectorAll<HTMLInputElement | HTMLSelectElement>("input, select") ?? []
        return Array.from(fields).some((field) => {
            if (field instanceof HTMLInputElement) {
                if (field.type === "radio") return false
                if (field.type === "checkbox") return field.checked
            }
            return field.value.trim() !== ""
        })
    }

    // Tocar fora: fecha, a menos que haja algo digitado — aí a folha só dá um "tranco" (fecha pelo ×)
    function onBackdropClick() {
        if (isSheet && isFormDirty()) {
            setNudge(true)
            return
        }
        setView("closed")
    }

    // Esc fecha o menu ou a folha
    useEffect(() => {
        if (view === "closed") return
        const onKey = (event: globalThis.KeyboardEvent) => {
            if (event.key === "Escape") setView("closed")
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [view])

    // Ao abrir a folha, o foco vai para ela; ao fechar, volta para o "+"
    const wasSheet = useRef(false)
    useEffect(() => {
        if (isSheet) sheetRef.current?.focus()
        else if (wasSheet.current) fabRef.current?.focus()
        wasSheet.current = isSheet
    }, [isSheet])

    // Tab circula só dentro da folha
    function trapFocus(event: KeyboardEvent<HTMLDivElement>) {
        if (event.key !== "Tab" || !sheetRef.current) return
        const items = Array.from(sheetRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))
        if (items.length === 0) return
        const first = items[0]
        const last = items[items.length - 1]
        if (event.shiftKey && (document.activeElement === first || document.activeElement === sheetRef.current)) {
            event.preventDefault()
            last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault()
            first.focus()
        }
    }

    return (
        <>
            {view !== "closed" ? (
                <div className={styles.backdrop} onClick={onBackdropClick} aria-hidden="true" />
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
                <div
                    ref={sheetRef}
                    className={`${styles.sheet} ${nudge ? styles.nudge : ""}`}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="sheet-title"
                    tabIndex={-1}
                    onKeyDown={trapFocus}
                    onAnimationEnd={() => setNudge(false)}
                >
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
                    ref={fabRef}
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
