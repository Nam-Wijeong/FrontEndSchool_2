import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import app from "./fBase.js";
console.log(app);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
