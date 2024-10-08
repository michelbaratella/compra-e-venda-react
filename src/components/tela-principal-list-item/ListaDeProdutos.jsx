import "./ListaDeProdutos.css";
import myImage from "../../assets/shoes.jpg";

const ListaDeProdutos = (props) => {
  const listItems = props.listOfProdutos;

  const formCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return listItems.map((item) => (
    <span key={item.id}>
      <div className="product__name--container">
        <label name="productName" id="productName">
          {item.name}
        </label>
      </div>

      <img src={myImage} alt="" className="product__image" />

      <div className="product__info">
        <label
          name="productPrice"
          id="productPrice"
          className="product__info--price"
        >
          {formCurrency.format(item.price)}
        </label>
        <button className="product__info--buy-btn">Comprar</button>
      </div>
    </span>
  ));
};

export default ListaDeProdutos;
