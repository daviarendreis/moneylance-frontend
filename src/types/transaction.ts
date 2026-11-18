import type { TransactionsType } from "./transactionsType"

export interface Transaction {
    id: string
    description: string
    amount: number
    type: TransactionsType
    destination: string | null
    bank: string | null
    createdAt: string
    categoryId: string
}