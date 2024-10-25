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

{
  /* <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */
}

//     <img src={img1} alt="" />
//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     {/* <ExampleCarouselImage text="Third slide" /> */}
//     <img src={img1} alt="" />
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>
//         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//       </p>
//     </Carousel.Caption>
//   </Carousel.Item> */}

// import React from 'react';
// import { Carousel, Button } from 'react-bootstrap';
// import './style.css'; // Importe o seu CSS personalizado

// const CustomCarousel = () => {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={img1}
//           alt=""
//         />
//         <Carousel.Caption>
//           <h3>Queima de estoque Nike 🔥</h3>
//           <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
//           <Button variant="primary">Ver Ofertas</Button>
//         </Carousel.Caption>
//       </Carousel.Item>
//       {/* Adicione mais Carousel.Items conforme necessário */}
//     </Carousel>
//   );
// };

// export default CustomCarousel;
