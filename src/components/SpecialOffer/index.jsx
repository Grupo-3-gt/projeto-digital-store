import ShoeOffer from '../../assets/img/png-jpeg/shoeOffer.png'
import "./style.css";

function Offer() {
  return (
    <div className="offer-container">
        <div className="offer-tennis">
            <div className="offer-circle"><img src={ShoeOffer} alt="" /></div>
        </div>
        <div className="offer-informations">
            <p className='special-offer'>Oferta Especial</p>
            <h1 className='offer-title'>Air Jordan edição de colecionador</h1>
            <p className='offer-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus voluptate sed, quis, totam dolorem corporis mollitia accusantium nesciunt consectetur quaerat obcaecati fuga.</p>
            <button className='offer-button'>Ver Oferta</button>
        </div>
      </div>
  );
}

export default Offer;
