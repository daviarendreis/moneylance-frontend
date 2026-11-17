import { useState, type FormEvent } from "react"
import type { NewBillInput } from "../types/newBillInput"

interface AddBillFormProps {
    addBill: (newBill: NewBillInput) => void
}



export default function AddBillForm({addBill}: AddBillFormProps) {
    const [description, setDescription] = useState<string>("")
    const [amount, setAmount] = useState<number>(0)
    const [dueDate, setDueDate] = useState<string>("")
    const [isRecurring, setIsRecurring] = useState<boolean>(false)

    

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        const newBill: NewBillInput = {
            description,
            amount,
            dueDate,
            isRecurring
        }
        e.preventDefault()
        addBill(newBill)
        setDescription("")
        setAmount(0)
        setDueDate("")
        setIsRecurring(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Descricao:</label>
            <input type="text" 
            name="description" 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}/>

            <label htmlFor="amount">Valor:</label>
            <input type="number" 
            min={0.01} 
            step={0.01} 
            name="amount" 
            id="amount" 
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}/>

            <label htmlFor="dueDate">Data de Vencimento:</label>
            <input type="date" 
            name="dueDate" 
            id="dueDate" 
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}/>

            <label htmlFor="isRecurring">Recorrente:</label>
            <input type="checkbox" 
            name="isRecurring" 
            id="isRecurring"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}/>

            <button type="submit">Adicionar</button>
        </form>
    )
}