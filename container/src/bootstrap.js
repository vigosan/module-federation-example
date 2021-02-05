import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./contexts";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector("#root")
);
