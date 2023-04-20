import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-jss";
import Theme from "../src/resources/theme";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
