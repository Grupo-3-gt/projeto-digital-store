import Header from "../../components/Header";
import Card from "../../components/ProductCard";
import Footer from "../../components/Footer";
import FilterProducts from "../../components/FilterProducts";
import "./style.css";
import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductsContext";
import { useParams, useNavigate } from "react-router-dom";
import DetailCard from "../../components/DetailCard";

function ProductViewPage() {
  const { listProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [productData, setProductData] = useState({})

  const product = listProducts.filter((item) => item.id == id);
  
  if (product.length == 0) {
    navigate('/')
  }

 setProductData(product[0])
  console.log(productData)

  return (
    <>
      <Header />
      <main>
        <div className="main-box">
          <DetailCard product={productData}/>
          <Card />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductViewPage;
