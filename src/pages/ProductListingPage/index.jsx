import Header from "../../components/Header";
import Card from "../../components/ProductCard";
import Footer from "../../components/Footer";
import FilterProducts from "../../components/FilterProducts";
import "./style.css";
import { useEffect } from "react";

function ProductsListPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="main-box">
          <FilterProducts />
          <Card />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductsListPage;
