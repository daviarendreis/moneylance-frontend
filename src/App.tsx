import AddBillForm from "./components/AddBillForm"
import AddTransactionForm from "./components/AddTransactionForm"
import BillsList from "./components/BillsList"
import TransactionsList from "./components/TransactionsList"
import useBills from "./hooks/useBills"
import useCategories from "./hooks/useCategories"
import useTransactions from "./hooks/useTransactions"
import getBalance from "./logic/getBalance"

function App() {
  const { bills, error: billError, loading: billLoading, markAsPaid, addBill } = useBills()
  const { categories, error: catError, loading: catLoading } = useCategories()
  const { transactions, error: trError, loading: trLoading, addTransaction } = useTransactions()

  if (billLoading || catLoading || trLoading) return <p>Carregando...</p>
  if (billError || catError || trError) return <p>{"Erro ao Carregar"}</p>
  
  return (
    <>
    <BillsList bills={bills} markAsPaid={markAsPaid}/>
    <br />
    <AddBillForm addBill={addBill}/>

    <hr />
    <p><strong>Saldo: {getBalance(transactions)}</strong></p>
    <br />
    <TransactionsList transactions={transactions}/>
    <br />
    <AddTransactionForm addTransaction={addTransaction} categories={categories}/>
    </>
)
}

export default App
