import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
interface TransactionItem {
  id: number;
  title: string;
  date: string;
  amount: string;
}

interface RecentTransactionsProps {
  transactions: TransactionItem[];
}

export default function RecentTransactions({
  transactions,
}: RecentTransactionsProps) {
  return (
    <Card elevation={2}
      sx={{
        borderRadius: 3,
        height: "100%",
      }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{
          fontWeight: 600,
          mb: 2,
        }}>
          Recent Transactions
        </Typography>

        <List disablePadding>
          {transactions.map((tx, index) => (
            <div key={tx.id}>
              <ListItem disableGutters>
                <ListItemText
                  primary={tx.title}
                  secondary={tx.date}
                />

                <Typography component="span" variant="body1" sx={{ fontWeight: 600 }}>
                  {tx.amount}
                </Typography>
              </ListItem>

              {index < transactions.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}