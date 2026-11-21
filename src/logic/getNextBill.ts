import type { Bill } from "../types/bill";
import { sortBills } from "./sortByDate";

export default function getNextBill (bills: Bill[]): Bill | undefined {
    const unpaid = bills.filter(bill => !bill.isPaid)
    const sorted = sortBills(unpaid)
    return sorted[0]
}