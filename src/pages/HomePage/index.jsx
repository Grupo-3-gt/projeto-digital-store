import Header from "../../components/Header/index";
import Offer from "../../components/SpecialOffer";
import Card from "../../Components/ProductCard/index";
import Footer from "../../components/Footer/index";
import "./style.css";
import CarouselComponent from "../../components/Carousel";

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <CarouselComponent />
        <Card />
        <Offer/>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
