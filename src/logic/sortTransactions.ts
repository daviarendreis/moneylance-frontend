import type { Transaction } from './../types/transaction';
export default function sortTransactions (transactions: Transaction[]) {
    const sorted = [...transactions].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    return sorted
}