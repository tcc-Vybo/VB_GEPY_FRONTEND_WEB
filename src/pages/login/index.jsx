import React, { useContext, useState } from "react";
import "./loginStyle.css";
import LogoGepy from "../../assets/Logo.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { LoginButton } from "../../components/buttons/loginButton/index";
import { LoginTextField } from "../../components/textFields/loginTextField/index";
import { UserContext } from "../../contexts/UserContext";
import { Tooltip } from "@mui/material";

export default function Login() {
  const navigate = useNavigate();

  const [stateValidationEmail, setStateValidationEmail] = useState();
  const [stateValidationCPF, setStateValidationCPF] = useState();

  const { funcionarioId ,setFuncionarioId, setCargoId, setNomeFuncionario } = useContext(UserContext);

  const [stateLoginLoading, setStateLoginLoading] = useState(false)

  const handleLogin = async () => {
    setStateLoginLoading(true)
    const urlToGetEmployee = `https://vb-gepy-backend-web.onrender.com/funcionario/login/${stateValidationCPF}/${stateValidationEmail}`;
    const tempArray = [];
    try {
      const response = await fetch(urlToGetEmployee);
      const data = await response.json();
  
      if (data && data.id) {
        const nomeFuncionarioSplit = data.nomeCompleto.split(" ");
        const nomeFuncionatioSlice = nomeFuncionarioSplit.slice(0, 2).join(" ");
        setNomeFuncionario(nomeFuncionatioSlice);
        setFuncionarioId(data.id);
  
        // Passa o ID do funcionário diretamente para a próxima função
        await handGetPerfilVinculo(data.id);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "ERRO!",
          text: "Funcionário não encontrado!",
          showConfirmButton: false,
          timer: 1800,
        });
      }
    } catch (err) {
      console.error("Erro ao realizar login:", err);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "ERRO!",
        text: "Erro ao realizar login!",
        showConfirmButton: false,
        timer: 1800,
      });
    }
  };

  const handGetPerfilVinculo = async (funcionarioIdToSearch) => {
    const urlToGetCargo = `https://vb-gepy-backend-web.onrender.com/perfil-vinculo/buscarVinculoByFuncionario/${funcionarioIdToSearch}`;
    const tempArray = [];
    try {
      await fetch(urlToGetCargo).then((response) => {
        console.log("Response received:", response);
        if (response.status === 200) {
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
      }).then((data) => {
        setCargoId(data[0].cargo.id)
        console.log(data[0].cargo)
        console.log(data[0].cargo.id)
        console.log(data[0].cargo.nome)
      });
    } catch (err) {
      console.log("ERRO: ", err);
    }finally{
      setStateLoginLoading(false)
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
              sx={{ width: "50%", borderRadius: "20px" }}
              onChange={(text) => {
                console.log(text.target.value);
                setStateValidationEmail(text.target.value);
              }}
            />
            <LoginTextField
              type="password"
              label="Senha"
              variant="outlined"
              sx={{ width: "50%" }}
              onChange={(text) => {
                console.log(text.target.value);
                setStateValidationCPF(text.target.value);
              }}
            />
            <Tooltip
            title="Sua senha é o seu CPF"
            enterDelay={200}
            leaveDelay={200}
            arrow
          >
            <span className="span-form-login">Esqueceu sua senha?</span>
          </Tooltip>
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
