import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductsContext";
import "./style.css";
import { useNavigate } from "react-router-dom";

function FloatingCart() {
  const { cartArr, setCartArr } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("cart") !== "[]") {
      setCartArr(JSON.parse(localStorage.getItem("cart") || "[]"));
    }
  }, []);

  return (
    <div className="cart-container">
      <h4>Meu Carrinho</h4>
      <hr />
      {cartArr.map((item) => (
        <div className="cart-box" key={item.id}>
          <img src={item.images[0].path} alt="" />
          <div className="cart-content">
            <h3>{item.name}</h3>
            <div>
              <span>
                {item.price_with_discount.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <span>
                {item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>
        </div>
      ))}
      <hr />
      <div className="total-value">
        <h3>Valor total:</h3>
        <span>
          {cartArr
            .reduce((acc, item) => acc + item.price_with_discount, 0)
            .toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
        </span>
      </div>
      <div className="cart-buttons">
        <button onClick={() => {
            localStorage.removeItem("cart")
            setCartArr([])
        }}>Esvaziar</button>
        <button onClick={() => navigate("/products/cart")}>Ver Carrinho</button>
      </div>
    </div>
  );
}

export default FloatingCart;
