import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

import { Provider } from 'react-redux'
import store from './redux/store.js'

const theme = createTheme({
  palette: {
    primary: {
      main: "#14B8A6",
    },
    secondary:{
      main: "#000000"
    }
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  // </React.StrictMode>
);
