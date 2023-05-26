import { createTheme } from "@mui/material";

export default createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          "background-color": "#F8F9FB",
        },
      }),
    },
  },
});
