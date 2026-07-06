import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

export default function AppLayout() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <Box sx={{ flex: 1 }}>
        <Topbar />

        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}