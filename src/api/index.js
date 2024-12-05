import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RBACProvider from "./context/RBACContext";

ReactDOM.render(
  <React.StrictMode>
    <RBACProvider>
      <App />
    </RBACProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
