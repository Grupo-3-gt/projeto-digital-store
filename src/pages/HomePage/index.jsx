import Header from "../../components/Header/index";
import Offer from "../../components/SpecialOffer";
import Footer from "../../components/Footer/index";
import "./style.css";
import CarouselComponent from "../../components/Carousel";
import Collection from "../../components/Collection";
import Card from "../../components/ProductCard";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <main>
        <CarouselComponent />
        <Collection />
        <Card itemNum={8} />
        <Offer />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
