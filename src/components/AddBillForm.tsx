import { useState, type FormEvent } from "react"
import type { NewBillInput } from "../types/newBillInput"
import forms from "./forms.module.css"

interface AddBillFormProps {
    addBill: (newBill: NewBillInput) => void
}

export default function AddBillForm({addBill}: AddBillFormProps) {
    const [description, setDescription] = useState<string>("")
    const [amount, setAmount] = useState<number>(0)
    const [dueDate, setDueDate] = useState<string>("")
    const [isRecurring, setIsRecurring] = useState<boolean>(false)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newBill: NewBillInput = {
            description,
            amount,
            dueDate,
            isRecurring
        }

        addBill(newBill)
        setDescription("")
        setAmount(0)
        setDueDate("")
        setIsRecurring(false)
    }

    return (
        <form onSubmit={handleSubmit} className={forms.form}>
            <div className={forms.field}>
                <label htmlFor="amount" className={forms.label}>Valor</label>
                <div className={forms.money}>
                    <span className={forms.moneyPrefix} aria-hidden="true">R$</span>
                    <input type="number"
                    min={0.01}
                    step={0.01}
                    name="amount"
                    id="amount"
                    className={`${forms.input} ${forms.moneyInput}`}
                    inputMode="decimal"
                    placeholder="0,00"
                    value={amount === 0 ? "" : amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required/>
                </div>
            </div>

            <div className={forms.field}>
                <label htmlFor="description" className={forms.label}>Descrição</label>
                <input type="text"
                name="description"
                id="description"
                className={forms.input}
                placeholder="Ex.: Plano de saúde"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required/>
            </div>

            <div className={forms.field}>
                <label htmlFor="dueDate" className={forms.label}>Data de vencimento</label>
                <input type="date"
                name="dueDate"
                id="dueDate"
                className={forms.input}
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required/>
            </div>

            <label htmlFor="isRecurring" className={forms.switchRow}>
                <span className={forms.switchText}>
                    <span className={forms.switchTitle}>Recorrente</span>
                    <span className={forms.switchSub}>Repete todo mês</span>
                </span>
                <input type="checkbox"
                name="isRecurring"
                id="isRecurring"
                className={forms.switch}
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}/>
            </label>

            <button type="submit" className={forms.submit}>Adicionar</button>
        </form>
    )
}