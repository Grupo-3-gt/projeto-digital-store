import "./style.css";
import logo from "../../assets/img/svg/logo-header.svg";
import cartIcon from "../../assets/img/svg/mini-cart.svg";
import menuIcon from "../../assets/img/svg/menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);

  function openMenu() {
    setMenu(!menu)
  }

  console.log(menu)
  return (
    <header>
      <div className="header-container">
        <div className="div-header">
          <button onClick={openMenu} className="menu-button">
            <img src={menuIcon} alt="" />
          </button>
          <h1 className="logo">
            <img src={logo} alt="Logo digital store" />
          </h1>
          <div className="div-search">
            <input type="text" placeholder="Pesquisar produto..." />
            {/* <button>
                    <img src="" alt="" />
                </button> */}
          </div>
          <div className="div-buttons">
            <Link to="/register">Cadastre-se</Link>
            <Link to="/login">Entrar</Link>
          </div>
          <button className="button-cart">
            <img src={cartIcon} alt="" />
          </button>
        </div>
        <nav className={menu ? "navbar-active" : "navbar-disable"}>
          <a href="">Home</a>
          <a href="">Produtos</a>
          <a href="">Categorias</a>
          <a href="">Meus Pedidos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
