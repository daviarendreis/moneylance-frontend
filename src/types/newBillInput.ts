import type { Bill } from "./bill";

export type NewBillInput = Omit<Bill, "id" | "isPaid" | "createdAt">