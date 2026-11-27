import type { Category } from "../types/category";

const mockCategories: Category[] = [
    {
        id: "cat-mercado",
        name: "Mercado",
        icon: "cart",
        isDefault: true,
        type: "expense"
    }, {
        id: "cat-salario",
        name: "Salário",
        icon: "wallet",
        isDefault: true,
        type: "income"
    }, {
        id: "cat-venda",
        name: "Venda",
        icon: "tag",
        isDefault: true,
        type: "income"
    }, {
        id: "cat-transporte",
        name: "Transporte",
        icon: "bus",
        isDefault: true,
        type: "expense"
    }, {
        id: "cat-conforto",
        name: "Conforto",
        icon: "sofa",
        isDefault: true,
        type: "expense"
    }, {
        id: "cat-moradia",
        name: "Moradia",
        icon: "house",
        isDefault: true,
        type: "expense"
    }, {
        id: "cat-contas-casa",
        name: "Contas da casa",
        icon: "bolt",
        isDefault: true,
        type: "expense"
    }, {
        id: "cat-alimentacao-fora",
        name: "Alimentação fora",
        icon: "utensils",
        isDefault: true,
        type: "expense"
    }, {
        id: "cat-saude",
        name: "Saúde",
        icon: "health",
        isDefault: true,
        type: "expense"
    }, {
        id: "cat-lazer",
        name: "Lazer",
        icon: "ticket",
        isDefault: true,
        type: "expense"
    }, {
        id: "cat-outros",
        name: "Outros",
        icon: "dots",
        isDefault: true,
        type: "both"
    }
]

export function getCategories(): Promise<Category[]> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockCategories), (500))
    })
}