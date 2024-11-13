import  SucessFig from "../../assets/img/png-jpeg/SucessFig.png";
import React from 'react';
import './style.css';

function SucessInfo() {
  // Mock dos dados
  const dadosCompra = {
    nome: 'Francisco Antonio Pereira',
    cpf: '123.485.913-35',
    email: 'francisco@gmail.com',
    celular: '(85) 5555-5555',
    endereco: {
      rua: 'Rua João Pessoa, 333',
      bairro: 'Centro',
      cidade: 'Fortaleza',
      estado: 'Ceará',
      cep: '433-8800'
    },
    pagamento: {
      titular: 'FRANCISCO A P',
      finalCartao: '** ** ** 2020'
    },
    produto: {
      nome: 'Tênis Nike Revolution 6 Next Nature Masculino',
      preco: 219.00
    }
  };

  return (
    <div className="confirm-purchease">
      <img
       src={SucessFig}
       className="sucessfig"
      />
      <h2 className="confirm-text">Compra Realizada com sucesso!</h2>
      <hr />
      
      <div className="information">
        <h3 className="personal-info">Informações Pessoais</h3>
        <p><strong>Nome:</strong> {dadosCompra.nome}</p>
        <p><strong>CPF:</strong> {dadosCompra.cpf}</p>
        <p><strong>Email:</strong> {dadosCompra.email}</p>
        <p><strong>Celular:</strong> {dadosCompra.celular}</p>
      <hr />
        
        <h3 className="delivery-info">Informações de Entrega</h3>
        <p><strong>Endereço:</strong> {dadosCompra.endereco.rua}</p>
        <p><strong>Bairro:</strong> {dadosCompra.endereco.bairro}</p>
        <p><strong>Cidade:</strong> {dadosCompra.endereco.cidade}</p>
        <p><strong>CEP:</strong> {dadosCompra.endereco.cep}</p>
        <hr />

        <h3 className="payment-info">Informações de Pagamento</h3>
        <p><strong>Titular do Cartão:</strong> {dadosCompra.pagamento.titular}</p>
        <p><strong>Final:</strong> {dadosCompra.pagamento.finalCartao}</p>
      </div>
      <hr />
      <div className="purchease-info">
        <h3>Resumo da Compra</h3>
        <p>{dadosCompra.produto.nome}</p>
        <p><strong>Total:</strong> R$ {dadosCompra.produto.preco.toFixed(2)}</p>
      </div>
      
      
      <button className="sucess-button"  onClick={() => alert('Imprimindo Recibo...')}>Voltar Para Home </button>
    </div>
  );
}

export default SucessInfo

