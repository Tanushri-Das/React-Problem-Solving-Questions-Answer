import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyProvider from "./context/MyProvider/MyProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </StrictMode>
);
