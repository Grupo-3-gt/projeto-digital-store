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

  const product = listProducts.filter((item) => item.id == id);

  const productData = product[0] || {};

  if (
    product.length == 0 &&
    location.pathname !== "/products/cart" &&
    location.pathname !== "/products/cart/"
  ) {
    navigate("/");
  } else {
    return (
      <>
        <Header />
        <main>
          <div className="main-box-detail">
            <DetailCard product={productData} />
            <Card itemNum={4} />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default ProductViewPage;
