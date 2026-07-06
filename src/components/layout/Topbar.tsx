import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Topbar() {
  return (
    <AppBar
      position="static"
      elevation={1}
      color="inherit"
    >
      <Toolbar>
        <Typography variant="h6">
          Expense Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
}