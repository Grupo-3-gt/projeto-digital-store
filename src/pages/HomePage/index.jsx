import Header from "../../components/Header/index";
import Offer from "../../components/SpecialOffer";
import Footer from "../../components/Footer/index";
import "./style.css";
import CarouselComponent from "../../components/Carousel";
import Collection from "../../components/Collection";
import Card from "../../components/ProductCard";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <div>
      <Header />
      <main>
        <CarouselComponent />
        <Collection />
        <Card itemNum={8} text="Produtos em alta" />
        <Offer />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
