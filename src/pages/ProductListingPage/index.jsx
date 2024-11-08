import Header from "../../components/Header";
import Card from "../../components/ProductCard";
import Footer from "../../components/Footer";
import FilterProducts from "../../components/FilterProducts";
import "./style.css";
import { useEffect } from "react";
import OrderProducts from "../../components/OrderProducts";

function ProductsListPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="main-box">
          <div>
            <OrderProducts />
          </div>
          <div className="filter-products">
            <FilterProducts />
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductsListPage;
