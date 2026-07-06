import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { AccountBalanceWallet } from "@mui/icons-material";
import { SignOutButton } from "@clerk/clerk-react";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import "./topbar.scss";

export default function Topbar() {
  return (
    <AppBar
      position="static"
      elevation={1}
      color="inherit"
      className="topbar"
    >
      <Toolbar sx={{ height: 72, display: "flex", gap: 2 }}>
        <AccountBalanceWallet
          color="primary"
          sx={{
            fontSize: 32,
          }}
        />
        <Typography variant="h6" className="logo">
          Expense Tracker
        </Typography>
         <SignOutButton>
          <Button
            startIcon={<LogoutRoundedIcon />}
            variant="outlined"
            sx={{ ml: "auto" }}
          >
            Logout
          </Button>
        </SignOutButton>
      </Toolbar>
    </AppBar>
  );
}