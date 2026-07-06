import { Box, Grid, Typography } from "@mui/material";
import SummaryCard from "../components/common/SummaryCard";
import RecentTransactions from "../components/common/RecentTransactions";
import MonthlyExpenseChart from "../components/common/MonthlyExpenseChart";

const summaryCards = [
  {
    title: "Balance",
    value: "₹45,000",
  },
  {
    title: "Income",
    value: "₹80,000",
  },
  {
    title: "Expenses",
    value: "₹35,000",
  },
  {
    title: "Savings",
    value: "₹45,000",
  },
];
const transactions = [
  {
    id: 1,
    title: "Salary",
    date: "2023-10-01",
    amount: "₹50,000",
  },
  {
    id: 2,
    title: "Grocery Shopping",
    date: "2023-10-02",
    amount: "₹5,000",
  },
  {
    id: 3,
    title: "Electricity Bill",
    date: "2023-10-03",
    amount: "₹2,000",
  },
  {
    id: 4,
    title: "Internet Bill",
    date: "2023-10-04",
    amount: "₹1,500",
  },
];

const monthlyExpenses = [
  { month: "Jan", amount: 22000 },
  { month: "Feb", amount: 18000 },
  { month: "Mar", amount: 26000 },
  { month: "Apr", amount: 21000 },
  { month: "May", amount: 24000 },
  { month: "Jun", amount: 28000 },
];

export default function DashboardPage() {
  return (<>
    <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>Dashboard</Typography>
    <Grid container spacing={3}>
      {summaryCards.map((card) => (
        <Grid key={card.title} size={{
          xs: 12,
          sm: 6,
          md: 3,
        }}>
          <SummaryCard title={card.title} value={card.value} />
        </Grid>
      ))}
    </Grid>
    <Box sx={{ mt: 4 }} />
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 6, md: 8 }}>
        <MonthlyExpenseChart data={monthlyExpenses} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <RecentTransactions transactions={transactions} />
      </Grid>
    </Grid>
  </>)
}