import { createTheme } from "@mui/material/styles";
// this is where we define the custom MUI theme for the application
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3B82F6", // blue
    },
    secondary: {
      main: "#6366F1", // indigo
    },
    success: {
      main: "#22C55E",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

export default theme;
