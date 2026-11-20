import type { ReactNode } from "react"
import styles from "./GlassCard.module.css"

interface GlassCardProps {
    title?: string
    subtitle?: string
    children: ReactNode
}

export default function GlassCard({ title, subtitle, children }: GlassCardProps) {
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
