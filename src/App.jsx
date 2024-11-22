import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductsListPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";
import CartPage from "./pages/CartPage";
import FinalizePurchase from "./components/FinalizePurchase";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsListPage />} />
        <Route path="/products/:id" element={<ProductViewPage/>} />
        <Route path="/products/cart" element={<CartPage />} />
        <Route path="/products/cart/FinalizePurchase" element={<FinalizePurchase/>} />
      </Routes>
    </>
  );
}

export default App;
