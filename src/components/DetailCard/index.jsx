import "./style.css";
import star from "../../assets/img/png-jpeg/Stars.png";
import avaliation from "../../assets/img/png-jpeg/avaliation.png";
import { Carousel } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

function DetailCard({ product }) {
  const navigate = useNavigate();
  const { cartArr, setCartArr } = useContext(ProductContext);

  useEffect(() => {
    if (localStorage.getItem("cart") !== "[]") {
      setCartArr(JSON.parse(localStorage.getItem("cart") || "[]"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }, [cartArr]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <p className="nav-page">
        Home / Produtos / {product.mark} / {product.name}
      </p>
      <div className="detail-container">
        <div className="slides-container">
          <Carousel
            activeIndex={activeIndex}
            onSelect={handleSelect}
            nextLabel={false}
            prevLabel={false}
            indicators={false}
            className="carousel-div"
          >
            {product.images.map((item, i) => (
              <Carousel.Item key={i}>
                <div>
                  <div className="img-box">
                    <img src={item.path} alt="" />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="custom-indicators">
            {product.images.map((item, i) => (
              <div
                key={i}
                className={`indicator ${i === activeIndex ? "active" : ""}`}
                onClick={() => handleSelect(i)}
              >
                <div
                  className="preview"
                  style={{
                    border: i === activeIndex ? "2px solid #C92071" : "none",
                  }}
                >
                  <img className="indicators-img"
                    src={item.path}
                    alt={`Preview ${i}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="detail-box">
          <h3>{product.name}</h3>
          <div className="type-product">
            <p>
              {product.modelo} | {product.mark}
            </p>
          </div>
          <div className="avaliation-box">
            <img src={star} alt="" />
            <img src={avaliation} alt="" />
            <p>(90 avaliações)</p>
          </div>
          <div className="price-box">
            <p>
              R$ <span>{product.price}</span>, 00
            </p>
            {/* <span className="old-price">{product.preco_original}</span> */}
          </div>
          <div className="description-box">
            <h5>Descrição do produto</h5>
            <p>
              {product.description}
            </p>
          </div>
          <div className="size-shoes">
            <h5>Tamanho</h5>
            <div className="size-button">
              {product.options[0].values.map((item, i) => (
                <button key={i}>{item}</button>
              ))}
            </div>
          </div>
          <div className="color-shoes">
            <h5>Cor</h5>
            <div className="color-button">
              {/* {product.cores.map((item, i) => (
                <button key={i} style={{ backgroundColor: item }}></button>
              ))} */}
            </div>
          </div>
          <button
            onClick={() => {
              setCartArr([...cartArr, product]);
              navigate("/products/cart");
            }}
            className="buy-button"
          >
            COMPRAR
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailCard;
