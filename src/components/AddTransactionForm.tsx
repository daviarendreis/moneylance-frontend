import { useState, type FormEvent } from "react";
import type { NewTransactionInput } from "../types/newTransactionInput";
import type { TransactionsType } from "../types/transactionsType";
import CategorySelect from "./CategorySelect";
import type { Category } from "../types/category";
import { ArrowDownIcon, ArrowUpIcon } from "./ui/icons";
import forms from "./forms.module.css";

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
        <form onSubmit={handleSubmit} className={forms.form}>
            <fieldset className={forms.field}>
                <legend className={forms.label}>Tipo</legend>
                <div className={forms.segmented}>
                    <label className={`${forms.segment} ${forms.segmentIncome}`}>
                        <input type="radio"
                        name="type"
                        value="income"
                        checked={type === "income"}
                        onChange={(e) => setType(e.target.value as TransactionsType)}
                        required/>
                        <ArrowUpIcon size={18}/> Entrada
                    </label>
                    <label className={`${forms.segment} ${forms.segmentExpense}`}>
                        <input type="radio"
                        name="type"
                        value="expense"
                        checked={type === "expense"}
                        onChange={(e) => setType(e.target.value as TransactionsType)}/>
                        <ArrowDownIcon size={18}/> Saída
                    </label>
                </div>
            </fieldset>

            <div className={forms.field}>
                <label htmlFor="amount" className={forms.label}>Valor</label>
                <div className={forms.money}>
                    <span className={forms.moneyPrefix} aria-hidden="true">R$</span>
                    <input type="number"
                    name="amount"
                    id="amount"
                    className={`${forms.input} ${forms.moneyInput}`}
                    inputMode="decimal"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    min={0}
                    step={0.01}
                    required/>
                </div>
            </div>

            <div className={forms.field}>
                <label htmlFor="description" className={forms.label}>Descrição</label>
                <input type="text"
                name="description"
                id="description"
                className={forms.input}
                placeholder="Ex.: Farmácia"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required/>
            </div>

            <CategorySelect categories={categories} value={categoryId} onChange={setCategoryId}/>

            <button type="submit" className={`${forms.submit} glass glass--orange`}>Adicionar</button>
        </form>
    )
}