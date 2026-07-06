import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
     h1: {
      fontSize: "3rem",      // 48px
      fontWeight: 700,
    },

    h2: {
      fontSize: "2.5rem",    // 40px
      fontWeight: 600,
    },

    h3: {
      fontSize: "2rem",      // 32px
      fontWeight: 500,
    },

    h4: {
      fontSize: "1.75rem",   // 28px
      fontWeight: 400,
    },

    h5: {
      fontSize: "1.5rem",    // 24px
      fontWeight: 300,
    },

    h6: {
      fontSize: "1.25rem",   // 20px
      fontWeight: 200,
    },

    subtitle1: {
      fontSize: "1rem",      // 16px
      fontWeight: 600,
    },

    subtitle2: {
      fontSize: "0.875rem",  // 14px
      fontWeight: 500,
    },

    body1: {
      fontSize: "1rem",      // 16px
      fontWeight: 400,
    },

    body2: {
      fontSize: "0.875rem",  // 14px
      fontWeight: 400,
    },

    caption: {
      fontSize: "0.75rem",   // 12px
      fontWeight: 400,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.875rem",
    },
  },
  palette: {
    primary: {
      main: "#16a34a",
    },
    background: {
      default: "#f5f7fb",
      paper: "#ffffff",
    },
  },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       body: {
  //         fontFamily: 'Plus Jakarta Sans',
  //         fontSize: "14px",
  //         lineHeight: 1.5,
  //         letterSpacing: "0",
  //         backgroundColor: "#f5f5f5",
  //       },
  //     },
  //   },
  //   MuiTypography: {
  //     styleOverrides: {
  //       root: {
  //         letterSpacing: "0",
  //       },
  //     },
  //   },
  // },
});

export default theme;