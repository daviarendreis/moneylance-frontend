import type { Bill } from "../types/bill";

export default function getBillsTallied (bills: Bill[]) {
    const paid: number = bills.filter(b => b.isPaid).length
    const unpaid: number = bills.filter(b => !b.isPaid).length

    return { paid, unpaid }
}