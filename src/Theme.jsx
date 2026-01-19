import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#3B82F6",      // Accent Blue (main brand color)
      light: "#60A5FA",     // Soft glow / hover
      dark: "#2563EB",      // Pressed / active
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#22D3EE",      // Cyan highlight (sparingly)
    },

    background: {
      default: "#06080F",   // Main page background
      paper: "#0B1020",     // Cards / panels
    },

    text: {
      primary: "#E5E7EB",   // Headings
      secondary: "#9CA3AF", // Body text
      disabled: "#6B7280",
      nameColor:"#8AB4F8"
    },

    divider: "rgba(255,255,255,0.08)",
  },

  shape: {
    borderRadius: 16,
  },

  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "sans-serif",
    ].join(","),

    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    body1: {
      color: "#9CA3AF",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(11,16,32,0.8)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          paddingInline: "18px",
          boxShadow: "0 0 30px rgba(59,130,246,0.35)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          border: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },
  },
});
