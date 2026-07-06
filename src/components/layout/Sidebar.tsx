import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import "./sidebar.scss";

const menuItems = [
  {
    label: "Dashboard",
    icon: <DashboardRoundedIcon />,
    path: "/",
  },
  {
    label: "Expenses",
    icon: <ReceiptRoundedIcon />,
    path: "/expenses",
  },
  {
    label: "Income",
    icon: <PaymentsRoundedIcon />,
    path: "/income",
  },
  {
    label: "Budgets",
    icon: <SavingsRoundedIcon />,
    path: "/budgets",
  },
  {
    label: "Analytics",
    icon: <BarChartRoundedIcon />,
    path: "/analytics",
  },
  {
    label: "Settings",
    icon: <SettingsRoundedIcon />,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        borderRight: "1px solid",
        borderColor: "divider",
        backgroundColor: "white",
      }}
    >
      <List className="sidebar">
        {menuItems.map((item) => (
          <ListItemButton key={item.path} className="sidebar-item">
            <Box sx={{ mr: 2, display: "flex", alignItems: "center" }}>
              {item.icon}
            </Box>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}