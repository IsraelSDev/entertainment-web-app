import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import App from "./controllers/App";
import { AuthContext } from "./context/authenticatorContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContext>
      <App />
    </AuthContext>
  </React.StrictMode>
);
