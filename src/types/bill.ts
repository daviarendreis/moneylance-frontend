export interface Bill {
    id: string
    description: string
    amount: number
    dueDate: string
    isRecurring: boolean
    isPaid: boolean
    createdAt: string
}
