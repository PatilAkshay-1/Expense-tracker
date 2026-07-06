import { Box, Card, CardContent, Typography } from "@mui/material";
import './summaryCard.scss';

const cardColors: Record<string, string> = {
  Balance: "#22C55E",
  Income: "#3B82F6",
  Expenses: "#EF4444",
  Savings: "#8B5CF6",
};

interface SummaryCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export default function SummaryCard({
  title,
  value,
  icon,
}: SummaryCardProps) {
  
  const color = cardColors[title];

  return (
    <Card elevation={2}
      className="summaryCard">
      <CardContent className="summaryCardContent">
        <Box className="cardContent">
          <Box className="icon" sx={{ color, backgroundColor: `${color}33` }}>
            {icon}
          </Box>
          <Typography  className="cardTitle">
            {title}
          </Typography>
        </Box>

        <Typography variant="h5" className="cardValue" sx={{ color }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}