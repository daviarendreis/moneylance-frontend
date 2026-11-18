import type { Transaction } from "./transaction";

export type NewTransactionInput = Omit<Transaction, "id" | "createdAt">