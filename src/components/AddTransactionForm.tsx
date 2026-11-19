import { useState, type FormEvent } from "react";
import type { NewTransactionInput } from "../types/newTransactionInput";
import type { TransactionsType } from "../types/transactionsType";
import CategorySelect from "./CategorySelect";
import type { Category } from "../types/category";

interface AddTransactionFormProps {
    addTransaction: (newTransactionRaw: NewTransactionInput) => void
    categories: Category[]
}

export default function AddTransactionForm ({ addTransaction, categories }: AddTransactionFormProps) {
    const [description, setDescription] = useState<string>("")
    const [amount, setAmount] = useState<number>(0)
    const [type, setType] = useState<TransactionsType>("income")
    const [categoryId, setCategoryId] = useState<string>("")

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newTransaction: NewTransactionInput = {
            description,
            amount,
            type,
            categoryId,
        }

        addTransaction(newTransaction)
        setDescription("")
        setAmount(0)
        setType("income")
        setCategoryId("")
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Descrição:</label>
            <input type="text" 
            name="description" 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            required/>

            <label htmlFor="amount">Valor:</label>
            <input type="number" 
            name="amount" 
            id="amount" 
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            min={0}
            step={0.01}
            required/>

            <select name="type" 
            id="type" 
            value={type} 
            onChange={(e) => setType(e.target.value as TransactionsType)}
            required>
                <option key={"income"} value="income">Entrada</option>
                <option key={"expense"} value="expense">Saída</option>
            </select>

            <CategorySelect categories={categories} value={categoryId} onChange={setCategoryId}/>

            <button type="submit">Adicionar</button>
        </form>
    )
}