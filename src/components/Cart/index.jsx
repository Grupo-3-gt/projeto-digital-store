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
    const updatedCart = cartArr.filter((_, i) => i !== index); // Exclui o item pelo índice
    setCartArr(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Atualiza o localStorage
  };

  const total = cartArr.reduce((acc, item) => acc + item.preco_desconto, 0);

  console.log(total);

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
                      <img src={item.imagem_url} alt="produto" />
                    </div>
                    <div className="info-cart-oders">
                      <h5>{item.nome}</h5>
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
                      <button className="bnt-remove" onClick={() => removeItemByIndex(index)}>Remover item</button>
                    </div>
                    <div className="unit-orders">
                      <h3>
                        {item.preco_original.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h3>
                      <h2>
                        {item.preco_desconto.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h2>
                    </div>
                    <div className="total-orders">
                      <h3>
                        {(item.preco_original * count).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h3>
                      <h2>
                        {(item.preco_desconto * count).toLocaleString("pt-br", {
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
              Subtotal: <span> {(total * count).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}</span>
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
