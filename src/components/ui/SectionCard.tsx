import type { ReactNode } from "react"
import styles from "./SectionCard.module.css"

interface SectionCardProps {
    title?: string
    subtitle?: string
    /** Apresentação: "card" (superfície branca, padrão) ou "plain" (direto sobre o fundo) */
    variant?: "card" | "plain"
    children: ReactNode
}

export default function SectionCard({ title, subtitle, variant = "card", children }: SectionCardProps) {
    return (
        <section className={`${styles.section} ${variant === "plain" ? styles.plain : styles.card}`}>
            {title ? (
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
                </div>
            ) : null}
            {children}
        </section>
    )
}
