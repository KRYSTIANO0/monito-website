import React from "react";
import ReactDOM from "react-dom/client";
//components
import App from "./App";
//styles
import "./styles/global.css";
//redux
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
