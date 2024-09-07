import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page" className="error-page">
      <div className="container">
        <h1 className="heading">Oops!</h1>
        <p className="description">Desculpe, ocorreu um erro inesperado.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
