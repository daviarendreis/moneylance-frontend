import type { Category } from "../types/category";

interface CategorySelectProps {
    categories: Category[]
    value: string
    onChange: (categoryId: string) => void
}

export default function CategorySelect ({ categories, value, onChange }: CategorySelectProps) {
    return (
        <>
            <label htmlFor="categories">Categoria:</label>
            <select name="categories" 
            id="categories" 
            value={value} 
            onChange={(e) => onChange(e.target.value)}
            required>
                <option value="">Selecione uma categoria</option>
                {categories.map(cat => (
                    <option value={cat.id} key={cat.id}>{cat.name}</option>
                ))}
            </select>
        </>
    )
}