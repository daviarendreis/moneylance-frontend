import AddBillForm from "./components/AddBillForm"
import BillsList from "./components/BillsList"
import useBills from "./hooks/useBills"

function App() {
  const { bills, error, loading, markAsPaid, addBill } = useBills()

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>
  
  return (
    <>
    <BillsList bills={bills} markAsPaid={markAsPaid}/>
    <AddBillForm addBill={addBill}/>
    </>
)
}

export default App
