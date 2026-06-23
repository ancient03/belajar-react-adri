import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Parent from "./latihan/Parent.jsx";
import { ThemeContextProvider } from "./context/themeContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import Form from "./latihan/Form.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
    <ThemeContextProvider >
      <App />
    </ThemeContextProvider >
    </AuthContextProvider> 

  </React.StrictMode>, 
);