import { useEffect, useState } from "react";
import type { Bill } from "../types/bill";
import getBills from "../api/billsApi";

export default function useBills() {
    const [bills, setBills] = useState<Bill[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getBills()
        .then((data) => setBills(data))
        .catch(() => setError("Erro ao carregar"))
        .finally(() => setLoading(false))
    }, [])

    function markAsPaid (id: string) {
        setBills((state) => state.map((bill) => (bill.id === id ? {...bill, isPaid: true} : bill)))
    }
    
    return { bills, error, loading, markAsPaid}
}