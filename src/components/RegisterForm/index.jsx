import { useForm } from "react-hook-form";
import "./style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(registerSchema),
  });

  function submit(data) {
    console.log(data);
  }

  return (
    <>
      <div className="container-form">
        <h1> Criar Conta</h1>
        <form action="" method="post" className="form-register">
          <div className="box-form">
            <h3>Informações Pessoais</h3>
            <hr />
            <label htmlFor="name">Nome *</label>
            <input
              type="text"
              id="name"
              placeholder="Insira seu nome"
              required
              {...register("first_name")}
            />
            <label htmlFor="name">Sobrenome *</label>
            <input
              type="text"
              id="surname"
              placeholder="Insira seu sobrenome"
              required
              {...register("surname")}
            />
            <label htmlFor="cpf">CPF *</label>
            <input
              type="text"
              id="cpf"
              placeholder="Insira seu CPF"
              required
              {...register("cpf")}
            />
            <label htmlFor="email">E-mail *</label>
            <input
              type="text"
              id="email"
              placeholder="Insira seu email"
              required
              {...register("email")}
            />
            <label htmlFor="celular">Celular *</label>
            <input
              type="text"
              id="celular"
              placeholder="Insira seu celular"
              required
              {...register("phone")}
            />
            <label>Senha *</label>
            <input
              type="password"
              placeholder="Insira sua senha"
              required
              {...register("password")}
            />
          </div>
          <div className="box-form-two">
            <h3>Informações de Entrega</h3>
            <hr />
            <label htmlFor="endereco">Endereço *</label>
            <input
              type="text"
              id="endereco"
              placeholder="Insira seu endereço"
              required
            />
            <label htmlFor="bairro">Bairro *</label>
            <input
              type="text"
              id="bairro"
              placeholder="Insira seu Bairro"
              required
            />
            <label htmlFor="Cidade">Cidade *</label>
            <input
              type="text"
              id="cidade"
              placeholder="Insira seu Cidade"
              required
            />
            <label htmlFor="cep">CEP *</label>
            <input type="text" id="cep" placeholder="Insira seu CEP" required />
            <label htmlFor="complemento">Complemento </label>
            <input
              type="text"
              id="complemento"
              placeholder="Insira seu Complemento"
            />
          </div>
          <div className="check-form">
            <input type="checkbox" required />
            <p>
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </p>
          </div>
          <button className="btn-form">Criar Conta</button>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
