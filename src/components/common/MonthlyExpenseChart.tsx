import {
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";

interface MonthlyExpense {
    month: string;
    amount: number;
}

interface MonthlyExpenseChartProps {
    data: MonthlyExpense[];
}

export default function MonthlyExpenseChart({ data }: MonthlyExpenseChartProps) {
    return (
        <Card elevation={2}
            sx={{
                borderRadius: 3,
                height: "100%",
            }}>
            <CardContent sx={{
                p: 3,
            }}>
                <Typography variant="h6" gutterBottom>
                    Monthly Expenses
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="amount" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="amount" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}   