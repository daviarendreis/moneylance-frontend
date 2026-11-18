import type { TransactionsType } from "./transactionsType"

export interface Transaction {
    id: string
    description: string
    amount: number
    type: TransactionsType
    createdAt: string
    categoryId: string
}