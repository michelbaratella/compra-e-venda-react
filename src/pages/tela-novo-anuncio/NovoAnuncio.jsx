import { useState } from "react";
import "./NovoAnuncio.css";
import CampoDeFiltrosDeAnuncio from "../../components/tela-novo-anuncio-filtro-de-anuncio/CampoDeFiltroDeAnuncio";
import CampoDeImagem from "../../components/tela-novo-anuncio-imagem/CampoDeImagem";

const formTemplate = {
  productName: "",
  productPrice: "R$ 0,00",
  productImage: "",
  tags: [],
};

const NovoAnuncio = () => {
  const [form, setForm] = useState(formTemplate);
  const [currTag, setCurrTag] = useState({ id: 0, name: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle the form data in state
    await console.log(form);
    /* setInterval(
      () => window.location.replace("http://localhost:5173/"),
      [1000]
    ); */
  };

  const handleInputChange = (event) => {
    setForm((prev) => ({
      ...prev,
      [event.target.id]:
        event.target.id === "productPrice"
          ? moneyMask(event.target.value)
          : event.target.value,
    }));
  };

  const moneyMask = (value) => {
    if (value === "") value = "0";
    value = value.replace(".", "").replace(",", "").replace(/\D/g, "");

    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat("pt-BR", options).format(
      parseFloat(value) / 100
    );

    return "R$ " + result;
  };

  const setUpdatedForm = (updatedTags) => {
    setForm((prev) => ({
      ...prev,
      tags: updatedTags,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <button
        type="button"
        className="form__back-btn form__buttons"
        onClick={() => window.location.replace("http://localhost:5173/")}
      >
        <i className="fa-solid fa-arrow-left side-menu__side-buttons__icons"></i>
        <span className="form__back-btn__text">Voltar</span>
      </button>

      <span className="form__inputs">
        <label htmlFor="productName">Título do anúncio</label>
        <textarea
          id="productName"
          type="text"
          value={form.productName}
          onChange={handleInputChange}
          className="form__input--title"
          required
        />
      </span>

      <CampoDeFiltrosDeAnuncio
        form={form}
        setForm={setForm}
        currTag={currTag}
        setCurrTag={setCurrTag}
        setUpdatedForm={setUpdatedForm}
      />

      <span className="form__inputs">
        <label htmlFor="productPrice">Preço do anúncio</label>
        <input
          id="productPrice"
          type="text"
          value={form.productPrice}
          onChange={handleInputChange}
        />
      </span>

      <CampoDeImagem
        form={form}
        setForm={setForm}
        handleInputChange={handleInputChange}
      />

      <button type="submit" className="form__buttons form__buttons--bottom">
        Criar anúncio
      </button>
    </form>
  );
};

export default NovoAnuncio;
