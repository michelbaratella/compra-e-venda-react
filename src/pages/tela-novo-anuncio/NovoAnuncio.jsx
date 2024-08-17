import { useState } from "react";
import "./NovoAnuncio.css";

const formTemplate = {
  productName: "",
  productPrice: "R$ 0,00",
  productImage: "",
};

const NovoAnuncio = () => {
  const [form, setForm] = useState(formTemplate);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle the form data in state
    await console.log("Form submitted:", form);
    setInterval(
      () => window.location.replace("http://localhost:5173/"),
      [1000]
    );
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

  return (
    <form onSubmit={handleSubmit} className="form">
      <button
        type="button"
        className="backBtn form--buttons"
        onClick={() => window.location.replace("http://localhost:5173/")}
      >
        <i className="fa-solid fa-arrow-left side-menu__side-buttons__icons"></i>
        <span className="backBtn__text">Voltar</span>
      </button>
      <span className="form__inputs">
        <label htmlFor="productName">Título do anúncio</label>
        <textarea
          id="productName"
          type="text"
          value={form.productName}
          onChange={handleInputChange}
          className="form__input--title"
        />
      </span>
      <span className="form__inputs">
        <label htmlFor="productPrice">Preço do anúncio</label>
        <input
          id="productPrice"
          type="text"
          value={form.productPrice}
          onChange={handleInputChange}
        />
      </span>
      <span className="form__inputs">
        <label htmlFor="productImage">Imagens</label>
        <input
          id="productImage"
          type="text"
          value={form.productImage}
          onChange={handleInputChange}
        />
      </span>
      <button type="submit" className="form--buttons">
        Criar anúncio
      </button>
    </form>
  );
};

export default NovoAnuncio;
