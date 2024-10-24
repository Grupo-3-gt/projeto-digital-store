import { Link } from "react-router-dom";
import Logo from "../../assets/img/svg/logo-footer.svg"
import IconFacebook from "../../assets/img/svg/facebook.svg"
import IconInstagram from "../../assets/img/svg/instagram.svg"
import IconTwitter from "../../assets/img/svg/twitter.svg"
import "./style.css";

function Footer(){
    return(
       <footer>
            <div className="footer-container">
                <div className="footer-subcontainer">
                    <div className="footer-logo">
                        <img src={Logo} alt="Logo digital store" /> 

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aliquam tempora placeat iste quisquam nihil enim asperiores, doloremque repudiandae suscipit!</p>
                        
                        <div className="footer-icons">
                            <img src={IconFacebook} alt="Icon Facebook" /> 
                            <img src={IconInstagram} alt="Icon Instagram" /> 
                            <img src={IconTwitter} alt="Icon Twitter" /> 
                        </div>
                    </div>
                    <div className="footer-card">
                        <h3 className="card-title">Informações</h3>
                        <div className="informations">
                            <nav>
                                <Link className="footer-link">Sobre Drip Store</Link>
                                <Link className="footer-link">Segurança</Link>
                                <Link className="footer-link">Wishlist</Link>
                                <Link className="footer-link">Blog</Link>
                                <Link className="footer-link">Trabalhe Conosco</Link>
                                <Link className="footer-link">Meus Pedidos</Link>
                            </nav>
                        </div>
                    </div>
                    <div className="footer-card">
                        <h3 className="card-title">Categorias</h3>
                        <div className="informations">
                            <nav>
                                <Link className="footer-link">Camisetas</Link>
                                <Link className="footer-link">Calças</Link>
                                <Link className="footer-link">Bonés</Link>
                                <Link className="footer-link">Headphones</Link>
                                <Link className="footer-link">Tênis</Link>
                            </nav>
                        </div>
                    </div>
                    <div className="footer-card">
                        <h3 className="card-title">Contato</h3>
                        <div className="informations-place">
                            <p className="place-address">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                            <p className="number">(85) 3051-3411</p>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="footer-bottom">© 2024 Digital Store</p>
            </div>
       </footer>
    )
}

export default Footer;