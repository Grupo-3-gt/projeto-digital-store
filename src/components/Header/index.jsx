import "./style.css";
import logo from "../../assets/img/svg/logo-header.svg";
import cartIcon from "../../assets/img/svg/mini-cart.svg";
import { useState } from "react";

function Header() {
    const [contador, setContador] = useState(0)

    console.log(contador)

    function incremento () {
        setContador(contador + 1)
    }
  return (
    <header>
      <div className="div-header">
        <h1 className="logo">
          <img src={logo} alt="Logo digital store" />
        </h1>
        <div className="div-search">
          <input type="text" placeholder="Pesquisar produto..."/>
          {/* <button>
                    <img src="" alt="" />
                </button> */}
        </div>
        <div className="div-buttons">
          <a href="">Cadastre-se</a>
          <a href="">Entrar</a>
        </div>
        <button onClick={incremento} className="button-cart">
          <img src={cartIcon} alt="" />
        </button>
      </div>
      <nav className="navbar">
        <a href="">Home</a>
        <a href="">Produtos</a>
        <a href="">Categorias</a>
        <a href="">Meus Pedidos</a>
      </nav>
    </header>
  );
}

export default Header;
