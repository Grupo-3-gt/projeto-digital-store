import collectionImg1 from "../../assets/img/png-jpeg/collection-1.png";
import collectionImg2 from "../../assets/img/png-jpeg/collection-2.png";
import collectionImg3 from "../../assets/img/png-jpeg/collection-3.png";
import "./style.css";
import ShirtIcon from "../SvgIcons/shirtIcon";
import PantsIcon from "../SvgIcons/pantsIcon";
import HeadphonesIcon from "../SvgIcons/headphonesIcon";
import TennisIcon from "../SvgIcons/tennisIcon";

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
          <div>
            <div className="circle-icon">
              <ShirtIcon />
            </div>
            <h4>Camisetas</h4>
          </div>
          <div>
            <div className="circle-icon">
              <PantsIcon />
            </div>
            <h4>Calças</h4>
          </div>
          <div>
            <div className="circle-icon">
              <PantsIcon />
            </div>
            <h4>Bonés</h4>
          </div>
          <div>
            <div className="circle-icon">
              <HeadphonesIcon />
            </div>
            <h4>Headphones</h4>
          </div>
          <div>
            <div className="circle-icon">
              <TennisIcon />
            </div>
            <h4>Tênis</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Collection;
