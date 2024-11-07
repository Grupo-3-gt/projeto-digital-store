import "./style.css";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/img/svg/Line.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductsContext";
import listIcon from "../../assets/img/png-jpeg/listIcon.png";

function Card({ itemNum }) {
  const location = useLocation();

  const { listProducts, filterProductsObj } = useContext(ProductContext);
  const navigate = useNavigate();

  function clickCard(id) {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
    navigate(`/products/${id}`);
  }

  const productsByPage = listProducts.slice(0, itemNum) || listProducts;
  const filteredProduct = productsByPage.filter((product) => {
    return (
      (filterProductsObj.category.length === 0 ||
        filterProductsObj.category.includes(product.modelo.toLowerCase())) &&
      (filterProductsObj.mark.length === 0 ||
        filterProductsObj.mark.includes(product.marca.toLowerCase()))
    );
  });

  if (filteredProduct.length !== 0) {
    return (
      <section className="container-cards">
        {location.pathname !== "/products" &&
        location.pathname !== "/products/" ? (
          <div className="trending-products">
            <h3 className="text-trendin-gproducts">Produtos em alta</h3>
            <Link className="text-see-all" to="/products">
              Ver todos <img src={arrowRight} alt="" />
            </Link>
          </div>
        ) : (
          ""
        )}
        <ul className="card-list">
          {filteredProduct.map((product) => (
            <li
              onClick={() => clickCard(product.id)}
              key={product.id}
              className="card-box"
            >
              <div className="image-box">
                <span className="discount">30% OFF</span>
                <img
                  src={product.imagem_url}
                  alt="Tênis K-Swiss V8"
                  className="image"
                />
              </div>
              <div className="card-content">
                <p className="tenis-p">{product.marca}</p>
                <h2 className="tenis-name">{product.nome}</h2>
                <div className="price-section">
                  <span className="old-price">{product.preco_original}</span>
                  <span className="new-price">{product.preco_desconto}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  } else {
    return (
      <div className="not-found">
        <div>
          <img src={listIcon} alt="" />
          <h2>Nenhum produto encontrado</h2>
        </div>
      </div>
    );
  }
}

export default Card;
