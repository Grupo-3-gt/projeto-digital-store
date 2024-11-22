import "./style.css";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/img/svg/Line.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductsContext";
import listIcon from "../../assets/img/png-jpeg/listIcon.png";

function Card({ itemNum, text }) {
  const location = useLocation();

  const { listProducts, filterProductsObj, sortOrder } =
    useContext(ProductContext);

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
        product.category_ids.some((id) =>
          filterProductsObj.category.includes(id.toString())
        )) &&
      (filterProductsObj.mark.length === 0 ||
        filterProductsObj.mark.includes(product.mark.toLowerCase())) &&
      (filterProductsObj.gender.length === 0 ||
        filterProductsObj.gender.includes(product.gender.toLowerCase()))
        &&
      (filterProductsObj.state.length === 0 ||
        filterProductsObj.state.includes(product.state.toLowerCase()))
    );
  });

  if (sortOrder === "asc") {
    filteredProduct.sort((a, b) => a.price_with_discount - b.price_with_discount);
  } else if (sortOrder === "desc") {
    filteredProduct.sort((a, b) => b.price_with_discount - a.price_with_discount);
  }

  if (filteredProduct.length !== 0) {
    return (
      <section className="container-cards">
        {location.pathname !== "/products" &&
        location.pathname !== "/products/" ? (
          <div className="trending-products">
            <h3 className="text-trendin-gproducts">{text}</h3>
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
                  src={product.images[0].path}
                  alt="Tênis K-Swiss V8"
                  className="image"
                />
              </div>
              <div className="card-content">
                <p className="tenis-p">{product.mark}</p>
                <h2 className="tenis-name">{product.name}</h2>
                <div className="price-section">
                  <span className="old-price">${product.price}</span>
                  <span className="new-price">${product.price_with_discount}</span>
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
