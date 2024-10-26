import "./style.css";
import IconGmail from "../../assets/img/png-jpeg/gmail-login.png";
import IconFacebook from "../../assets/img/png-jpeg/Vector.png";
import tenisLogin1 from "../../assets/img/png-jpeg/tenisLogin1.png";
import tenisLogin from "../../assets/img/png-jpeg/tenisLogin.png";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="login-container">
      <form className="form-content">
        <h2 className="access-text">Acesse sua conta</h2>
        <p className="register-text">
          Novo cliente? Então registre-se <Link>aqui.</Link>
        </p>
        <div className="input-box">
          <label htmlFor="login">Login *</label>
          <input
            type="text"
            id="login"
            placeholder="Insira seu login ou email"
          />
        </div>
        <div className="input-box">
          <label htmlFor="password">Senha *</label>
          <input type="password" id="password" placeholder="Insira sua senha" />
        </div>
        <Link className="recover-password">Esqueci minha senha</Link>
        <button type="submit" className="access-button">
          Acessar conta
        </button>
        <div className="login-icons">
          <p>Ou faça login com</p>
          <div>
            <Link>
              <img src={IconGmail} alt="" />
            </Link>
            <Link>
              <img src={IconFacebook} alt="" />
            </Link>
          </div>
        </div>
      </form>
      <div className="login-page-image">
        <img src={tenisLogin1} alt="" />
        <img src={tenisLogin} alt="" />
      </div>
      {/* <div className="LoginPageImage"> 
            <img src={tenisLogin1} alt="" />
            <img src={tenisLogin} alt="" />
          </div>
        <div className="login-box">
             <h2 className="access-text">Acesse sua conta</h2>
             <p className="register-text">Novo cliente? Então registre-se <Link>aqui.</Link></p> */}
      {/* <form className="form-content">
              <div>
                  <label htmlFor="login" className="login-label">Login *</label>
                  <input type="text" id="login" className="login-input" placeholder="Insira seu login ou email"/>
                </div>
              <div>
                 <label htmlFor="password" className="login-label">Senha *</label>
                 <input type="password" id="password" className="login-input" placeholder="Insira sua senha" />
               </div>
               <div>
                <Link className="recover-password">Esqueci minha senha</Link>
               </div>
              <button type="submit" className="access-button">Acessar conta</button>
         </form>
           <div className="login-icons">
             <p>Ou faça login com</p>
             <Link> <img src={IconGmail} alt="" /></Link>
             <Link> <img src={IconFacebook} alt="" /></Link>
           </div> */}
      {/* </div> */}
    </div>
  );
}

export default LoginForm;
