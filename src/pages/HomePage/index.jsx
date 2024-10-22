import Header from "../../components/Header/index";
import Card from "../../Components/ProductCard/index";
import Footer from "../../components/Footer/index"
import "./style.css";

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
