import "../Carousel/style.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/img/png-jpeg/White-Sneakers-PNG-1.png";
import "../../styles/custom-bootstrap.scss"

function CarouselComponent() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <div className="container-title-carousel">
          <div className="title-carousel">
            <p className="text-primary">Melhores ofertas personalizadas</p>
            <h2 className="title">Queima de estoque Nike</h2>
            <p className="text-second">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              aliquam?
            </p>
            <button className="button-title-carousel">Ver Ofertas</button>
          </div>
          <img src={img1} alt="First Slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container-title-carousel">
          <div className="title-carousel">
            <p className="text-primary">Melhores ofertas personalizadas</p>
            <h2 className="title">Queima de estoque Nike</h2>
            <p className="text-second">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              aliquam?
            </p>
            <button className="button-title-carousel">Ver Ofertas</button>
          </div>
          <img src={img1} alt="Second Slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container-title-carousel">
          <div className="title-carousel">
            <p className="text-primary">Melhores ofertas personalizadas</p>
            <h2 className="title">Queima de estoque Nike</h2>
            <p className="text-second">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              aliquam?
            </p>
            <button className="button-title-carousel">Ver Ofertas</button>
          </div>
          <img src={img1} alt="Second Slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container-title-carousel">
          <div className="title-carousel">
            <p className="text-primary">Melhores ofertas personalizadas</p>
            <h2 className="title">Queima de estoque Nike</h2>
            <p className="text-second">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              aliquam?
            </p>
            <button className="button-title-carousel">Ver Ofertas</button>
          </div>
          <img src={img1} alt="Second Slide" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;

