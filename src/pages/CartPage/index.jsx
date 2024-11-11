import Footer from "../../components/Footer";
import Header from "../../components/Header"
import SucessInfo from "../../components/SucessInfo"
import "./style.css"


function CartPage () {
    return ( 
        <div>
            <Header/> 
            <main>
            <SucessInfo/>
            </main>          
            <Footer/>
        </div>
    )
}

export default CartPage