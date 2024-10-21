import TenisOffer from "../../assets/img/png-jpeg/Laye.png";
import "./style.css";
function Offer() {
  return (
    <section className="container">
      <div className="imageOffer">
          <img className="shoe-image" src={TenisOffer} alt="" />
      </div>
      <div
        className="information">
          <p className="special-offer">Oferta especial</p>
          <h2>Air Jordan edição de colecionador</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            facilis voluptas eum quibusdam minima architecto tempore repellat,
            alias, reiciendis repudiandae temporibus quidem! Voluptatibus
            nostrum quos at, a enim amet distinctio!/</p>
           <button className="offer-button">Ver Oferta</button>
        </div>
    </section>
  );
}

export default Offer;
