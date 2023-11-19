import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#14B8A6",
      light: "#97E6DD"
    },
    secondary: {
      main: "#000000"
    },
    background: {
      default: "#EFF3F8",
      paper: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#47494F',
      textAlign: 'center',
      fontFamily: ['Roboto Condensed', 'sans-serif'].join(','),
    },
    h5: {
      fontSize: '0.8rem',
      fontFamily: ['Quicksand', 'sans-serif'].join(','),
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: '10px',
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
          width: "300px",
          height: "40px",

        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
          width: "300px",
          height: "40px",
          fontSize: '20px',
          color: "#FFFFFF",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: '-5px',
          fontSize: '15px',
          fontFamily: 'Quicksand',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
