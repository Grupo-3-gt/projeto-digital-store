import Header from "../../components/Header";
import Card from "../../components/ProductCard";
import Footer from "../../components/Footer";
import FilterProducts from "../../components/FilterProducts";
import "./style.css";
import { useEffect, useState } from "react";
import OrderProducts from "../../components/OrderProducts";
import filterIcon from "../../assets/img/svg/filterIcon.svg";

function ProductsListPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <Header />
      <main>
        <div className="main-box">
          <div className="order-products">
            <p>
              Resultado para "Tênis" - <span>389 produtos</span>
            </p>
            <div>
              <OrderProducts />
              <button onClick={() => setOpenFilter(true)}>
                <img src={filterIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="filter-products">
            <FilterProducts
              openFilter={openFilter}
              setOpenFilter={setOpenFilter}
            />
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductsListPage;
