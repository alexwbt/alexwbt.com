import { createTheme } from "@mui/material";

export default createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          backgroundColor: "#F8F9FB",
          overflow: "hidden",
        },
      }),
    },
  },
});
