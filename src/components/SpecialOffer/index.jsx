import ShoeOffer from "../../assets/img/png-jpeg/shoeOffer.png";
import "./style.css";

function Offer() {
  return (
    <section className="offer-container">
      <div className="offer-box">
        <div className="offer-circle">
          <img src={ShoeOffer} alt="" />
        </div>
        <div className="offer-informations">
          <p className="special-offer">Oferta Especial</p>
          <h2 className="offer-title">Air Jordan edição de colecionador</h2>
          <p className="offer-text">
            Apresentamos a Edição Colecionador das icônicas Air Jordan! Com
            design exclusivo e detalhes que homenageiam a trajetória de Michael
            Jordan, essas sneakers são mais do que um calçado; são uma peça de
            história do esporte.
          </p>
          <button className="offer-button">Ver Oferta</button>
        </div>
      </div>
    </section>
  );
}

export default Offer;
