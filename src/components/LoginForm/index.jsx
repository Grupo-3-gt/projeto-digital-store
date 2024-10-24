import IconGmail from "../../assets/img/png-jpeg/gmail-login.png"
import IconFacebook from "../../assets/img/png-jpeg/Vector.png"

function LoginPage(){
    return(
        <div>
        <div>
             <h2>Acesse sua conta</h2>
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
        <div>
            <img src="" alt="" />
        </div>
     
        </div>

    )

}