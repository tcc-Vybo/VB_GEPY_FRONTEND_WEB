import { useState } from "react";
import "./style.css";
import LogoGepy from "../../assets/Logo.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [stateValidationEmail, setStateValidationEmail] = useState();
  const [stateValidationCPF, setStateValidationCPF] = useState();

  const [statePermission, setStatePermission] = useState();

  const [stateLoged, setStateLoged] = useState(false);

  const handleLogin = () => {
    const urlToGetEmployee = `https://vb-gepy-backend-web.onrender.com/funcionario/login/${stateValidationCPF}/${stateValidationEmail}`;
    const tempArray = [];
    try {
      fetch(urlToGetEmployee).then((response) => {
        console.log("Response received:", response);

        if (response.ok === true) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sucesso!",
            text: "Login bem sucedido!",
            showConfirmButton: false,
            timer: 1800,
          });

          navigate("/");
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "ERRO!",
            text: "Login não efetuado!",
            showConfirmButton: false,
            timer: 1800,
          });
        }

        return response.json();
      });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  return (
    <div className="login-container-main">
      <div className="login-container-left">
        <img className="logo-gepy-login" src={LogoGepy} />
      </div>
      <div className="login-container-right">
        <form action="" className="login-form">
          <h1 className="principal-title-login">Acesso</h1>
          <label className="title-form-login">Usuário</label>
          <input
            type="text"
            name="usuario"
            className="input-form-login"
            onChange={(text) => {
              console.log(text.target.value);
              setStateValidationEmail(text.target.value);
            }}
          />
          <label className="title-form-login">Senha</label>
          <input
            type="password"
            name="senha"
            className="input-form-login"
            onChange={(text) => {
              console.log(text.target.value);
              setStateValidationCPF(text.target.value);
            }}
          />
          <span className="span-form-login">Esqueceu sua senha?</span>
          <button
            type="button"
            className="button-form-login"
            onClick={() => {
              handleLogin();
            }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
