import "./style.css";
import star from "../../assets/img/png-jpeg/Stars.png";
import avaliation from "../../assets/img/png-jpeg/avaliation.png";

function DetailCard({ product }) {
  console.log(product);
  return (
    <>
      <p className="nav-page">Home  /  Produtos  /  Tenis  /  {product.marca} / {product.nome}</p>
      <div className="detail-container">
        <div className="img-box">
          <img src={product.imagem_url} alt="" />
        </div>
        <div className="detail-box">
          <h3>{product.nome}</h3>
          <div className="type-product">
            <p>
              {product.modelo} | {product.marca} | REF: {product.referencia}
            </p>
          </div>
          <div className="avaliation-box">
            <img src={star} alt="" />
            <img src={avaliation} alt="" />
            <p>(90 avaliações)</p>
          </div>
          <div className="price-box">
            <p>
              R$ <span>{product.preco_desconto}</span>, 00
            </p>
            <span className="old-price">{product.preco_original}</span>
          </div>
          <div className="description-box">
            <h5>Descrição do produto</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              amet cum minus corrupti, est, ab animi tempore rem atque, sint
              voluptas? Rerum officia sit facere! Non exercitationem obcaecati
              deserunt inventore.
            </p>
          </div>
          <div className="size-shoes">
            <h5>Tamanho</h5>
            <div className="size-button">
              {product.tamanhos.map((item, i) => (
                <button key={i}>{item}</button>
              ))}
            </div>
          </div>
          <div className="color-shoes">
            <h5>Cor</h5>
            <div className="color-button">
              {product.cores.map((item, i) => (
                <button key={i} style={{ backgroundColor: item }}></button>
              ))}
            </div>
          </div>
          <button className="buy-button">COMPRAR</button>
        </div>
      </div>
    </>
  );
}

export default DetailCard;
