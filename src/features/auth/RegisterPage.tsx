import { SignUp } from "@clerk/clerk-react";
import { Box } from "@mui/material";

export default function RegisterPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f7fb",
      }}
    >
      <SignUp />
    </Box>
  );
}