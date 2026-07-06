import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

export default function AppLayout() {
  return (
    <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Topbar />


      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar />

        <Box
          component="main"
          sx={{
            flex: 1,
            p: 4,
            overflow: "auto",
            backgroundColor: "#f5f7fb",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}