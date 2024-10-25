import IconGmail from "../../assets/img/png-jpeg/gmail-login.png"
import IconFacebook from "../../assets/img/png-jpeg/Vector.png"
import tenisLogin1 from "../../assets/img/png-jpeg/tenisLogin1.png"
import tenisLogin from "../../assets/img/png-jpeg/tenisLogin.png"
import { Link } from "react-router-dom"


function LoginPage(){
    return(
        <div className="container-login">
          <div> 
            <img src={tenisLogin1} alt="" />
            <img src={tenisLogin} alt="" />
          </div>
        <div className="box-login">
             <h2 className="">Acesse sua conta</h2>
             <p>Novo cliente? Então <Link>registre-se aqui</Link>.</p>
          <form>
              <div>
                  <label htmlFor="login">Login *</label>
                  <input type="text" id="login" placeholder="Insira seu login ou email"/>
                </div>
              <div>
                 <label htmlFor="password">Senha *</label>
                 <input type="password" id="password" placeholder="Insira sua senha" />
               </div>
               <div>
                <Link>Esqueci minha senha</Link>
               </div>
              <button type="submit" className="">Acessar conta</button>
         </form>
           <p>Ou faça login com</p>
           <div>
             <Link> <img src={IconGmail} alt="" /></Link>
             <Link> <img src={IconFacebook} alt="" /></Link>
           </div>
        </div>
     
        </div>

    )

}

export default LoginPage;