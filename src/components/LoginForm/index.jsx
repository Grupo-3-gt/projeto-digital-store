import "./style.css";
import IconGmail from "../../assets/img/png-jpeg/gmail-login.png";
import IconFacebook from "../../assets/img/png-jpeg/Vector.png";
import tenisLogin1 from "../../assets/img/png-jpeg/tenisLogin1.png";
import tenisLogin from "../../assets/img/png-jpeg/tenisLogin.png";
import { Link } from "react-router-dom";
import { loginSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function LoginForm() {
  const { login } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(loginSchema),
  });

  function submit(data) {
    login(data);
  }

  return (
    <div className="login-container">
      <form className="form-content" onSubmit={handleSubmit(submit)}>
        <h2 className="access-text">Acesse sua conta</h2>
        <p className="register-text">
          Novo cliente? Então registre-se <Link to="/register">aqui.</Link>
        </p>
        <div className="input-box">
          <label htmlFor="login">Login *</label>
          <input
            type="text"
            id="login"
            placeholder="Insira seu login ou email"
            {...register("email")}
          />
          {errors.email && <p className="erro-input">{errors.email.message}</p>}
        </div>
        <div className="input-box">
          <label htmlFor="password">Senha *</label>
          <input
            type="password"
            id="password"
            placeholder="Insira sua senha"
            {...register("password")}
          />
          {errors.password && (
            <p className="erro-input">{errors.password.message}</p>
          )}
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
    </div>
  );
}

export default LoginForm;
