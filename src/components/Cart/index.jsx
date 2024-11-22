import { useContext, useEffect, useState } from "react";
import "./style.css";
import { ProductContext } from "../../contexts/ProductsContext";

function Cart() {
  const { cartArr, setCartArr } = useContext(ProductContext);
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (localStorage.getItem("cart") !== "[]") {
      setCartArr(JSON.parse(localStorage.getItem("cart") || "[]"));
    }
  }, []);

  const removeItemByIndex = (index) => {
    const updatedCart = cartArr.filter((_, i) => i !== index);
    setCartArr(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartArr.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="container-cart-resume">
        <div className="container-cart">
          <div className="box-resume">
            <div className="box-cart">
              <h3>MEU CARRINHO</h3>
              <h4>QUANTIDADE</h4>
              <h4>UNITÁRIO</h4>
              <h4>TOTAL</h4>
            </div>
            <hr />
            {cartArr.length == 0 ? (
              <h3>Nenhum item no carrinho</h3>
            ) : (
              cartArr.map((item, index) => (
                <>
                  <div className="description-orders">
                    <div className="background-img-cart">
                      <img src={item.images[0].path} alt="produto" />
                    </div>
                    <div className="info-cart-oders">
                      <h5>{item.name}</h5>
                      <h4>
                        Cor: <span></span>
                      </h4>
                      <h6>
                        Tamanho: <span></span>
                      </h6>
                    </div>
                    <div className="quantity-orders">
                      <div className="order-counter">
                        <button
                          onClick={() => setCount(count > 1 ? count - 1 : 1)}
                        >
                          -
                        </button>
                        <h6>{count}</h6>
                        <button onClick={() => setCount(count + 1)}>+</button>
                      </div>
                      <button
                        className="bnt-remove"
                        onClick={() => removeItemByIndex(index)}
                      >
                        Remover item
                      </button>
                    </div>
                    <div className="unit-orders">
                      <h3>
                        {item.price_with_discount.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h3>
                      <h2>
                        {item.price.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h2>
                    </div>
                    <div className="total-orders">
                      <h3>
                        {(item.price * count).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h3>
                      <h2>
                        {(item.price * count).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h2>
                    </div>
                  </div>
                  <hr />
                </>
              ))
            )}
            <div className="shipping-orders">
              <div className="discount-voucher">
                <h2>Cupom de desconto</h2>
                <div className="search-cart">
                  <input placeholder="Insira seu código" />
                  <button>OK</button>
                </div>
              </div>
              <div className="discount-voucher">
                <h2>Calcular Frete</h2>
                <div className="search-cart">
                  <input placeholder="Insira seu CEP" />
                  <button>OK</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-cart">
          <h2>RESUMO</h2>
          <div className="resume-price">
            <p>
              Subtotal:{" "}
              <span>
                {" "}
                {(total * count).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </p>
            <p>
              Frete: <span>R$0,00</span>
            </p>
            <p>
              Desconto: <span>R$0,00</span>
            </p>
            <h3>
              Total{" "}
              <span>
                {(total * count).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </h3>
            <p className="parcela">
              ou 10x de{" "}
              {((total / 10) * count).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}{" "}
              sem juros
            </p>
          </div>
          <button className="btn-resume-cart">Continuar</button>
        </div>
      </div>
    </>
  );
}
export default Cart;
