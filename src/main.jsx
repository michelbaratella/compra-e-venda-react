import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TelaPrincipal from "./pages/tela-principal/TelaPrincipal";
import NovoAnuncio from "./pages/tela-novo-anuncio/NovoAnuncio";
import ErrorPage from "./pages/error-page/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TelaPrincipal />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/novo-anuncio",
    element: <NovoAnuncio />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
