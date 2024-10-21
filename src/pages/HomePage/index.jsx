import Header from "../../components/Header/index";
import Card from "../../Components/ProductCard";
import Offer from "../../components/SpecialOffer";
import "./style.css";

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Card />
        <Offer/>
      </main>
    </div>
  );
}

export default HomePage;
