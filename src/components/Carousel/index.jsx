import "../Carousel/style.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/img/png-jpeg/White-Sneakers-PNG-1.png";
import "../../styles/custom-bootstrap.scss";
import ornament from "../../assets/img/png-jpeg/Ornament 11.png";

function CarouselComponent() {
  return (
    <Carousel className="carousel-container" controls={false}>
      <Carousel.Item>
        <div className="carousel-box">
          <div className="carousel-content">
            <div>
              <p className="text-primary">Melhores ofertas personalizadas</p>
              <h2 className="title">Queima de estoque Nike🔥</h2>
              <p className="text-second">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, aliquam?
              </p>
              <button className="button-title-carousel">Ver Ofertas</button>
            </div>
            <img src={img1} alt="First Slide" />
          </div>
        </div>
        <img className="ornament-img" src={ornament} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-box">
          <div className="carousel-content">
            <div>
              <p className="text-primary">Melhores ofertas personalizadas</p>
              <h2 className="title">Queima de estoque Nike</h2>
              <p className="text-second">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, aliquam?
              </p>
              <button className="button-title-carousel">Ver Ofertas</button>
            </div>
            <img src={img1} alt="First Slide" />
          </div>
        </div>
        <img  className="ornament-img" src={ornament} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-box">
          <div className="carousel-content">
            <div>
              <p className="text-primary">Melhores ofertas personalizadas</p>
              <h2 className="title">Queima de estoque Nike</h2>
              <p className="text-second">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, aliquam?
              </p>
              <button className="button-title-carousel">Ver Ofertas</button>
            </div>
            <img src={img1} alt="First Slide" />
          </div>
        </div>
        <img  className="ornament-img" src={ornament} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-box">
          <div className="carousel-content">
            <div>
              <p className="text-primary">Melhores ofertas personalizadas</p>
              <h2 className="title">Queima de estoque Nike</h2>
              <p className="text-second">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, aliquam?
              </p>
              <button className="button-title-carousel">Ver Ofertas</button>
            </div>
            <img src={img1} alt="First Slide" />
          </div>
        </div>
        <img  className="ornament-img" src={ornament} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponent;