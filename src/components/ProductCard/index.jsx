import "./style.css";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/img/svg/Line.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductsContext";

function Card() {
  const location = useLocation();
  const { listProducts, filterProductsArr } = useContext(ProductContext);
   const navigate = useNavigate()

  const filteredProduct =
    filterProductsArr.length !== 0
      ? listProducts.filter((product) =>
          filterProductsArr.includes(product.marca.toLowerCase())
        )
      : listProducts;
      function clickCard(id){
        navigate(`/products/${id}`)
      }

  // const filteredProductData =
  //   location.pathname === "/" ? listProducts.slice(0, 8) : listProducts;

  return (
    <section className="container-cards">
      {location.pathname == "/" ? (
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
          <li onClick={()=> clickCard(product.id)} key={product.id} className="card-box">
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
}

export default Card;
