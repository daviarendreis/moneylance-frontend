import type { Category } from "../types/category"

export default function findCategory (categoryId: string, categories: Category[]) {
        const category = categories.find(cat => cat.id === categoryId)
        return category?.name
}