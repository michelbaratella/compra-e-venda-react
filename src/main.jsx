import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TelaPrincipal from "./components/tela-principal/TelaPrincipal";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TelaPrincipal />
  </StrictMode>
);
