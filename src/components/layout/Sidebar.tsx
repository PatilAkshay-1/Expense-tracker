import { Box, List, ListItemButton, ListItemText } from "@mui/material";

const menuItems = [
  "Dashboard",
  "Expenses",
  "Income",
  "Budgets",
  "Analytics",
  "Settings",
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        borderRight: "1px solid #E5E7EB",
        height: "100vh",
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItemButton key={item}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}