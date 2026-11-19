import type { Transaction } from "../types/transaction";

export default function getBalance (transactions: Transaction[]) {
    const balance = transactions.reduce((acc, tr) => tr.type === "income" 
    ? acc + tr.amount 
    : acc - tr.amount, 
    0)
    return balance
}