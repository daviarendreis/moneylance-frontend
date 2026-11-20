import type { ReactNode } from "react"
import styles from "./SectionCard.module.css"

interface SectionCardProps {
    title?: string
    subtitle?: string
    children: ReactNode
}

export default function SectionCard({ title, subtitle, children }: SectionCardProps) {
    return (
        <section className={styles.card}>
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
