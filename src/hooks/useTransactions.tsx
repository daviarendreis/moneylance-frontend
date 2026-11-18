import { useEffect, useState } from "react";
import type { Transaction } from "../types/transaction";
import { getTransactions } from "../api/transactionsApi";
import type { NewTransactionInput } from "../types/newTransactionInput";

export default function useTransactions () {
    const  [transactions, setTransactions] = useState<Transaction[]>([])
    const  [error, setError] = useState<string | null>(null)
    const  [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getTransactions()
        .then((data) => setTransactions(data))
        .catch(() => setError("Erro ao Carregar"))
        .finally(() => setLoading(false))
    }, [])

    function addTransaction(newTransactionRaw: NewTransactionInput) {
        const newTransaction: Transaction = {
            ...newTransactionRaw,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString()
        }

        setTransactions((state) => [...state, newTransaction])
    }

    return { transactions, error, loading, addTransaction }
}