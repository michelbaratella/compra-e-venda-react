import "./MenuLateral.css";
import { Link } from "react-router-dom";

const MenuLateral = (props) => {
  return (
    <span className="side-menu">
      <button className="side-menu__side-buttons" onClick={props.handleClose}>
        <span className="side-menu__side-buttons__text">Voltar</span>
        <i className="fa-solid fa-arrow-left side-menu__side-buttons__icons"></i>
      </button>
      <Link to="novo-anuncio" className="side-menu__new-product-btn">
        Novo Anúncio
      </Link>
      <button className="side-menu__side-buttons">
        <span className="side-menu__side-buttons__text">Ajuda</span>
        <i className="fa-regular fa-circle-question side-menu__side-buttons__icons"></i>
      </button>
    </span>
  );
};

export default MenuLateral;
