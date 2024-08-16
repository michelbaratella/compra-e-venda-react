import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import TelaPrincipal from "./components/tela-principal/TelaPrincipal";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TelaPrincipal />
  </StrictMode>
);
