import type { Bill } from "../types/bill";

interface BillsListProps {
    bills: Bill[]
    markAsPaid: (id: string) => void
}

export default function BillsList ({bills, markAsPaid}: BillsListProps) {
    return (
        <ul>
            {bills.map(bill => (
                <li key={bill.id}>
                    <span>{bill.description} - 
                          {bill.amount} - 
                          {bill.isPaid ? "Paga" : "Pendente"} -- 
                          {!bill.isPaid ? <button onClick={() => markAsPaid(bill.id)}>Pagar</button> : null }
                    </span>
                </li>
                
            ))}
        </ul>
    )
}