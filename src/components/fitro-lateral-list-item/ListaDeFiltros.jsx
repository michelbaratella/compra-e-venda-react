import { useState } from "react";
import "./ListaDeFiltros.css";

const ListaDeFiltros = (props) => {
  const [listOfItems, setListOfItems] = useState(props.listOfItems);

  /* goes through each item, if id matches, change checked value then returns new array */
  const handleCheck = (id) => {
    const updatedList = listOfItems.map((item) => {
      if (item.id === id) item.checked = !item.checked;
      return item;
    });
    setListOfItems(updatedList);
  };

  return (
    <>
      {listOfItems.map((item) => (
        <li className="filter-container__list__item" key={item.id}>
          <input
            className="filter-container__list__item__checkbox"
            type="checkbox"
            name="filter-item"
            id={item.id}
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
          />
          <span
            className="filter-container__list__item__text"
            onClick={() => handleCheck(item.id)}
          >
            {item.Title}
          </span>
        </li>
      ))}
    </>
  );
};

export default ListaDeFiltros;
