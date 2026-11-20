import { PLACEHOLDER_CHART_LABELS, PLACEHOLDER_CHART_LINE } from "../placeholders/layoutPlaceholders";
import styles from "./BalanceChart.module.css";

// Dado fixo: desenha uma linha estática até existir a lógica de saldo por data (ver PENDENCIAS.md)
export default function BalanceChart() {
    const line = PLACEHOLDER_CHART_LINE
    const area = `${line} L 322 50 L 322 150 L 0 150 Z`

    return (
        <div className={styles.chart}>
            <svg className={styles.svg} viewBox="0 0 322 150" preserveAspectRatio="none" role="img" aria-label="Gráfico do saldo no mês">
                <defs>
                    <linearGradient id="balance-area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="currentColor" stopOpacity="0.28" />
                        <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <line x1="0" y1="40" x2="322" y2="40" className={styles.grid} />
                <line x1="0" y1="85" x2="322" y2="85" className={styles.grid} />
                <line x1="0" y1="130" x2="322" y2="130" className={styles.grid} />
                <path d={area} fill="url(#balance-area)" />
                <path d={line} className={styles.line} vectorEffect="non-scaling-stroke" />
            </svg>
            <div className={styles.labels}>
                {PLACEHOLDER_CHART_LABELS.map((label) => (
                    <span key={label}>{label}</span>
                ))}
            </div>
        </div>
    )
}
