import BillsList from "./components/BillsList"
import useBills from "./hooks/useBills"

function App() {
  const { bills, error, loading, markAsPaid } = useBills()

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>
  if (bills.length === 0) return <p>Nenhuma conta cadastrada</p>
  return <BillsList bills={bills} markAsPaid={markAsPaid}/>
}

export default App
