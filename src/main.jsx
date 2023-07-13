// libraries
import React from "react";
import ReactDOM from "react-dom/client";
// redux
import { Provider } from "react-redux";
import { createStore } from "./store/create.store.js";
// components
import App from "./App.jsx";
// styles
import "./main.css";

const store = createStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
