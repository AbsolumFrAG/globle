import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import LocaleProvider from "./i18n";
import BodyStyle from "./components/BodyStyle";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <BrowserRouter>
          <App />
          <BodyStyle />
        </BrowserRouter>
      </LocaleProvider>
    </ThemeProvider>
  </React.StrictMode>
);