import AddBillForm from "./components/AddBillForm"
import AddTransactionForm from "./components/AddTransactionForm"
import BalanceChart from "./components/BalanceChart"
import BillsList from "./components/BillsList"
import ExpensesSummary from "./components/ExpensesSummary"
import NextBillCard from "./components/NextBillCard"
import TransactionsList from "./components/TransactionsList"
import FabMenu from "./components/ui/FabMenu"
import GlassCard from "./components/ui/GlassCard"
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

  if (billLoading || catLoading || trLoading) return <p className={styles.status}>Carregando...</p>
  if (billError || catError || trError) return <p className={styles.status}>{"Erro ao Carregar"}</p>

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={`${styles.logo} glass glass--ink`} aria-hidden="true"><span className={styles.logoDot} /></span>
          <h1 className={styles.brandName}>MoneyLance</h1>
        </div>
        <span className={styles.month}>{PLACEHOLDER_MONTH}</span>
      </header>

      <main className={styles.main}>
        <div className={styles.topRow}>
          <section className={`${styles.balanceCard} glass glass--sky`} aria-label="Saldo atual">
            <p className={styles.balanceLabel}>Saldo atual</p>
            <p className={`${styles.balanceValue} tabular`}>{formatCurrency(getBalance(transactions))}</p>
          </section>
          <NextBillCard />
        </div>

        <GlassCard title="Últimas transações">
          <TransactionsList transactions={transactions}/>
        </GlassCard>

        <GlassCard title="Saldo no mês" subtitle="Como seu dinheiro variou no mês">
          <BalanceChart />
        </GlassCard>

        <GlassCard title="Gastos por categoria">
          <ExpensesSummary transactions={transactions} categories={categories}/>
        </GlassCard>

        <GlassCard title="Contas" subtitle={PLACEHOLDER_BILLS_COUNT}>
          <BillsList bills={bills} markAsPaid={markAsPaid}/>
        </GlassCard>
      </main>

      <FabMenu
        transactionForm={<AddTransactionForm addTransaction={addTransaction} categories={categories}/>}
        billForm={<AddBillForm addBill={addBill}/>}
      />
    </div>
)
}

export default App
