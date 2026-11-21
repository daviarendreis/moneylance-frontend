import AddBillForm from "./components/AddBillForm"
import AddTransactionForm from "./components/AddTransactionForm"
import BalanceChart from "./components/BalanceChart"
import BillsList from "./components/BillsList"
import ExpensesSummary from "./components/ExpensesSummary"
import NextBillCard from "./components/NextBillCard"
import TransactionsList from "./components/TransactionsList"
import AppMark from "./components/ui/AppMark"
import FabMenu from "./components/ui/FabMenu"
import SectionCard from "./components/ui/SectionCard"
import useBills from "./hooks/useBills"
import useCategories from "./hooks/useCategories"
import useTransactions from "./hooks/useTransactions"
import formatCurrency from "./logic/formatCurrency"
import getBalance from "./logic/getBalance"
import { PLACEHOLDER_BILLS_COUNT, PLACEHOLDER_MONTH } from "./placeholders/layoutPlaceholders"
import styles from "./App.module.css"

function App() {
  const { bills, error: billError, loading: billLoading, markAsPaid, addBill } = useBills()
  const { categories, error: catError, loading: catLoading } = useCategories()
  const { transactions, error: trError, loading: trLoading, addTransaction } = useTransactions()

  if (billLoading || catLoading || trLoading) return <p className={styles.status}>Carregando…</p>
  if (billError || catError || trError) return <p className={styles.status}>Não foi possível carregar seus dados. Recarregue a página.</p>

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <AppMark size={32} />
          <h1 className={styles.brandName}>MoneyLance</h1>
        </div>
        <span className={styles.month}>{PLACEHOLDER_MONTH}</span>
      </header>

      <main className={styles.main}>
        <div className={styles.top}>
          <section className={`${styles.balance} glass glass--sky`} aria-label="Saldo atual">
            <p className={styles.balanceLabel}>Saldo atual</p>
            <p className={`${styles.balanceValue} tabular`}>{formatCurrency(getBalance(transactions))}</p>
          </section>
          <NextBillCard bills={bills} />
        </div>

        <SectionCard title="Últimas transações" variant="plain">
          <TransactionsList transactions={transactions} categories={categories}/>
        </SectionCard>

        <SectionCard title="Saldo no mês" subtitle="Como seu dinheiro variou no mês">
          <BalanceChart />
        </SectionCard>

        <SectionCard title="Gastos por categoria">
          <ExpensesSummary transactions={transactions} categories={categories}/>
        </SectionCard>

        <SectionCard title="Contas" subtitle={PLACEHOLDER_BILLS_COUNT}>
          <BillsList bills={bills} markAsPaid={markAsPaid}/>
        </SectionCard>
      </main>

      <FabMenu
        transactionForm={<AddTransactionForm addTransaction={addTransaction} categories={categories}/>}
        billForm={<AddBillForm addBill={addBill}/>}
      />
    </div>
)
}

export default App
