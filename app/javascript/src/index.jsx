import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as bootstrap from "bootstrap";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root-app"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
