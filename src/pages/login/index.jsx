import { useState } from "react";
import "./style.css";
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
      // .then((data) => {
      //   data.map((item, index) => {
      //     tempArray.push({
      //       email: data[index].email,
      //       cpf: data[index].cpf,
      //     });
      //   });
      //   console.log(data);
      // });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  return (
    <div className="login-container">
      <form action="" className="login-form">
        <h1>Acesso</h1>
        <label>Usuário</label>
        <input
          type="text"
          name="usuario"
          onChange={(text) => {
            console.log(text.target.value);
            setStateValidationEmail(text.target.value);
          }}
        />
        <label>Senha</label>
        <input
          type="password"
          name="senha"
          onChange={(text) => {
            console.log(text.target.value);
            setStateValidationCPF(text.target.value);
          }}
        />
        <span>Esqueceu sua senha?</span>
        <button
          type="button"
          onClick={() => {
            handleLogin();
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
