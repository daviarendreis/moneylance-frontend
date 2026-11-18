import { useEffect, useState } from "react"
import type { Category } from "../types/category"
import { getCategories } from "../api/categoriesApi"

export default function useCategories () {
    const [categories, setCategories] = useState<Category[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getCategories()
        .then((data) => setCategories(data))
        .catch(() => setError("Eero ao Carregar"))
        .finally(() => setLoading(false))
    })

    return { categories, error, loading }
}