import { useState } from "react";
import "./loginStyle.css";
import LogoGepy from "../../assets/Logo.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { LoginButton } from "../../components/buttons/loginButton/index";
import { LoginTextField } from "../../components/textFields/loginTextField/index";

export default function Login( ) {
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
          navigate("/vybo/gepy");
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
    <div className="login-parent-container">
      {/* AQUI */}
      <div className="login-container-main">
        <div className="login-container-left">
          <img className="logo-size" src={LogoGepy} />
        </div>
        <div className="login-container-right">
          <div className="form-container">
            <h1 className="principal-title-login">Acesso</h1>
            <LoginTextField
              type="text"
              label="Usuário"
              variant="outlined"
              sx={{width: '50%', borderRadius: '20px'}}
              onChange={(text) => {
                console.log(text.target.value);
                setStateValidationEmail(text.target.value);
              }}
            />
            <LoginTextField
              type="password"
              label="Senha"
              variant="outlined"
              sx={{width: '50%'}}
              onChange={(text) => {
                console.log(text.target.value);
                setStateValidationCPF(text.target.value);
              }}
            />
            <span className="span-form-login">Esqueceu sua senha?</span>
            <LoginButton
              variant="outlined"
              sx={{ width: "35%" }}
              onClick={() => {
                handleLogin();
              }}
            >
              Entrar
            </LoginButton>
          </div>
        </div>
      </div>
    </div>
  );
}
