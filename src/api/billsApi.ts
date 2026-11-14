import type { Bill } from "../types/bill";

const mockBills: Bill[] = [
    {
        id: crypto.randomUUID(),
        description: "Aluguel",
        amount: 1850.0,
        dueDate: "2026-12-05",
        isRecurring: true,
        isPaid: false,
        createdAt: "2026-11-01T10:15:00.000Z",
    },
    {
        id: crypto.randomUUID(),
        description: "Conta de luz",
        amount: 237.45,
        dueDate: "2026-11-20",
        isRecurring: true,
        isPaid: false,
        createdAt: "2026-11-03T14:30:00.000Z",
    },
    {
        id: crypto.randomUUID(),
        description: "Internet",
        amount: 119.9,
        dueDate: "2026-11-10",
        isRecurring: true,
        isPaid: true,
        createdAt: "2026-10-28T09:00:00.000Z",
    },
    {
        id: crypto.randomUUID(),
        description: "Conserto do notebook",
        amount: 640.0,
        dueDate: "2026-11-25",
        isRecurring: false,
        isPaid: false,
        createdAt: "2026-11-12T18:45:00.000Z",
    },
    {
        id: crypto.randomUUID(),
        description: "Assinatura de streaming",
        amount: 39.9,
        dueDate: "2026-11-15",
        isRecurring: true,
        isPaid: true,
        createdAt: "2026-10-15T08:20:00.000Z",
    }
]

export default function getBills (): Promise<Bill[]> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockBills), (500))
    })
}