import Header from "../../components/Header/index";
import Card from "../../Components/ProductCard/index";
import Footer from "../../components/Footer/index"
import "./style.css";
import CarouselComponent from "../../components/Carousel";
import Collection from "../../components/Collection";

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <CarouselComponent />
        <Collection />
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
