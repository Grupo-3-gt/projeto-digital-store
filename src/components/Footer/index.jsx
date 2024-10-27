import { Link } from "react-router-dom";
import Logo from "../../assets/img/svg/logo-footer.svg";
import IconFacebook from "../../assets/img/svg/facebook.svg";
import IconInstagram from "../../assets/img/svg/instagram.svg";
import IconTwitter from "../../assets/img/svg/twitter.svg";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-subcontainer">
          <div className="footer-logo">
            <a target="_self" href="#">
              <img src={Logo} alt="Logo digital store" />
            </a>

            <p>
              Na Digital Store, você encontra uma seleção exclusiva de sapatos e
              roupas Nike, unindo conforto e as últimas tendências. Descubra o
              que há de melhor em moda esportiva e eleve seu estilo a cada
              passo!
            </p>

            <div className="footer-icons">
              <Link target="_self" href="#">
                {" "}
                <img src={IconFacebook} alt="Icon Facebook" />{" "}
              </Link>
              <Link target="_self" href="#">
                {" "}
                <img src={IconInstagram} alt="Icon Instagram" />{" "}
              </Link>
              <Link target="_self" href="#">
                {" "}
                <img src={IconTwitter} alt="Icon Twitter" />{" "}
              </Link>
            </div>
          </div>
          <div className="footer-card">
            <h3 className="card-title">Informações</h3>
            <div className="informations">
              <nav className="footer-link">
                <Link>Sobre Drip Store</Link>
                <Link>Segurança</Link>
                <Link>Wishlist</Link>
                <Link>Blog</Link>
                <Link>Trabalhe Conosco</Link>
                <Link>Meus Pedidos</Link>
              </nav>
            </div>
          </div>
          <div className="footer-card">
            <h3 className="card-title">Categorias</h3>
            <div className="informations">
              <nav className="footer-link">
                <Link>Camisetas</Link>
                <Link>Calças</Link>
                <Link>Bonés</Link>
                <Link>Headphones</Link>
                <Link>Tênis</Link>
              </nav>
            </div>
          </div>
          <div className="footer-card">
            <h3 className="card-title">Contato</h3>
            <div className="informations-place">
              <p className="place-address">
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </p>
              <p className="number">(85) 3051-3411</p>
            </div>
          </div>
        </div>
        <hr />
        <p className="footer-bottom">© 2024 Digital Store</p>
      </div>
    </footer>
  );
}

export default Footer;
