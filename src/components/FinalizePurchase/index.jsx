
import "./style.css"

function FinalizePurchase () {
    return(
        <div className="container">
            
            <div className="form-finalize">
                <h2>Finalizar Compra</h2>
                <div className="personal-infomation">
                    <form action="">
                        <p className="form-text">Informações Pessoais</p>
                        <hr />
                        <div className="form-name"> 
                            <label htmlFor="name"> Nome Completo *</label>
                            <input type="text" id="name" placeholder="Insira seu nome" />
                        </div>
                       <div className="form-cpf">
                            <label htmlFor="cpf">CPF *</label>
                            <input type="text" id="cpf" placeholder="Insira seu CPF" />
                       </div>
                       <div className="form-email">
                            <label htmlFor="email">E-mail *</label>
                            <input required type="email" id="email" placeholder="Insira seu email" />
                       </div>
                       <div className="form-phone">
                            <label htmlFor="phone">Celular *</label>
                            <input required type="tel" id="phone" placeholder="Insira seu celular" />
                       </div>
                    </form>
                </div>
                <div className="delivery-information">
                    <form action="">
                        <p className="form-text">Informações de Entrega</p>
                        <hr />
                        <div className="form-address">
                            <label htmlFor="address">Endereço *</label>
                            <input type="text" id="adddress" placeholder="Insira seu endereço" />
                        </div>
                       <div className="form-neighborhood">
                            <label htmlFor="neighborhood">Bairro *</label>
                            <input type="text" id="neighborhood" placeholder="Insira seu bairro" />
                       </div>
                        <div className="form-city">
                            <label htmlFor="city">Cidade *</label>
                            <input required type="text" id="city" placeholder="Insira sua cidade" />
                        </div>
                        <div className="form-cep">
                            <label htmlFor="cep">CEP *</label>
                            <input type="text" id="cep" placeholder="Insira seu cep" />
                        </div>
                        <div className="form-complemet">
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
                            <p>Forma de Pagamento</p>
                            <div className="circle-box">
                                <div className="input-radio">
                                    <label htmlFor="creditCard">Cartão de crédito</label>
                                    <input name="method" className="circle" type="radio" id="creditCard"/>
                                </div>
                                <div className="input-radio">
                                    <label htmlFor="ticket">Boleto Bancário</label>
                                    <input name="method" className="circle" type="radio" id="ticket"/>
                                </div>
                                <div className="input-radio">
                                    <label htmlFor="pix">Pix</label>
                                    <input name="method" className="circle" type="radio" id="pix"/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="form-cardName">
                            <label htmlFor="cardName">Nome do Cartão *</label>
                            <input type="text" name="cardName" id="cardName" placeholder="Insira o nome do cartão" />
                        </div>
                        <div className="card-details">
                            <label htmlFor="numberCard">Data o número do Cartão *</label>
                            <input type="number" id="numberCard" placeholder="Insira número do cartão"/>
                            <label htmlFor="validCard">Data de  validade do Cartão *</label>
                            <input type="number" id="validCard" placeholder="Insira validade do cartão"/>
                        </div>
                        <div className="form-cvv">
                           <label htmlFor="cvv">CVV *</label>
                           <input type="text" id="cvv" placeholder="CVV" /> 
                        </div>
                    </form>
                </div>
                <div className="finish-purchase">
                    <p>Finalizar a Compra</p>
                    <hr />
                    <div className="total">
                        <h3>Total</h3>
                        <p className="price">R$ 219,00</p> 
                        <span>ou 10x de R$ 21,00 sem juros</span>
                    </div>
                    <button className="button-payment">Realizar Pagamento</button>
                </div>
            </div>
            <div className="summary">
                <h3>RESUMO</h3>
                <hr />
                <div className="summary-img">
                    <img src="" alt="" />
                    <span>Tênis Nike Revolution 6 Next Nature Masculino</span>
                    <hr />
                </div>
                <div>
                    <span>Subtotal:</span>
                    <p>R$ 219,00</p>
                </div>
                <div>
                    <span>Frete:</span>
                    <p>R$ 0,00</p>
                </div>
                <div>
                    <span>Desconto</span>
                    <p>R$ 30,00</p>
                </div>
                <div>
                    <h4>Total</h4>
                    <p>R$ 219,00</p>
                    <span>ou 10x de R$ 21,00 sem juros</span>
                </div>
                <button className="button-payment">Relizar Pagamento</button>
            </div>
        </div>
    )

}

export default FinalizePurchase;