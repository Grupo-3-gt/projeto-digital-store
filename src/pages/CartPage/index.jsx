import { useEffect } from "react";
import "./style.css"
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import Card from "../../components/ProductCard";
import Footer from "../../components/Footer";


function CartPage () {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [])
    
    return (
        <div>
      <Header />
      <main>
        <Cart />
        <Card itemNum={4} />
      </main>
      <Footer/>
    </div>
    )
}

export default CartPage