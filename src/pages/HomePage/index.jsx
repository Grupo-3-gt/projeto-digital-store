import Header from "../../components/Header/index";
import Offer from "../../components/SpecialOffer";
import Footer from "../../components/Footer/index";
import "./style.css";
import CarouselComponent from "../../components/Carousel";
import Collection from "../../components/Collection";
import Card from "../../components/ProductCard";

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <CarouselComponent />
        <Collection />
        <Card />
        <Offer />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
