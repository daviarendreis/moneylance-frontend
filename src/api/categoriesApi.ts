import type { Category } from "../types/category";

const mockCategories: Category[] = [
    {
        id: "cat-mercado",
        name: "Mercado",
        icon: null,
        isDefault: true
    }, {
        id: "cat-salario",
        name: "Salário",
        icon: null,
        isDefault: true
    }, {
        id: "cat-venda",
        name: "Venda",
        icon: null,
        isDefault: true
    }, {
        id: "cat-transporte",
        name: "Transporte",
        icon: null,
        isDefault: true
    }, {
        id: "cat-conforto",
        name: "Conforto",
        icon: null,
        isDefault: true
    }, {
        id: "cat-moradia",
        name: "Moradia",
        icon: null,
        isDefault: true
    }, {
        id: "cat-contas-casa",
        name: "Contas da casa",
        icon: null,
        isDefault: true
    }, {
        id: "cat-alimentacao-fora",
        name: "Alimentação fora",
        icon: null,
        isDefault: true
    }, {
        id: "cat-saude",
        name: "Saúde",
        icon: null,
        isDefault: true
    }, {
        id: "cat-lazer",
        name: "Lazer",
        icon: null,
        isDefault: true
    }, {
        id: "cat-outros",
        name: "Outros",
        icon: null,
        isDefault: true
    }
]

export function getCategories(): Promise<Category[]> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockCategories), (500))
    })
}