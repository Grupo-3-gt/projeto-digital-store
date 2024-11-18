import Header from "../../components/Header";
import Card from "../../components/ProductCard";
import Footer from "../../components/Footer";
import FilterProducts from "../../components/FilterProducts";
import "./style.css";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/ProductsContext";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import DetailCard from "../../components/DetailCard";

function ProductViewPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { listProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const product = listProducts.find((item) => item.id == id);

  if (
    !product &&
    location.pathname !== "/products/cart" &&
    location.pathname !== "/products/cart/"
  ) {
    return navigate("/");
  }

  return (
    <>
      <Header />
      <main>
        <div className="main-box-detail">
          <DetailCard product={product} />
          <Card itemNum={4} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductViewPage;
