import { useState } from "react";
import "./NovoAnuncio.css";

const formTemplate = {
  productName: "",
  productPrice: "R$ 0,00",
  productImage: "",
  tags: [],
};

const NovoAnuncio = () => {
  const [form, setForm] = useState(formTemplate);
  const [currTag, setCurrTag] = useState("");

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

  const handleAddTag = () => {
    if (currTag.trim().length > 0) {
      const updatedTags = form.tags;
      const newTag = currTag.trim();

      updatedTags.push(newTag);

      updateTags(updatedTags);
      setCurrTag("");
    }
  };

  const handleRemoveTags = (list) => {
    if (list.length > 0) {
      const selectedTags = [];

      for (let i = 0; i < list.length; i++) {
        selectedTags.push(list[i].label);
      }

      updateTags(form.tags.filter((tag) => !selectedTags.includes(tag)));
    }
  };

  const updateTags = (updatedTags) => {
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
        />
      </span>

      <span className="form__inputs">
        <label htmlFor="currTag">Tags para filtrar anúncio</label>
        <span className="form-tag">
          <input
            id="currTag"
            type="text"
            value={currTag}
            className="form__input--title form-tag__input"
            onChange={() =>
              setCurrTag(document.querySelector("#currTag").value)
            }
          />
          <button
            type="button"
            className="form__buttons form-tag--btn"
            onClick={handleAddTag}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </span>

        <span className="form-tag">
          <select
            id="tagsList"
            multiple
            className="form-tag__input form-tag__input--select"
          >
            {form.tags.map((tag, i) => (
              <option id="tagItem" key={i}>
                {tag}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="form__buttons form-tag--btn"
            onClick={() =>
              handleRemoveTags(
                document.getElementById("tagsList").selectedOptions
              )
            }
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </span>
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

      <button type="submit" className="form__buttons">
        Criar anúncio
      </button>
    </form>
  );
};

export default NovoAnuncio;
