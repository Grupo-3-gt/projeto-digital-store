import { useForm } from "react-hook-form";
import "./style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import InputMask from "react-input-mask";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(registerSchema),
  });
  const { getCep, address } = useContext(UserContext);

  function getAddress(event) {
   
    const value = event.target.value.replace(/\D/g, '')
    console.log(value.length);
    if (value.length === 8) {
      console.log(value)
      getCep(value);
    }
  }

  function submit(data) {
    const newData = {
      ...data,
      street: address.street,
      city: address.city,
      neighborhood: address.neighborhood,
      cpf: data.cpf.replace(/\D/g, ""),
      cep: data.cep.replace(/\D/g, ""),
      phone: data.phone.replace(/\D/g, ""),
    };
    console.log(data);
    console.log(newData);
  }

  console.log(address);

  return (
    <>
      <div className="container-form">
        <h1> Criar Conta</h1>
        <form
          noValidate
          onSubmit={handleSubmit(submit)}
          className="form-register"
        >
          <div className="box-form">
            <h3>Informações Pessoais</h3>
            <hr />
            <div>
              <label htmlFor="name">Nome *</label>
              <input
                className={errors.first_name && "erro-border"}
                type="text"
                id="name"
                placeholder="Insira seu nome"
                required
                {...register("first_name")}
              />
              {errors.first_name && (
                <p className="erro-input">{errors.first_name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="name">Sobrenome *</label>
              <input
                className={errors.surname && "erro-border"}
                type="text"
                id="surname"
                placeholder="Insira seu sobrenome"
                required
                {...register("surname")}
              />
              {errors.surname && (
                <p className="erro-input">{errors.surname.message}</p>
              )}
            </div>
            <div>
              <label>CPF *</label>
              <InputMask
                className={errors.cpf && "erro-border"}
                mask="999-999-999.99"
                type="text"
                placeholder="Insira seu CPF"
                required
                {...register("cpf")}
              />
              {errors.cpf && <p className="erro-input">{errors.cpf.message}</p>}
            </div>
            <div>
              <label htmlFor="email">E-mail *</label>
              <input
                className={errors.email && "erro-border"}
                type="email"
                id="email"
                placeholder="Insira seu email"
                required
                {...register("email")}
              />
              {errors.email && (
                <p className="erro-input">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="celular">Celular *</label>
              <InputMask
                className={errors.phone && "erro-border"}
                mask="(99) 99999-9999"
                type="text"
                id="celular"
                placeholder="Insira seu celular"
                required
                {...register("phone")}
              />
              {errors.phone && (
                <p className="erro-input">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <label>Senha *</label>
              <input
                className={errors.password && "erro-border"}
                type="password"
                placeholder="Insira sua senha"
                required
                {...register("password")}
              />
              {errors.password && (
                <p className="erro-input">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="box-form">
            <h3>Informações de Entrega</h3>
            <hr />
            <div>
              <label htmlFor="endereco">Rua *</label>
              <input
                value={address.logradouro}
                disabled
                type="text"
                id="endereco"
                placeholder="Insira seu endereço"
                required
                {...register("street")}
              />
              {errors.street && (
                <p className="erro-input">{errors.street.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="bairro">Bairro *</label>
              <input
                defaultValue={address.bairro}
                value={address.bairro}
                disabled
                type="text"
                id="bairro"
                placeholder="Insira seu Bairro"
                required
                {...register("neighborhood")}
              />
              {errors.neighborhood && (
                <p className="erro-input">{errors.neighborhood.message}</p>
              )}
            </div>
            <div>
              <label>Cidade *</label>
              <input
                value={address.localidade}
                disabled
                type="text"
                placeholder="Insira seu Cidade"
                required
                {...register("city")}
              />
              {errors.city && (
                <p className="erro-input">{errors.city.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="cep">CEP *</label>
              <InputMask
                className={errors.cep && "erro-border"}
                mask="99999-999"
                onInput={getAddress}
                type="text"
                id="cep"
                placeholder="Insira seu CEP"
                required
                {...register("cep")}
              />
              {errors.cep && <p className="erro-input">{errors.cep.message}</p>}
            </div>
            <div>
              <label>Número *</label>
              <input
                className={errors.number && "erro-border"}
                type="text"
                placeholder="Insira seu Número"
                required
                {...register("number")}
              />
              {errors.number && (
                <p className="erro-input">{errors.number.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="complemento">Complemento </label>
              <input
                type="text"
                id="complemento"
                placeholder="Insira seu Complemento"
                {...register("commplement")}
              />
            </div>
          </div>
          <div className="check-form">
            <input type="checkbox" required />
            <p>
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </p>
          </div>
          <button type="submit" className="btn-form">
            Criar Conta
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
