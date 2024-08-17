import { useState } from "react";

const formTemplate = { productName: "", productPrice: 0, productImage: "" };

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
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="productName"
        type="text"
        value={form.productName}
        onChange={handleInputChange}
      />
      <input
        id="productPrice"
        type="number"
        value={form.productPrice}
        onChange={handleInputChange}
      />
      <input
        id="productImage"
        type="text"
        value={form.productImage}
        onChange={handleInputChange}
      />
      <button type="submit">Criar anúncio</button>
    </form>
  );
};

export default NovoAnuncio;
