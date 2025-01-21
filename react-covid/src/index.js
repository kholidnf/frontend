import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
//Import Browser Router dari react router dom
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  /**
   * Bungkus aplikasi dengan BrowserRouter
   * Agar dapat dimanipulasi oleh ReactRouter
   */
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
