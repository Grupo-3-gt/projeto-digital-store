import "./style.css";
import tenisImage from "./img/TênisK-SwissV8.png";

function Card() {
  return (
    <section className="container-cards">
      <div>
        <h3>Produtos em alta</h3>
        <a href="">Ver Todos</a>
      </div>
      <ul className="card-list">
        <li className="card-box">
          <div className="image-box">
            <img src={tenisImage} alt="Tênis K-Swiss V8" className="image" />
          </div>
          <div className="card-content">
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
