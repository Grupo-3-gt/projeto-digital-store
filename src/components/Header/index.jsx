import "./style.css";
import logo from "../../assets/img/svg/logo-header.svg";
import cartIcon from "../../assets/img/svg/mini-cart.svg";
import menuIcon from "../../assets/img/svg/menu.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ModalMenu from "../Modals/ModalMenu";
import { ProductContext } from "../../contexts/ProductsContext";

function Header() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const [page, setPage] = useState(location.pathname);
  const navigate = useNavigate();
  const { cartArr, setCartArr } = useContext(ProductContext);

  useEffect(() => {
    if (localStorage.getItem("cart") !== "[]") {
      setCartArr(JSON.parse(localStorage.getItem("cart") || "[]"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }, [cartArr]);

  useEffect(() => {
    setPage(location.pathname);
  }, [location]);

  function openMenu() {
    setMenu(!menu);
  }

  return (
    <header>
      <div className="header-container">
        <div className="div-header">
          <button
            onClick={openMenu}
            className={
              page.includes("login") || page.includes("register")
                ? "display-none"
                : "menu-button"
            }
          >
            <img src={menuIcon} alt="" />
          </button>
          <h1 onClick={() => navigate("/")} className="logo">
            <img src={logo} alt="Logo digital store" />
          </h1>
          <div
            className={
              page.includes("login") || page.includes("register")
                ? "display-none"
                : "div-search"
            }
          >
            <input type="text" placeholder="Pesquisar produto..." />
            {/* <button>
                    <img src="" alt="" />
                </button> */}
          </div>
          <div
            className={
              page.includes("login") || page.includes("register")
                ? "display-none"
                : "div-buttons"
            }
          >
            <Link to="/register">Cadastre-se</Link>
            <Link to="/login">Entrar</Link>
          </div>
          <button
            className={
              page.includes("login") || page.includes("register")
                ? "display-none"
                : "button-cart"
            }
          >
            <img src={cartIcon} alt="" />
            {cartArr.length !== 0 && <p className="cart-quantity">{cartArr.length}</p>}
          </button>
        </div>
        <nav
          className={
            page.includes("login") || page.includes("register")
              ? "display-none"
              : "navbar"
          }
        >
          <Link className={page == "/" ? "page-active" : ""} to="/">
            Home
          </Link>
          <Link
            className={
              page.includes("products") ? "page-active" : ""
            }
            to="/products"
          >
            Produtos
          </Link>
          <Link to="">Categorias</Link>
          <Link to="">Meus Pedidos</Link>
        </nav>
      </div>
      {menu && <ModalMenu page={page} />}
    </header>
  );
}

export default Header;
