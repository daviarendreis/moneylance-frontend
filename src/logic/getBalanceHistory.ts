import type { BalancePoint } from "../types/balancePoint"
import type { Transaction } from "../types/transaction"
import getBalance from "./getBalance"
import toYMD from "./toYMD"

export default function getBalanceHistory(transactions: Transaction[]) {
    const days: string[] = []
    const today = new Date()

    for (let i = 29; i >= 0; i--) {
        const dateRaw = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i)
        const dateStr = toYMD(dateRaw)
        days.push(dateStr)
    }

    const balancePoint: BalancePoint[] = days.map((day) => {
        const transactionsOfDay = transactions.filter(tr => toYMD(new Date(tr.createdAt)) <= day)
        const amount = getBalance(transactionsOfDay)

        return { date: day, balance: amount }
    })

    return balancePoint
}