import Tenis from "../../assets/img/png-jpeg/tenis-finalize-purchase.png"
import "./style.css"

function FinalizePurchase () {
    return(
        <div className="container">
            <div className="form-finalize">
                <h2 className="finalize-purchase">Finalizar Compra</h2>
                <div className="personal-infomation">
                    <form action="">
                        <p className="form-text">Informações Pessoais</p>
                        <hr />
                        <div className="form"> 
                            <label htmlFor="name"> Nome Completo *</label>
                            <input type="text" id="name" placeholder="Insira seu nome" />
                        </div>
                       <div className="form">
                            <label htmlFor="cpf">CPF *</label>
                            <input type="text" id="cpf" placeholder="Insira seu CPF" />
                       </div>
                       <div className="form">
                            <label htmlFor="email">E-mail *</label>
                            <input required type="email" id="email" placeholder="Insira seu email" />
                       </div>
                       <div className="form">
                            <label htmlFor="phone">Celular *</label>
                            <input required type="tel" id="phone" placeholder="Insira seu celular" />
                       </div>
                    </form>
                </div>
                <div className="delivery-information">
                    <form action="">
                        <p className="form-text">Informações de Entrega</p>
                        <hr />
                        <div className="form">
                            <label htmlFor="address">Endereço *</label>
                            <input type="text" id="adddress" placeholder="Insira seu endereço" />
                        </div>
                       <div className="form">
                            <label htmlFor="neighborhood">Bairro *</label>
                            <input type="text" id="neighborhood" placeholder="Insira seu bairro" />
                       </div>
                        <div className="form">
                            <label htmlFor="city">Cidade *</label>
                            <input required type="text" id="city" placeholder="Insira sua cidade" />
                        </div>
                        <div className="form">
                            <label htmlFor="cep">CEP *</label>
                            <input type="text" id="cep" placeholder="Insira seu cep" />
                        </div>
                        <div className="form">
                            <label htmlFor="complement">Complemento</label>
                            <input id="complement" type="text" placeholder="Insira seu complemento"/>
                        </div>
                    </form>
                </div>
                <div className="payment-information">
                    <form action="">
                        <p className="form-text">Informações de Pagamento</p>
                        <hr />
                        <div className="payment-method">
                            <div className="text-method">
                                <label htmlFor="">Forma de Pagamento</label>
                            </div>
                            <div className="circle-box">
                                <div className="input-radio">
                                    <input name="method" className="circle" type="radio" id="creditCard"/>
                                    <label htmlFor="creditCard">Cartão de crédito</label>
                                </div>
                                <div className="input-radio">
                                    <input name="method" className="circle" type="radio" id="ticket"/>
                                    <label htmlFor="ticket">Boleto Bancário</label>
                                </div>
                                <div className="input-radio">
                                    <input name="method" className="circle" type="radio" id="ticket"/>
                                    <label htmlFor="ticket">Pix</label>
                                </div>
                            </div>
                            <div className="form">
                                <label htmlFor="cardName">Nome do Cartão*</label>
                                <input type="text" id="cardName" placeholder="Insira o nome do cartão" />
                            </div>
                            <div className="card-details">
                                <div className="form">
                                    <label htmlFor="numberCard">Data o número do Cartão *</label>
                                    <input type="number" id="numberCard" placeholder="Insira número do cartão"/>
                                </div>
                                <div className="form">
                                    <label htmlFor="validCard">Data de  validade do Cartão *</label>
                                    <input type="number" id="validCard" placeholder="Insira validade do cartão"/>
                                </div> 
                            </div>
                            <div className="form">
                                <label htmlFor="cvv">CVV *</label>
                                <input type="text" id="cvv" placeholder="CVV" /> 
                            </div>
                        </div>
                    </form>
                </div>
                <div className="finish-purchase">
                    <p className="form-text">Finalizar a Compra</p>
                    <hr />
                    <div className="total">
                        <div className="total-flex">
                            <h3>Total</h3>
                            <p className="price">R$ 219,00</p> 
                        </div>
                        
                        <span>ou 10x de R$ 21,00 sem juros</span>
                    </div>
                    <button className="button-payment">Realizar Pagamento</button>
                </div>
            </div>
            <div className="summary">
                <h3>RESUMO</h3>
                <hr />
                <div className="summary-img">
                    <div className="card-img">
                       <img src={Tenis} alt="tenis" /> 
                    </div>
                    <span className="img-description">Tênis Nike Revolution 6 Next Nature Masculino</span>
                </div>
                <hr />
                <div className="space-summary">
                    <span>Subtotal:</span>
                    <p>R$ 219,00</p>
                </div>
                <div className="space-summary">
                    <span>Frete:</span>
                    <p>R$ 0,00</p>
                </div>
                <div  className="space-summary">
                    <span>Desconto:</span>
                    <p>R$ 30,00</p>
                </div>
                <div className="summary-total">
                      <div  className="space-summary">
                        <p>Total</p>
                        <p>R$ 219,00</p>  
                    </div>
                <span>ou 10x de R$ 21,00 sem juros</span>
                </div>
              
                <button className="button-payment">Relizar Pagamento</button>
            </div>
        </div>
    )

}

export default FinalizePurchase;