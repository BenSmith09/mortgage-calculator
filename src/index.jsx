import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";
import App from './App'; // Import your App component

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root') // Make sure 'root' matches the id of your HTML root element
);
