import type { Category } from "../types/category";

const mockCategories: Category[] = [
    {
        id: crypto.randomUUID(),
        name: "Mercado",
        icon: null,
        isDefault: true,
        userId: null
    }, {
        id: crypto.randomUUID(),
        name: "Salário",
        icon: null,
        isDefault: true,
        userId: null
    }, {
        id: crypto.randomUUID(),
        name: "Venda",
        icon: null,
        isDefault: true,
        userId: null
    }, {
        id: crypto.randomUUID(),
        name: "Transporte",
        icon: null,
        isDefault: true,
        userId: null
    }, {
        id: crypto.randomUUID(),
        name: "Conforto",
        icon: null,
        isDefault: true,
        userId: null
    }
]

export function getCategories(): Promise<Category[]> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockCategories), (500))
    })
}