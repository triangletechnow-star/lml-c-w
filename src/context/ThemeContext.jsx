import { createContext, useState, useMemo, useEffect } from "react";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode || "light";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#0B9BD7" : "#0EA5E9",
            light: "#38BDF8",
            dark: "#0284C7",
            contrastText: "#FFFFFF",
          },
          secondary: {
            main: mode === "light" ? "#6366F1" : "#818CF8",
            light: "#A5B4FC",
            dark: "#4F46E5",
          },
          success: {
            main: "#10B981",
            light: "#34D399",
            dark: "#059669",
          },
          error: {
            main: "#EF4444",
            light: "#F87171",
            dark: "#DC2626",
          },
          warning: {
            main: "#F59E0B",
            light: "#FCD34D",
            dark: "#D97706",
          },
          background: {
            default: mode === "light" ? "#F8FAFC" : "#0F172A",
            paper: mode === "light" ? "#FFFFFF" : "#1E293B",
          },
          text: {
            primary: mode === "light" ? "#1E293B" : "#F1F5F9",
            secondary: mode === "light" ? "#64748B" : "#94A3B8",
          },
          divider: mode === "light" ? "#E2E8F0" : "#334155",
        },
        shape: {
          borderRadius: 12,
        },
        typography: {
          fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
          h4: {
            fontWeight: 700,
          },
          h5: {
            fontWeight: 600,
          },
          h6: {
            fontWeight: 600,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 8,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                boxShadow:
                  mode === "light"
                    ? "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
                    : "0 1px 3px rgba(0,0,0,0.5)",
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow:
                  mode === "light"
                    ? "0 1px 3px rgba(0,0,0,0.1)"
                    : "0 1px 3px rgba(0,0,0,0.4)",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
