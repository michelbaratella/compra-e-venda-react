import ListaDeFiltros from "../fitro-lateral-list-item/ListaDeFiltros";
import "./FiltroLateral.css";
import { listOfItems } from "../../assets/testData";

const FiltroLateral = (props) => {
  return (
    <>
      <button className="side-filter__side-buttons" onClick={props.handleClose}>
        Voltar
        <i className="fa-solid fa-arrow-right side-filter__side-buttons__icons"></i>
      </button>
      <div className="side-filter__filter-container">
        <ul className="side-filter__filter-container__list">
          <ListaDeFiltros listOfItems={listOfItems} />
        </ul>
      </div>
    </>
  );
};

export default FiltroLateral;
