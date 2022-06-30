import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SquaresContextProvider } from "./store/squaresContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SquaresContextProvider>
      <App />
    </SquaresContextProvider>
  </React.StrictMode>
);
