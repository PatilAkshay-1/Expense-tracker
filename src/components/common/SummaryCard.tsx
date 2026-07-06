import { Card, CardContent, Typography } from "@mui/material";

interface SummaryCardProps {
  title: string;
  value: string;
}

export default function SummaryCard({
  title,
  value,
}: SummaryCardProps) {
  return (
    <Card elevation={2}
      sx={{
        borderRadius: 3,
        height: "100%",
        transition: "0.2s",

        "&:hover": {
          transform: "translateY(-2px)",
        },
      }}>
      <CardContent sx={{
        p: 3,
      }}>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h5" sx={{
          mt: 1,
          fontWeight: 700,
        }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}