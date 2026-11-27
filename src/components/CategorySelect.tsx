import type { Category } from "../types/category";
import { ChevronDownIcon } from "./ui/icons";
import forms from "./forms.module.css";
import type { TransactionsType } from "../types/transactionsType";

interface CategorySelectProps {
    categories: Category[]
    value: string
    onChange: (categoryId: string) => void
    transactionType: TransactionsType
}

export default function CategorySelect ({ categories, value, onChange, transactionType }: CategorySelectProps) {
    const visibleCategories = transactionType === "income" ?
     categories.filter(cat => cat.type === "income" || cat.type === "both") :
     categories.filter(cat => cat.type === "expense" || cat.type === "both")
    return (
        <div className={forms.field}>
            <label htmlFor="categories" className={forms.label}>Categoria</label>
            <div className={forms.selectWrap}>
                <select name="categories"
                id="categories"
                className={`${forms.input} ${forms.select}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required>
                    <option value="">Selecione uma categoria</option>
                    {visibleCategories.map(cat => (
                        <option value={cat.id} key={cat.id}>{cat.name}</option>
                    ))}
                </select>
                <ChevronDownIcon />
            </div>
        </div>
    )
}
