
import "./style.css"

function FinalizePurchase () {
    return(
        <div className="container">
            <h2>Finalizar Compra</h2>
            <div className="form-finalize">
                <div className="personal-infomation">
                    <form action="">
                        <p>Informações Pessoais</p>
                        <hr />
                        <label htmlFor="name"> Nome Completo *</label>
                        <input type="text" id="name" placeholder="Insira seu nome" />
                        <label htmlFor="cpf">CPF *</label>
                        <input type="text" pattern="[0-9]{11}" maxlength="11" minlength="11" id="cpf" placeholder="Insira seu CPF" />
                        <label htmlFor="email">E-mail *</label>
                        <input required type="email" id="email" placeholder="Insira seu email" />
                        <label htmlFor="phone">Celular *</label>
                        <input required type="tel" id="phone" placeholder="Insira seu celular" />
                    </form>
                </div>
                <div className="delivery-information">
                    <form action="">
                        <p>Informações de Entrega</p>
                        <hr />
                        <label htmlFor="address">Endereço *</label>
                        <input type="text" id="adddress" placeholder="Insira seu endereço" />
                        <label htmlFor="neighborhood">Bairro *</label>
                        <input type="text" id="neighborhood" placeholder="Insira seu bairro" />
                        <label htmlFor="city">Cidade *</label>
                        <input required type="text" id="city" placeholder="Insira sua cidade" />
                        <label htmlFor="cep">CEP *</label>
                        <input type="text" pattern="[0-9]{8}" maxlength="8" minlength="8" id="cep" placeholder="Insira seu cep" />
                        <label htmlFor="complemento">Complemento</label>
                        <textarea id="complemento" placeholder="Insira seu complemento"></textarea>
                    </form>
                </div>
                <div className="payment-information">
                    <form action="">
                        <p>Informações de Pagamento</p>
                        <label htmlFor="method">Forma de Pagamento</label>
                        
                    </form>
                </div>
            </div>
        </div>
    )

}