import { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

function ModalMenu({ page }) {
  const { user } = useContext(UserContext);
  return (
    <div className="modal-container">
      <nav className="modal-navbar">
        <div className="link-box">
          {user && (
            <>
              <h3>Olá, {user.first_name}</h3>
              <Link>Minhas Informações</Link>
              <Link>Métodos de Pagamento</Link>

              <hr />
            </>
          )}
          <h3>Paginas</h3>
          <Link className={page == "/" ? "page-active" : ""} to="/">
            Home
          </Link>
          <Link
            className={page.includes("/products") ? "page-active" : ""}
            to="/products"
          >
            Produtos
          </Link>
          <Link to="">Categorias</Link>
          <Link to="">Meus Pedidos</Link>
        </div>
        <div className="register-login-box">
          <Link to="/login">Entrar</Link>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </nav>
    </div>
  );
}

export default ModalMenu;
