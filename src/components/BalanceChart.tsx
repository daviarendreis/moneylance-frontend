import { useId } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, type TooltipContentProps } from "recharts";
import formatCurrency from "../logic/formatCurrency";
import formatDate from "../logic/formatDate";
import styles from "./BalanceChart.module.css";
import type { BalancePoint } from "../types/balancePoint";

interface BalanceChartProps {
    history: BalancePoint[]
}

// Balão ao tocar num ponto: "23/11 · R$ 4.923,70"
function ChartTooltip({ active, payload }: TooltipContentProps) {
    if (!active || !payload || payload.length === 0) return null
    const point = payload[0].payload as BalancePoint
    return (
        <div className={styles.tooltip}>
            <span className={styles.tooltipDate}>{formatDate(point.date)}</span>
            <span className={`${styles.tooltipValue} tabular`}>{formatCurrency(point.balance)}</span>
        </div>
    )
}

export default function BalanceChart({ history }: BalanceChartProps) {
    const gradientId = useId()

    if (history.length === 0) return <p className={styles.empty}>Ainda não há movimentações nos últimos 30 dias.</p>

    const balances = history.map((point) => point.balance)
    const highest = Math.max(...balances)
    const lowest = Math.min(...balances)
    const last = history[history.length - 1].date

    // Quatro marcas no eixo: começo, dois pontos no meio e hoje
    const step = Math.max(1, Math.floor((history.length - 1) / 3))
    const ticks = [0, step, step * 2, history.length - 1].map((index) => history[Math.min(index, history.length - 1)].date)

    return (
        <div className={styles.chart}>
            <div
                className={styles.plot}
                role="img"
                aria-label={`Saldo dos últimos ${history.length} dias: maior ${formatCurrency(highest)}, menor ${formatCurrency(lowest)}, hoje ${formatCurrency(balances[balances.length - 1])}`}
            >
                <ResponsiveContainer width="100%" height={160}>
                    <AreaChart data={history} margin={{ top: 12, right: 4, bottom: 0, left: 4 }}>
                        <defs>
                            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0" stopColor="currentColor" stopOpacity={0.28} />
                                <stop offset="1" stopColor="currentColor" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="date"
                            ticks={ticks}
                            interval={0}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={10}
                            padding={{ left: 18, right: 18 }}
                            tickFormatter={(date: string) => (date === last ? "Hoje" : formatDate(date))}
                        />
                        <YAxis hide domain={["dataMin", "dataMax"]} />
                        <Tooltip
                            content={ChartTooltip}
                            cursor={{ stroke: "currentColor", strokeOpacity: 0.35, strokeWidth: 1.5 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="balance"
                            stroke="currentColor"
                            strokeWidth={3}
                            fill={`url(#${gradientId})`}
                            dot={false}
                            activeDot={{ r: 6, strokeWidth: 3, stroke: "var(--color-surface)", fill: "currentColor" }}
                            animationDuration={700}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <dl className={styles.range}>
                <div>
                    <dt>Maior</dt>
                    <dd className="tabular">{formatCurrency(highest)}</dd>
                </div>
                <div>
                    <dt>Menor</dt>
                    <dd className="tabular">{formatCurrency(lowest)}</dd>
                </div>
            </dl>
        </div>
    )
}
