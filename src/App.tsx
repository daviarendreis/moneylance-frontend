import { lazy, Suspense } from "react"
import AddBillForm from "./components/AddBillForm"
import AddTransactionForm from "./components/AddTransactionForm"
import BillsList from "./components/BillsList"
import ExpensesSummary from "./components/ExpensesSummary"
import NextBillCard from "./components/NextBillCard"
import TransactionsList from "./components/TransactionsList"
import AppMark from "./components/ui/AppMark"
import FabMenu from "./components/ui/FabMenu"
import SectionCard from "./components/ui/SectionCard"
import ThemeToggle from "./components/ui/ThemeToggle"
import useBills from "./hooks/useBills"
import useCategories from "./hooks/useCategories"
import useTransactions from "./hooks/useTransactions"
import formatCurrency from "./logic/formatCurrency"
import getBalance from "./logic/getBalance"
import styles from "./App.module.css"
import getBillsTallied from "./logic/getBillsTallied"
import getMonth from "./logic/getMonth"
import getBalanceHistory from "./logic/getBalanceHistory"

// O gráfico (Recharts) é carregado à parte: o app abre sem esperar a biblioteca
const BalanceChart = lazy(() => import("./components/BalanceChart"))

function App() {
  const { bills, error: billError, loading: billLoading, markAsPaid, addBill } = useBills()
  const { categories, error: catError, loading: catLoading } = useCategories()
  const { transactions, error: trError, loading: trLoading, addTransaction } = useTransactions()

  const { paid, unpaid } = getBillsTallied(bills)

  if (billLoading || catLoading || trLoading) return <p className={styles.status}>Carregando…</p>
  if (billError || catError || trError) return (
    <div className={styles.status}>
      <p>Não foi possível carregar seus dados.</p>
      {/* No app instalado não há botão de recarregar do navegador: este faz o papel dele */}
      <button type="button" className={styles.retry} onClick={() => window.location.reload()}>Tentar de novo</button>
    </div>
  )

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <AppMark size={32} />
          <h1 className={styles.brandName}>MoneyLance</h1>
        </div>
        <div className={styles.headerEnd}>
          <span className={styles.month}>{getMonth()}</span>
          <ThemeToggle />
        </div>
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

        <SectionCard title="Últimos 30 dias" subtitle="Seu saldo dia a dia">
          <Suspense fallback={<div className={styles.chartFallback} aria-hidden="true" />}>
            <BalanceChart history={getBalanceHistory(transactions)}/>
          </Suspense>
        </SectionCard>

        <SectionCard title="Gastos por categoria">
          <ExpensesSummary transactions={transactions} categories={categories}/>
        </SectionCard>

        <SectionCard title="Contas" subtitle={`${unpaid} a pagar · ${paid} ${paid === 1 ? "paga" : "pagas"}`}>
          <BillsList bills={bills} markAsPaid={markAsPaid}/>
        </SectionCard>
      </main>

      <FabMenu
        transactionForm={(onSubmitted) => (<AddTransactionForm addTransaction={addTransaction} categories={categories} onSubmitted={onSubmitted}/>)}
        billForm={(onSubmitted) => (<AddBillForm addBill={addBill} onSubmitted={onSubmitted}/>)}
      />
    </div>
)
}

export default App
