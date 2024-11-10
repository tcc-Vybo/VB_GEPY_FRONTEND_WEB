import "./style.css";

import { MenuItem, Typography } from "@mui/material";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

import { BackButton } from "../../components/buttons/backButton";
import { SearchButton } from "../../components/buttons/searchButton";
import { SubmitButton } from "../../components/buttons/submitButton/index";
import {
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
} from "../../components/customAccordion/index";

import { CustomTextField } from "../../components/textFields/customTextField";

import Swal from "sweetalert2";

const currentDate = new Date();
const formatedDate = currentDate.toLocaleDateString();
const fomtatedHour = currentDate.toLocaleTimeString()


export default function Recados() {
  const [stateNewTitulo, setStateNewTitulo] = useState(""); // Para String titulo
  const [stateNewDescricao, setStateNewDescricao] = useState(""); // Para String descricao
  const [stateNewDataDeEnvio, setStateNewDataDeEnvio] = useState(formatedDate); // Para String data
  const [stateNewDataMarcada, setStateNewDataMarcada] = useState("");
  const [stateNewHora, setStateNewHora] = useState(fomtatedHour); // Para String hora
  const [stateNewRemetente, setStateNewRemetente] = useState(0); // Para FuncionarioEntity remetente
  const [stateNewDestinatario, setStateNewDestinatario] = useState(0); // Para TurmaEntity destinatario
  const [stateNewStatus, setStateNewStatus] = useState("ENVIADO"); // Para String status
  const [stateNewTipoRecado, setStateNewTipoRecado] = useState(0); // Para TipoRecadoEntity tipoRecado

  const [stateSearchTitulo, setStateSearchTitulo] = useState("");
  const [stateSearchDataDeEnvio, setStateSearchDataDeEnvio] = useState("");
  const [stateSearchRemetente, setStateSearchRemetente] = useState("");
  const [stateSearchDescricao, setStateSearchDescricao] = useState("");
  const [stateSearchDestinatario, setStateSearchDestinatario] = useState("");
  const [stateSearchTipoRecado, setStateSearchTipoRecado] = useState("");

  const [statePanel1IsOpen, setStatePanel1IsOpen] = useState(true);
  const [statePanel2IsOpen, setStatePanel2IsOpen] = useState(true);

  const objectRecadoTurmaData = {
    titulo: stateNewTitulo,
    descricao: stateNewDescricao,
    data: stateNewDataMarcada,
    hora: stateNewHora,
    dataDeEnvio: stateNewDataDeEnvio,
    remetente: {
      id: stateNewRemetente,
    },
    destinatario: {
      id: stateNewDestinatario,
    },
    status: stateNewStatus,
    tipoRecado: {
      id: stateNewTipoRecado,
    },
  };

  const handleChange1 = () => (event, isExpanded) =>
    setStatePanel1IsOpen(isExpanded);

  const handleChange2 = () => (event, isExpanded) =>
    setStatePanel2IsOpen(isExpanded);

  const tempFuncionarioArray = [];
  const [stateFuncionarioArray, setStateFuncionarioArray] = useState([]);

  const handleGetFuncionario = () => {
    const urlToGetFuncionario = `https://vb-gepy-backend-web.onrender.com/funcionario`;

    try {
      fetch(urlToGetFuncionario)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
            tempFuncionarioArray.push({
              id: data[index].id,
              nome: data[index].nomeCompleto,
            });
          });
          setStateFuncionarioArray(tempFuncionarioArray);
          console.log(stateFuncionarioArray);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  const tempTurmaArray = [];
  const [stateTurmaArray, setStateTurmaArray] = useState([]);

  const handleGetTurma = () => {
    const urlToGetTurma = `https://vb-gepy-backend-web.onrender.com/turma`;

    try {
      fetch(urlToGetTurma)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
            tempTurmaArray.push({
              id: data[index].id,
              nome: data[index].nome,
            });
          });
          setStateTurmaArray(tempTurmaArray);
          console.log(stateTurmaArray);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  const tempTipoRecadoArray = [];
  const [stateTipoRecadoArray, setStateTipoRecadoArray] = useState([]);

  const handleGetTipoRecado = () => {
    const urlToGetTipoRecado = `https://vb-gepy-backend-web.onrender.com/tipo-recado`;

    try {
      fetch(urlToGetTipoRecado)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
            tempTipoRecadoArray.push({
              id: data[index].id,
              nome: data[index].nome,
            });
          });
          setStateTipoRecadoArray(tempTipoRecadoArray);
          console.log(stateTipoRecadoArray);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  const handleInsertNewRecado = () => {
    const urlInsertNewStudent = `https://vb-gepy-backend-web.onrender.com/recado-turma`;

    fetch(urlInsertNewStudent, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectRecadoTurmaData),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.message === "Recado postado com sucesso!") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sucesso!",
            text: "Aluno cadastado com sucesso!!",
            showConfirmButton: false,
            timer: 1800,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "ERRO!",
            text: "Erro postar Recado!!",
            showConfirmButton: false,
            timer: 1800,
          });
        }
        console.log("Success:", data);
      });
  };

  const handleSearchRecado = () => {
    console.log("OPA");
  };

  const handleClear = () => {
    setStateNewTitulo("");
    setStateNewTitulo("");
    setStateNewDescricao("");
    setStateNewDataDeEnvio("");
    setStateNewRemetente("");
    setStateNewDestinatario("");
    setStateNewStatus("");
    setStateNewTipoRecado("");
  };

  return (
    <div className="cadastro-container">
      <form method="POST">
        <CustomAccordion
          expanded={statePanel1IsOpen}
          onChange={handleChange1()}
        >
          <CustomAccordionSummary
            expandIcon={
              statePanel1IsOpen === true ? <RemoveIcon /> : <AddIcon />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{"Inserir Recado"}</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <div className="recados-content">
              <div className="recados-content-top">
                <CustomTextField
                  label="Título"
                  value={stateNewTitulo}
                  onChange={(e) => {
                    setStateNewTitulo(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "60%" }}
                />
                <CustomTextField
                  label="Data Marcada"
                  value={stateNewDataMarcada}
                  onChange={(e) => {
                    setStateNewDataMarcada(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "20%" }}
                />
                <CustomTextField
                  label="Data de Envio"
                  variant="outlined"
                  value={stateNewDataDeEnvio}
                  onFocus={() => {
                    if (formatedDate === currentDate.toLocaleDateString()) {
                      setStateNewDataDeEnvio(formatedDate);
                    } else {
                      setStateNewDataDeEnvio("ERRO!");
                    }
                  }}
                  type="text"
                  sx={{ width: "20%" }}
                />
                <CustomTextField
                  label="Remetente"
                  variant="outlined"
                  select
                  value={stateNewRemetente}
                  onFocus={() => {
                    handleGetFuncionario();
                  }}
                  onChange={(e) => {
                    setStateNewRemetente(e.target.value);
                    console.log(e.target.value)
                  }}
                  type="text"
                  sx={{ width: "50%" }}
                >
                  {stateFuncionarioArray.map((option, index) => (
                    <MenuItem key={option.index} value={option.id}>
                      {option.nome}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </div>
              <div className="recados-content-middle">
                <CustomTextField
                  label="Descrição"
                  variant="outlined"
                  value={stateNewDescricao}
                  onChange={(e) => {
                    setStateNewDescricao(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "60%" }}
                />
                <CustomTextField
                  label="Destinatario"
                  variant="outlined"
                  select
                  value={stateNewDestinatario}
                  onFocus={() => {
                    handleGetTurma();
                  }}
                  onChange={(e) => {
                    setStateNewDestinatario(e.target.value);
                    console.log(e.target.value)
                  }}
                  type="text"
                  sx={{ width: "20%" }}
                >
                  {stateTurmaArray.map((option, index) => (
                    <MenuItem key={option.index} value={option.id}>
                      {option.nome}
                    </MenuItem>
                  ))}
                </CustomTextField>
                <CustomTextField
                  label="Tipo Recado"
                  variant="outlined"
                  select
                  value={stateNewTipoRecado}
                  onFocus={() => {
                    handleGetTipoRecado();
                  }}
                  onChange={(e) => {
                    setStateNewTipoRecado(e.target.value);
                    console.log(e.target.value)
                  }}
                  type="text"
                  sx={{ width: "20%" }}
                >
                  {stateTipoRecadoArray.map((option, index) => (
                    <MenuItem key={option.index} value={option.id}>
                      {option.nome}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </div>
              <div className="recados-content-bottom">
                <SubmitButton
                  variant="outlined"
                  endIcon={<SaveOutlinedIcon />}
                  onClick={handleInsertNewRecado}
                >
                  Gravar
                </SubmitButton>
                <BackButton
                  variant="outlined"
                  endIcon={<CleaningServicesIcon />}
                  onClick={handleClear}
                >
                  Limpar
                </BackButton>
              </div>
            </div>
          </CustomAccordionDetails>
        </CustomAccordion>
      </form>

      <form method="GET">
        <CustomAccordion
          expanded={statePanel2IsOpen}
          onChange={handleChange2()}
        >
          <CustomAccordionSummary
            expandIcon={
              statePanel2IsOpen === true ? <RemoveIcon /> : <AddIcon />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>{"Buscar Recados"}</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <div className="recados-content">
              <div className="recados-content-top">
                <CustomTextField
                  label="Título"
                  value={stateSearchTitulo}
                  onChange={(e) => {
                    setStateSearchTitulo(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "60%" }}
                />
                <CustomTextField
                  label="Data"
                  variant="outlined"
                  value={stateSearchDataDeEnvio}
                  onFocus={() => {
                    if (formatedDate === currentDate.toLocaleDateString()) {
                      setStateSearchDataDeEnvio(formatedDate);
                    } else {
                      setStateSearchDataDeEnvio("ERRO!");
                    }
                  }}
                  type="text"
                  sx={{ width: "20%" }}
                />
                <CustomTextField
                  label="Remetente"
                  variant="outlined"
                  select
                  value={stateSearchRemetente}
                  onFocus={() => {
                    handleGetFuncionario();
                  }}
                  onChange={(e) => {
                    setStateSearchRemetente(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "50%" }}
                >
                  {stateFuncionarioArray.map((option, index) => (
                    <MenuItem key={option.index} value={option.id}>
                      {option.nome}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </div>
              <div className="recados-content-middle">
                <CustomTextField
                  label="Descrição"
                  variant="outlined"
                  value={stateSearchDescricao}
                  onChange={(e) => {
                    setStateSearchDescricao(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "60%" }}
                />
                <CustomTextField
                  label="Destinatario"
                  variant="outlined"
                  select
                  value={stateSearchDestinatario}
                  onFocus={() => {
                    handleGetTurma();
                  }}
                  onChange={(e) => {
                    setStateSearchDestinatario(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "20%" }}
                >
                  {stateTurmaArray.map((option, index) => (
                    <MenuItem key={option.index} value={option.id}>
                      {option.nome}
                    </MenuItem>
                  ))}
                </CustomTextField>
                <CustomTextField
                  label="Tipo Recado"
                  variant="outlined"
                  select
                  value={stateSearchTipoRecado}
                  onFocus={() => {
                    handleGetTipoRecado();
                  }}
                  onChange={(e) => {
                    setStateSearchTipoRecado(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "20%" }}
                >
                  {stateTipoRecadoArray.map((option, index) => (
                    <MenuItem key={option.index} value={option.id}>
                      {option.nome}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </div>
              <div className="recados-content-bottom">
                <SearchButton
                  variant="outlined"
                  endIcon={<SearchIcon />}
                  onClick={handleSearchRecado}
                >
                  Pesquisar
                </SearchButton>
              </div>
            </div>
          </CustomAccordionDetails>
        </CustomAccordion>
      </form>
    </div>
  );
}
