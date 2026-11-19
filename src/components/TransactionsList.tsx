import formatCurrency from "../logic/formatCurrency";
import type { Transaction } from "../types/transaction";

interface TransactionsListProps {
    transactions: Transaction[]
}

export default function TransactionsList ({ transactions }: TransactionsListProps) {
    return (
        <>
        {transactions.length > 0 ? 
        transactions.map((tr) => (
            <p key={tr.id}>{tr.description} - {tr.type} - {formatCurrency(tr.amount)}</p>
        )) : <p>Nenhuma transação registrada</p>}
        </>
    )
}