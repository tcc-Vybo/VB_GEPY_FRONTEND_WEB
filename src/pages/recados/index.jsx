import "./style.css";

import { MenuItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

import { ClearButton } from "../../components/buttons/clearButton/index.js";
import { SearchButton } from "../../components/buttons/searchButton";
import { SubmitButton } from "../../components/buttons/submitButton/index";
import {
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
} from "../../components/customAccordion/index";

import { CustomTextField } from "../../components/textFields/customTextField";

import Swal from "sweetalert2";

import { format, parse } from "date-fns";
import FloatingModal from "../../components/customModal/index.jsx";

const currentDate = new Date();
const formatedDate = format(currentDate, "dd/MM/yyyy");
const formatedDateForInput = format(currentDate, "yyyy-MM-dd");
const formatedHour = currentDate.toLocaleTimeString();
const fomtatedHour = currentDate.toLocaleTimeString();

export default function Recados() {
  //STATES PARA INSERIR NOVO RECADO
  const [stateNewTitulo, setStateNewTitulo] = useState("");
  const [stateNewDescricao, setStateNewDescricao] = useState("");
  const [stateNewDataDeEnvio, setStateNewDataDeEnvio] = useState(formatedDate);
  const [stateNewDataDeEnvioFormatted, setStateNewDataDeEnvioFormatted] =
    useState(formatedDate);
  const [stateNewDataMarcada, setStateNewDataMarcada] =
    useState(formatedDateForInput);
  const [stateNewDataMarcadaFormatted, setStateNewDataMarcadaFormatted] =
    useState(formatedDate);
  const [stateNewHora, setStateNewHora] = useState(fomtatedHour);
  const [stateNewRemetente, setStateNewRemetente] = useState(0);
  const [stateNewDestinatario, setStateNewDestinatario] = useState(0);
  const [stateNewStatus, setStateNewStatus] = useState("ENVIADO");
  const [stateNewTipoRecado, setStateNewTipoRecado] = useState(0);

  //-------------------------------------------------------------------------------------

  //STATES PARA BUSCA
  const [stateSearchDataMarcada, setStateSearchDataMarcada] = useState("");
  const [stateSearchDataMarcadaFormatted, setStateSearchDataMarcadaFormatted] =
    useState(formatedDate);
  const [stateSearchDataDeEnvio, setStateSearchDataDeEnvio] = useState("");
  const [stateSearchDataDeEnvioFormatted, setStateSearchDataDeEnvioFormatted] =
    useState(formatedDate);
  const [stateSearchRemetente, setStateSearchRemetente] = useState("");
  const [stateSearchDestinatario, setStateSearchDestinatario] = useState("");
  const [stateSearchTipoRecado, setStateSearchTipoRecado] = useState("");

  //-------------------------------------------------------------------------------------

  //ARRAY QUE RECEBE OS RECADOS LISTADOS
  const [stateSearchRecadosWithFilters, setStateSearchRecadosWithFilters] =
    useState([]);

  //-------------------------------------------------------------------------------------

  //STATES QUE CONTROLAM A ABERTURA E O FECHAMENTO DOS ACCORDIONS
  const [statePanel1IsOpen, setStatePanel1IsOpen] = useState(true);
  const [statePanel2IsOpen, setStatePanel2IsOpen] = useState(true);

  //-------------------------------------------------------------------------------------

  //OBJETO USADO PARA INSERIR O RECADO
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

  //-------------------------------------------------------------------------------------

  //MANIPULADORES DE DATA SEPARANDO O QUE TEM QUE SER MOSTRADO DO QUE TEM QUE SER RECEBIDO PELO BACK
  const handleDataMarcadaChange = (e) => {
    const selectedDate = parse(e.target.value, "yyyy-MM-dd", new Date());
    setStateNewDataMarcada(e.target.value);
    setStateNewDataMarcadaFormatted(format(selectedDate, "dd/MM/yyyy"));
  };
  const handleSearchDataMarcadaChange = (e) => {
    const selectedDate = parse(e.target.value, "yyyy-MM-dd", new Date());
    setStateSearchDataMarcada(e.target.value);
    setStateSearchDataMarcadaFormatted(format(selectedDate, "dd/MM/yyyy"));
  };
  const handleDataDeEnvioChange = (e) => {
    const selectedDate = parse(e.target.value, "yyyy-MM-dd", new Date());
    setStateNewDataDeEnvio(e.target.value);
    setStateNewDataDeEnvioFormatted(format(selectedDate, "dd/MM/yyyy"));
  };
  const handleSearchDataDeEnvioChange = (e) => {
    const selectedDate = parse(e.target.value, "yyyy-MM-dd", new Date());
    setStateSearchDataDeEnvio(e.target.value);
    setStateSearchDataDeEnvioFormatted(format(selectedDate, "dd/MM/yyyy"));
  };

  //-------------------------------------------------------------------------------------

  //FUNÇÕES QUE ALTERAM O STATUS DE ABERTO E FECHADO DOS ACCORDIONS
  const handleChange1 = () => (event, isExpanded) =>
    setStatePanel1IsOpen(isExpanded);
  const handleChange2 = () => (event, isExpanded) =>
    setStatePanel2IsOpen(isExpanded);

  //-------------------------------------------------------------------------------------

  //REQUISIÇÃO PARA LISTAR OS PROFESSORES --- COMO REMETENTES
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

  //-------------------------------------------------------------------------------------

  //REQUISIÇÃO PARA LISTAR AS TURMAS --- COMO DESTINATÁRIOS
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

  //-------------------------------------------------------------------------------------

  //REQUISIÇÃO PARA LISTAR OS TIPOS DE RECADOS
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

  //-------------------------------------------------------------------------------------

  //REQUISIÇÃO PARA INSERIR OS RECADOS
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

  //-------------------------------------------------------------------------------------

  //REQUISIÇÃO PARA BUSCAR OS RECADOS

  const [stateCallUseEffect, setStateCallUseEffect] = useState(false);

  const tempSearchRecadosWithFilters = [];
  const handleSearchRecado = () => {
    const urlSearchRecados = `https://vb-gepy-backend-web.onrender.com/recado-turma/buscar?dataMarcada=${stateSearchDataMarcadaFormatted}&dataDeEnvio=${stateSearchDataDeEnvioFormatted}&remetente=${stateSearchRemetente}&destinatario=${stateSearchDestinatario}&tipoRecado=${stateSearchTipoRecado}`;

    try {
      fetch(urlSearchRecados)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
            tempSearchRecadosWithFilters.push({
              id: data[index].id,
              titulo: data[index].titulo,
            });
          });
          setStateSearchRecadosWithFilters(tempSearchRecadosWithFilters);
          console.log(stateSearchRecadosWithFilters);
          handleClearSearchFields();
          setStateCallUseEffect(true);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  useEffect(() => {
    if (stateCallUseEffect && stateSearchRecadosWithFilters.length > 0) {
      handleOpen(); // Abre o modal
      setStateCallUseEffect(false); // Redefine o estado para evitar re-execução
    }
  }, [stateCallUseEffect, stateSearchRecadosWithFilters]);

  //-------------------------------------------------------------------------------------

  //FUNÇÃO PARA LIMPAR AS FIELDS QUE INSEREM OS RECADOS
  const handleClear = () => {
    setStateNewTitulo("");
    setStateNewTitulo("");
    setStateNewDescricao("");
    setStateNewDataMarcada("");
    setStateNewDataDeEnvio("");
    setStateNewRemetente("");
    setStateNewDestinatario("");
    setStateNewStatus("");
    setStateNewTipoRecado("");
  };

  //-------------------------------------------------------------------------------------

  //FUNÇÃO PARA LIMPAR AS FIELD QUE BUSCAM OS RECADOS
  const handleClearSearchFields = () => {
    setStateSearchDataMarcada("");
    setStateSearchDataMarcadaFormatted("");
    setStateSearchDataDeEnvio("");
    setStateSearchDataDeEnvioFormatted("");
    setStateSearchRemetente("");
    setStateSearchDestinatario("");
    setStateSearchTipoRecado("");
  };

  //-------------------------------------------------------------------------------------

  //MODAL
  const [open, setOpen] = useState(false);

  // Funções para abrir e fechar o modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //INÍCIO DO FRONT
  return (
    <div className="cadastro-container">
      {/* 
      
  //-------------------------------------------------------------------------------------

      FORM PARA INSERIR NOVOS RECADOS --- 
      OBS: PELO FATO DA REQUISIÇÃO ESTAR SENDO CHAMADA POR UM BOTÃO POSSÍVELMENTE O USO DE UM FORM É INÚTIL 
      */}
      <form method="POST">
        {/* 
      
  //-------------------------------------------------------------------------------------
  
      ACCORDION QUE UNE AS FIELDS PARA INSERIR OS RECADOS
      */}

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
                {/* COMENTÁRIO */}
                <CustomTextField
                  label="Data Marcada"
                  value={stateNewDataMarcada} // Formato yyyy-MM-dd
                  onChange={handleDataMarcadaChange}
                  type="date"
                  sx={{ width: "20%" }}
                  focused={true}
                  format=""
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
                    console.log(e.target.value);
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
                    console.log(e.target.value);
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
                    console.log(e.target.value);
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
                <ClearButton
                  variant="outlined"
                  endIcon={<CleaningServicesIcon />}
                  onClick={handleClear}
                >
                  Limpar
                </ClearButton>
              </div>
            </div>
          </CustomAccordionDetails>
        </CustomAccordion>
      </form>

      {/* 
      
  //-------------------------------------------------------------------------------------

      FORM PARA BUSCAR OS RECADOS --- 
      OBS: PELO FATO DA REQUISIÇÃO ESTAR SENDO CHAMADA POR UM BOTÃO POSSÍVELMENTE O USO DE UM FORM É INÚTIL 
      */}
      <form method="GET">
        {/* 
      
  //-------------------------------------------------------------------------------------

      ACCORDION QUE UNE AS FIELDS PARA BUSCAR OS RECADOS 
      */}
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
                {/* COMENTÁRIO */}
                <CustomTextField
                  label="Data Marcada"
                  variant="outlined"
                  value={stateSearchDataMarcada} // Formato yyyy-MM-dd
                  onChange={handleSearchDataMarcadaChange}
                  type="date"
                  sx={{ width: "20%" }}
                  focused={true}
                />
                {/* COMENTÁRIO */}
                <CustomTextField
                  label="Data de Envio"
                  variant="outlined"
                  value={stateSearchDataDeEnvio} // Formato yyyy-MM-dd
                  onChange={handleSearchDataDeEnvioChange}
                  type="date"
                  sx={{ width: "20%" }}
                  focused={true}
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
                <FloatingModal
                  open={open}
                  handleClose={handleClose}
                  recadosArray={stateSearchRecadosWithFilters}
                />
              </div>
            </div>
          </CustomAccordionDetails>
        </CustomAccordion>
      </form>
    </div>
  );
}
