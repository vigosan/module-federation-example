import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App history={history} />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dev-dashboard-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
