import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { HeaderMenuCtxProvider } from "./utils/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename={"/"} >
    <HeaderMenuCtxProvider init={false}>
      <App />
    </HeaderMenuCtxProvider>
    </Router>
  </React.StrictMode>
);
