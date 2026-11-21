import type { Bill } from '../types/bill';
import type { Transaction } from './../types/transaction';
export function sortTransactions (transactions: Transaction[]) {
    const sorted = [...transactions].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    return sorted
}

export function sortBills (bills: Bill[]) {
    const sorted = [...bills].sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    )
    return sorted
}