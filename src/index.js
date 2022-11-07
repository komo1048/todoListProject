import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TodoItemContextProvider from "./store/TodoItemContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoItemContextProvider>
    <App />
  </TodoItemContextProvider>
);
