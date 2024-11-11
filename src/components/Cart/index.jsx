import { useContext, useEffect } from "react";
import "./style.css";
import { ProductContext } from "../../contexts/ProductsContext";

function Cart() {
  const { cartArr, setCartArr } = useContext(ProductContext);

  useEffect(() => {
    if (localStorage.getItem("cart") !== "[]") {
      setCartArr(JSON.parse(localStorage.getItem("cart") || "[]"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }, [cartArr]);

  console.log(cartArr);
  return (
    <div className="cart-container">
      <div className="box-cart">
        <h2>MEU CARRINHO</h2>
        <hr/>
        <hr/>
        <div className="form-cart">
        <label htmlFor="voucher">Cupom de desconto *</label>
        <input type="text" id="voucher" placeholder="Insira seu código" required/>
        <label htmlFor="freight">Calcular frete *</label>
        <input type="text" id="freight" placeholder="Insira seu CEP" required />
        </div>
      </div>

      <div className="resume-cart">
        <h2>RESUMO</h2>
        <hr/>
        <div className="resume-price">
        <p>Subtotal: <span>R$219,00</span></p>
        <p>Frete: <span>R$0,00</span></p>
        <p>Desconto: <span>R$30,00</span></p>
        <h3>Total <span>R$ 219,00</span></h3> 
        </div>
        <button className="btn-resume-cart">Continuar</button>
      </div>
    </div>
  );
}
export default Cart;
