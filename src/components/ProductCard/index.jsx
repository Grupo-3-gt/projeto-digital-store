import "./style.css";
import tenisImage from "../../assets/img/png-jpeg/tenis.png"
import { Link } from "react-router-dom";
import arrowRight from "../../assets/img/svg/Line.svg"

function Card() {
  // 1
  return (
    <section className="container-cards">
      <div className="trending-products">
        <h3 className="text-trendin-gproducts">Produtos em alta</h3>

        <Link className="text-see-all" to="/products">
          Ver todos <img src={arrowRight} alt="" />
        </Link>
      </div>
      <ul className="card-list">
        <li className="card-box">
          <div className="image-box"> 
            <span className="discount">30% OFF</span>
            <img src={tenisImage} alt="Tênis K-Swiss V8" className="image" />
          </div>
          <div className="card-content">
            <p>Tênis</p>
            <h2>K-Swiss V8 - Masculino</h2>
            <div className="price-section">
              <span className="old-price">$200</span>
              <span className="new-price">$100</span>
            </div>
          </div>
        </li>
        <li className="card-box">
          <div className="image-box">
          <span className="discount">30% OFF</span>
            <img src={tenisImage} alt="Tênis K-Swiss V8" className="image" />
          </div>
          <div className="card-content">
            <p>Tênis</p>
            <h2>K-Swiss V8 - Masculino</h2>
            <div className="price-section">
              <span className="old-price">$200</span>
              <span className="new-price">$100</span>
            </div>
          </div>
        </li>
        <li className="card-box">
          <div className="image-box">
            <img src={tenisImage} alt="Tênis K-Swiss V8" className="image" />
          </div>
          <div className="card-content">
            <p>Tênis</p>
            <h2>K-Swiss V8 - Masculino</h2>
            <div className="price-section">
              <span className="old-price">$200</span>
              <span className="new-price">$100</span>
            </div>
          </div>
        </li>
        <li className="card-box">
          <div className="image-box">
            <img src={tenisImage} alt="Tênis K-Swiss V8" className="image" />
          </div>
          <div className="card-content">
            <p>Tênis</p>
            <h2>K-Swiss V8 - Masculino</h2>
            <div className="price-section">
              <span className="old-price">$200</span>
              <span className="new-price">$100</span>
            </div>
          </div>
        </li>
        <li className="card-box">
          <div className="image-box">
            <img src={tenisImage} alt="Tênis K-Swiss V8" className="image" />
          </div>
          <div className="card-content">
            <p>Tênis</p>
            <h2>K-Swiss V8 - Masculino</h2>
            <div className="price-section">
              <span className="old-price">$200</span>
              <span className="new-price">$100</span>
            </div>
          </div>
        </li>
        <li className="card-box">
          <div className="image-box">
            <img src={tenisImage} alt="Tênis K-Swiss V8" className="image" />
          </div>
          <div className="card-content">
            <p>Tênis</p>
            <h2>K-Swiss V8 - Masculino</h2>
            <div className="price-section">
              <span className="old-price">$200</span>
              <span className="new-price">$100</span>
            </div>
          </div>
        </li>
        <li className="card-box">
          <div className="image-box">
            <img src={tenisImage} alt="Tênis K-Swiss V8" className="image" />
          </div>
          <div className="card-content">
            <p>Tênis</p>
            <h2>K-Swiss V8 - Masculino</h2>
            <div className="price-section">
              <span className="old-price">$200</span>
              <span className="new-price">$100</span>
            </div>
          </div>
        </li>
        <li className="card-box">
          <div className="image-box">
            <img src={tenisImage} alt="Tênis K-Swiss V8" className="image" />
          </div>
          <div className="card-content">
            <p>Tênis</p>
            <h2>K-Swiss V8 - Masculino</h2>
            <div className="price-section">
              <span className="old-price">$200</span>
              <span className="new-price">$100</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Card;
