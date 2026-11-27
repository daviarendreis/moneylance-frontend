import type { Category } from "../types/category";

const mockCategories: Category[] = [
    {
        id: "cat-mercado",
        name: "Mercado",
        icon: "cart",
        isDefault: true
    }, {
        id: "cat-salario",
        name: "Salário",
        icon: "wallet",
        isDefault: true
    }, {
        id: "cat-venda",
        name: "Venda",
        icon: "tag",
        isDefault: true
    }, {
        id: "cat-transporte",
        name: "Transporte",
        icon: "bus",
        isDefault: true
    }, {
        id: "cat-conforto",
        name: "Conforto",
        icon: "sofa",
        isDefault: true
    }, {
        id: "cat-moradia",
        name: "Moradia",
        icon: "house",
        isDefault: true
    }, {
        id: "cat-contas-casa",
        name: "Contas da casa",
        icon: "bolt",
        isDefault: true
    }, {
        id: "cat-alimentacao-fora",
        name: "Alimentação fora",
        icon: "utensils",
        isDefault: true
    }, {
        id: "cat-saude",
        name: "Saúde",
        icon: "health",
        isDefault: true
    }, {
        id: "cat-lazer",
        name: "Lazer",
        icon: "ticket",
        isDefault: true
    }, {
        id: "cat-outros",
        name: "Outros",
        icon: "dots",
        isDefault: true
    }
]

export function getCategories(): Promise<Category[]> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockCategories), (500))
    })
}