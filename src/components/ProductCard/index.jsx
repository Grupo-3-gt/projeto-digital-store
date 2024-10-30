import "./style.css";
import tenisImage from "../../assets/img/png-jpeg/tenis.png";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/img/svg/Line.svg"
import { productData } from "./data";

function Card() {
  console.log(productData)
  return (
    <section className="container-cards">
      <div className="trending-products">
        <h3 className="text-trendin-gproducts">Produtos em alta</h3>
        <Link className="text-see-all" to="/products">
          Ver todos <img src={arrowRight} alt="" />
        </Link>
      </div>
      <ul className="card-list">
     {productData.slice(0,8).map(product =>
        <li key={product.id} className="card-box">
        <div className="image-box"> 
        {product.descount &&   <span className="discount">30% OFF</span>}
          <img src={tenisImage} alt="Tênis K-Swiss V8" className="image" />
        </div>
        <div className="card-content">
          <p className="tenis-p">{product.category}</p>
          <h2 className="tenis-name">{product.name}</h2>
          <div className="price-section">
            <span className="old-price">{product.old_price}</span>
            <span className="new-price">{product.price}</span>
          </div>
        </div>
      </li>
     )}
      </ul>
    </section>
  );
}

export default Card;
