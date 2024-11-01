import Header from "../../components/Header";
import Card from "../../components/ProductCard";
import Footer from "../../components/Footer";
import FilterProducts from "../../components/FilterProducts";
import "./style.css"

function ProductViewPage() {
  return (
    <>
      <Header />
      <main>
        <div className="main-box">
        <h1> Product View Page</h1>
          <Card />
        </div>
      </main>
      <Footer />
    </>
  );
}


export default ProductViewPage;