import collectionImg1 from "../../assets/img/png-jpeg/collection-1.png";
import collectionImg2 from "../../assets/img/png-jpeg/collection-2.png";
import collectionImg3 from "../../assets/img/png-jpeg/collection-3.png";
import "./style.css";
import icon1 from "../../assets/img/png-jpeg/tshirt-collection.png";
import icon2 from "../../assets/img/png-jpeg/trousers-collection.png";
import icon3 from "../../assets/img/png-jpeg/cap-collection.png";
import icon4 from "../../assets/img/png-jpeg/headphones-collection.png";
import icon5 from "../../assets/img/png-jpeg/sneakers-collection.png";

function Collection() {
  return (
    <section className="container-collection">
      <h3> Coleções em Destaque </h3>
      <div className="collection-card">
        <div>
          <p>30% OFF</p>
          <img src={collectionImg1} />
          <button className="cardbutton">Comprar</button>
        </div>
        <div>
          <p>30% OFF</p>
          <img src={collectionImg2} />
          <button className="cardbutton">Comprar</button>
        </div>
        <div>
          <p>30% OFF</p>
          <img src={collectionImg3} />
          <button className="cardbutton">Comprar</button>
        </div>
      </div>

      <div className="icons">
        <h3 className="collection-h3-text">Coleções em Destaque</h3>
        <div className="icon-options">
          <div className="circle-icon">
            <img className="garments" src={icon1} />
          </div>
          <div className="circle-icon">
            <img className="garments" src={icon2} />
          </div>
          <div className="circle-icon">
            <img className="garments" src={icon3} />
          </div>
          <div className="circle-icon">
            <img className="garments" src={icon4} />
          </div>
          <div className="circle-icon">
            <img className="garments" src={icon5} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Collection;
