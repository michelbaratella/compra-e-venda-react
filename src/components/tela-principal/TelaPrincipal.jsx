import ListaDeProdutos from "../tela-principal-list-item/ListaDeProdutos";
import "./TelaPrincipal.css";
import { listOfProdutos } from "../../assets/testData";
import SearchBar from "../tela-principal-search-bar/SearchBar";
import { useState } from "react";
import MenuLateral from "../menu-lateral/MenuLateral";
import FiltroLateral from "../filtro-lateral/FiltroLateral";

const TelaPrincipal = () => {
  const [sideScreen, setSideScreen] = useState({
    hideMenu: true,
    hideFilter: true,
  });

  /* if there's a side menu opened and the user just clicked out of it, it should close */
  const handleOpenedSideMenus = () => {
    console.log("click!");
    if (!sideScreen.hideMenu) {
      hideSideMenu(true);
    } else if (!sideScreen.hideFilter) {
      hideSideFilter(true);
    }
  };

  const handleClick = (e) => {
    if (e.target.id === "menuBtn") {
      hideSideMenu(!sideScreen.hideMenu);
    } else if (e.target.id === "filterBtn") {
      hideSideFilter(!sideScreen.hideFilter);
    }
  };

  const hideSideMenu = (toggle) => {
    /* Always destructure first otherwise your update will get overwritten by the previous state version */
    setSideScreen((prev) => {
      return {
        ...prev,
        hideMenu: toggle,
      };
    });
    document.querySelector("#sidemenu").classList.toggle("hide");
    /* This is to close one if the other is going to be opened */
    if (toggle && !sideScreen.hideFilter) hideSideFilter(true);
    /* When showing side-menu, blur and disable main screen */
    document.querySelector(".tela-principal").classList.toggle("disable");
  };

  const hideSideFilter = (toggle) => {
    setSideScreen((prev) => {
      return {
        ...prev,
        hideFilter: toggle,
      };
    });
    document.querySelector("#sidefilter").classList.toggle("hide");
    if (toggle && !sideScreen.hideMenu) hideSideMenu(true);
    document.querySelector(".tela-principal").classList.toggle("disable");
  };

  return (
    <span className="master">
      <span className="tela-principal" onClick={handleOpenedSideMenus}>
        <div className="header">
          <div className="header__actions">
            <button className="header__action--btns" onClick={handleClick}>
              <i
                className="fa-solid fa-bars header__action--icon"
                id="menuBtn"
              ></i>
              <span className="header__action--lbl" id="menuBtn">
                Menu
              </span>
            </button>
            <button className="header__action--btns" onClick={handleClick}>
              <span className="header__action--lbl" id="filterBtn">
                Filtro
              </span>
              <i
                className="fa-solid fa-filter header__action--icon"
                id="filterBtn"
              ></i>
            </button>
          </div>
          <SearchBar />
        </div>

        <div className="product">
          <ListaDeProdutos listOfProdutos={listOfProdutos} />
        </div>
      </span>

      <span id="sidemenu" className={`side menu hide`}>
        <MenuLateral handleClose={() => hideSideMenu(!sideScreen.hideMenu)} />
      </span>

      <span id="sidefilter" className={`side filter hide`}>
        <FiltroLateral
          handleClose={() => hideSideFilter(!sideScreen.hideFilter)}
        />
      </span>
    </span>
  );
};

export default TelaPrincipal;
