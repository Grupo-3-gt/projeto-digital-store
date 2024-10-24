import "./style.css";
import { Link } from "react-router-dom";

function ModalMenu() {
  return (
    <div className="modal-container">
      <nav className="modal-navbar">
        <h3>Paginas</h3>
        <Link to="">Home</Link>
        <Link to="">Produtos</Link>
        <Link to="">Categorias</Link>
        <Link to="">Meus Pedidos</Link>
      </nav>
    </div>
  );
}

export default ModalMenu;
