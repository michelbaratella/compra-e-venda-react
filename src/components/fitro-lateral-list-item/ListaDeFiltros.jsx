import "./ListaDeFiltros.css";

const ListaDeFiltros = (props) => {
  const listOfItems = props.listOfItems;
  return (
    <>
      {listOfItems.map((item) => (
        <li className="filter-container__list__item" key={item.id}>
          <input
            className="filter-container__list__item__checkbox"
            type="checkbox"
            name="filter-item"
            id={item.id}
          />
          {item.Title}
        </li>
      ))}
    </>
  );
};

export default ListaDeFiltros;
