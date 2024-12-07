import "./style.css";
import React, { useState } from "react";

import {
  Box,
  CircularProgress,
  InputAdornment,
  MenuItem,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";

import DataGridForDisciplinas from "../../../components/dataGrids/dataGridForDisciplinas/index";
import { CustomTheme } from "../../../assets/colorsPallete/colorsPallete";
import { CustomTextField } from "../../../components/textFields/customTextField";
import { SubmitButton } from "../../../components/buttons/submitButton";
import { BackButton } from "../../../components/buttons/backButton";
import { SearchButton } from "../../../components/buttons/searchButton";
import Swal from "sweetalert2";
import DataGridForFuncionarios from "../../../components/dataGrids/dataGridForFuncionarios";

export default function ProfessorPorDisciplina() {
  

  const columnsForProfessorPorDisciplina = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "nome",
      headerName: "Nome",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 4,
    },
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-39%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };
  const [stateDisciplinaArray, setStateDisciplinaArray] = useState([]);
  const [stateDisciplinaId, setStateDisciplinaId] = useState();
  const [stateGetDisciplinaLoading, setStateGetDisciplinaLoading] =
    useState(false);
  const tempDisciplinaArray = [];

  const handleGetDisciplina = async () => {
    setStateGetDisciplinaLoading(true);
    const urlToGetDisciplina = `https://vb-gepy-backend-web.onrender.com/disciplina`;

    try {
      const response = await fetch(urlToGetDisciplina);
      const data = await response.json();

      data.map((item, index) => {
        tempDisciplinaArray.push({
          id: item.id,
          nome: item.nome,
        });
      });

      setStateDisciplinaArray(tempDisciplinaArray);
      console.log(stateDisciplinaArray);
    } catch (err) {
      console.error("Erro ao buscar disciplinas:", err);
      Swal.fire({
        position: "top-right",
        icon: "error",
        text: "Erro ao buscar disciplinas!",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setStateGetDisciplinaLoading(false); // Desativa o estado de loading
    }
  };

  const [stateFuncionarioArray, setStateFuncionarioArray] = useState([]);
  const [stateFuncionarioId, setStateFuncionarioId] = useState();
  const [stateGetFuncionarioLoading, setStateGetFuncionarioLoading] =
    useState(false);
  const tempFuncionarioArray = [];

  const handleGetFuncionario = async () => {
    setStateGetFuncionarioLoading(true);
    const urlToGetFuncionario = `https://vb-gepy-backend-web.onrender.com/funcionario`;

    try {
      const response = await fetch(urlToGetFuncionario);
      const data = await response.json();

      data.map((item, index) => {
        tempFuncionarioArray.push({
          id: item.id,
          nome: item.nomeCompleto,
        });
      });

      setStateFuncionarioArray(tempFuncionarioArray);
      console.log(stateFuncionarioArray);
    } catch (err) {
      console.error("Erro ao buscar Funcionarios:", err);
      Swal.fire({
        position: "top-right",
        icon: "error",
        text: "Erro ao buscar Funcionarios!",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setStateGetFuncionarioLoading(false); // Desativa o estado de loading
    }
  };

  const [stateOpenModal, setStateOpenModal] = useState(false);
  const handleCloseModal = () => {
    setStateOpenModal(false);
  };

  const [stateInsertNewLinkLoading, setStateInsertNewLinkLoading] = useState();

  const objectProfessorPorDisciplinaData = {
    professor: {
      id: stateFuncionarioId,
    },
    disciplina: {
      id: stateDisciplinaId,
    },
  };

  const handleInsertProfessorPorDisciplina = async () => {
    setStateInsertNewLinkLoading(true);
    const urlToInsertProfessorByDisciplina = `https://vb-gepy-backend-web.onrender.com/professor-disciplina`;

    try {
      await fetch(urlToInsertProfessorByDisciplina, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objectProfessorPorDisciplinaData),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (
            data.message === "Professor associado a disciplina com sucesso!"
          ) {
            handleCloseModal();

            Swal.fire({
              position: "center",
              icon: "success",
              text: data.message,
              showConfirmButton: false,
              timer: 1800,
            });
          } else {
            handleCloseModal();

            Swal.fire({
              position: "center",
              icon: "error",
              text: data.message,
              showConfirmButton: false,
              timer: 1800,
            });
          }
        });
    } catch (err) {
      console.error("Erro ao buscar Funcionarios:", err);
      Swal.fire({
        position: "top-right",
        icon: "error",
        text: "Erro ao buscar Funcionarios!",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setStateInsertNewLinkLoading(false); // Desativa o estado de loading
    }
  };
  const [stateOpenListModal, setStateOpenListModal] = useState(false);
  const handleCloseListModal = () => {
    setStateOpenListModal(false);
  };
  const [stateGetAllProfessorLoading, setStateGetAllProfessorLoading] =
    useState(false);
  const tempProfessorDisciplinaArray = [];
  const [stateProfessorDisciplinaArray, setStateProfessorDisciplinaArray] =
    useState([]);

  const handleGetProfessorOfDisciplina = async () => {
    setStateOpenListModal(true);
    setStateGetAllProfessorLoading(true);
    const urlToGetFuncionario = `https://vb-gepy-backend-web.onrender.com/professor-disciplina/buscar/${stateDisciplinaId}`;

    try {
      await fetch(urlToGetFuncionario)
      .then((response) => {
        return response.json()
      }).then((data) => {
        // Ajuste conforme a estrutura real
        data.map((item, index) => {
          tempProfessorDisciplinaArray.push({
            id: item.id,
            nome: item.professor.nomeCompleto,
          });
        });
      });      
      setStateProfessorDisciplinaArray(tempProfessorDisciplinaArray);
      console.log(stateProfessorDisciplinaArray);
    } catch (err) {
      console.error("Erro ao buscar Funcionarios:", err);
      Swal.fire({
        position: "top-right",
        icon: "error",
        text: "Erro ao buscar Funcionarios!",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setStateGetAllProfessorLoading(false); // Desativa o estado de loading
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "nome",
      headerName: "Disciplina",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 4,
    },
    {
      field: "actions",
      headerName: "Ações",
      headerAlign: "center",
      align: "center",
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <>
          <Tooltip
            title="Vincular professor a disciplina"
            enterDelay={500}
            leaveDelay={200}
            arrow
          >
            <IconButton
              sx={{ color: CustomTheme.palette.primary.light }}
              onClick={() => {
                setStateOpenModal(true);
                setStateDisciplinaId(params.row.id);
              }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Listar professores vinculados a turma"
            enterDelay={500}
            leaveDelay={200}
            arrow
          >
            <IconButton
              sx={{
                color: CustomTheme.palette.secondary.main,
                outline: "none",
              }}
              onClick={() => {
                //handleFillModalWithRowData(params.row);
                handleGetProfessorOfDisciplina()
                handleGetDisciplina()
                setStateDisciplinaId(params.row.id)
                console.log(params.row.id);
              }}
            >
              <ListAltIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <div className="professor-por-disciplina-content">
      <Box sx={{ height: "80%", width: "100%" }}>
        <div className="professor-por-disciplina-content-top">
          <Typography id="modal-title" variant="h6" component="h2">
            Vincular Professores a Disciplina
          </Typography>
          <SearchButton
            variant="outlined"
            startIcon={
              stateGetDisciplinaLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <SearchIcon />
              )
            }
            onClick={handleGetDisciplina}
            sx={{ width: "100%" }}
          >
            {stateGetDisciplinaLoading
              ? "Carregando..."
              : "Pesquisar Disciplinas"}
          </SearchButton>
        </div>

        <Modal
          open={stateOpenModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          sx={{
            backdropFilter: "blur(3px)", // Efeito de desfoque no fundo
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escurecido com opacidade
          }}
        >
          <Box sx={style}>
            <div className="professor-por-disciplina-modal-content">
              <Typography
                id="professor-por-disciplina-modal-content-title"
                variant="h6"
                component="h2"
              >
                Selecione o Professor a ser vinculado
              </Typography>
              <div className="professor-por-disciplina-modal-content-top">
                <div className="professor-por-disciplina-modal-content-top-left">
                  <CustomTextField
                    disabled={true}
                    label="Selecione a Disciplina"
                    variant="outlined"
                    select
                    value={stateDisciplinaId}
                    onFocus={() => {
                      handleGetDisciplina();
                    }}
                    onChange={(e) => {
                      setStateDisciplinaId(e.target.value);
                    }}
                    type="text"
                    sx={{ width: "100%" }}
                    InputProps={{
                      endAdornment: stateGetDisciplinaLoading && (
                        <InputAdornment position="start">
                          <CircularProgress
                            sx={{ marginRight: "10px" }}
                            size={20}
                          />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {stateDisciplinaArray.map((option, index) => (
                      <MenuItem key={option.index} value={option.id}>
                        {option.nome}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                </div>
                <div className="professor-por-disciplina-modal-content-top-right">
                  <CustomTextField
                    label="Selecione o Funcionario"
                    variant="outlined"
                    select
                    value={stateFuncionarioId}
                    onFocus={() => {
                      handleGetFuncionario();
                    }}
                    onChange={(e) => {
                      setStateFuncionarioId(e.target.value);
                    }}
                    type="text"
                    sx={{ width: "100%" }}
                    InputProps={{
                      endAdornment: stateGetFuncionarioLoading && (
                        <InputAdornment position="start">
                          <CircularProgress
                            sx={{ marginRight: "10px" }}
                            size={20}
                          />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {stateFuncionarioArray.map((option, index) => (
                      <MenuItem key={option.index} value={option.id}>
                        {option.nome}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                </div>
              </div>
              <div className="professor-por-disciplina-modal-content-bottom">
                <SubmitButton
                  onClick={handleInsertProfessorPorDisciplina}
                  sx={{ mt: 2 }}
                  variant="outlined"
                  startIcon={
                    stateInsertNewLinkLoading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <SearchIcon />
                    )
                  }
                >
                  {stateInsertNewLinkLoading ? "Carregando" : "Gravar"}
                </SubmitButton>
                <BackButton
                  onClick={handleCloseModal}
                  startIcon={<ArrowBackIcon />}
                  sx={{ mt: 2 }}
                  variant="outlined"
                >
                  Voltar
                </BackButton>
              </div>
            </div>
          </Box>
        </Modal>

        <Modal
          open={stateOpenListModal}
          onClose={handleCloseListModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          sx={{
            backdropFilter: "blur(3px)", // Efeito de desfoque no fundo
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escurecido com opacidade
          }}
        >
          <Box sx={style}>
            <div className="professor-por-disciplina-modal-content">
              <Typography
                id="professor-por-disciplina-modal-content-title"
                variant="h6"
                component="h2"
              >
                Professores vinculados a Disciplina
              </Typography>
              <div className="professor-por-disciplina-modal-content-top">
                <div className="professor-por-disciplina-modal-content-top-left">
                  <CustomTextField
                    disabled={true}
                    label="Selecione a Disciplina"
                    variant="outlined"
                    select
                    value={stateDisciplinaId}
                    onFocus={() => {
                      handleGetDisciplina();
                    }}
                    onChange={(e) => {
                      setStateDisciplinaId(e.target.value);
                    }}
                    type="text"
                    sx={{ width: "100%" }}
                    InputProps={{
                      endAdornment: stateGetDisciplinaLoading && (
                        <InputAdornment position="start">
                          <CircularProgress
                            sx={{ marginRight: "10px" }}
                            size={20}
                          />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {stateDisciplinaArray.map((option, index) => (
                      <MenuItem key={option.index} value={option.id}>
                        {option.nome}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                </div>
                <div className="professor-por-disciplina-modal-content-top-right">
                  <DataGridForFuncionarios
                    rows={stateProfessorDisciplinaArray}
                    columns={columnsForProfessorPorDisciplina}
                  />
                </div>
              </div>
              <div className="professor-por-disciplina-modal-content-bottom">
                <BackButton
                  onClick={handleCloseListModal}
                  sx={{ mt: 2 }}
                  variant="outlined"
                  startIcon={
                    stateGetAllProfessorLoading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <ArrowBackIcon />
                    )
                  }
                >
                  {stateGetAllProfessorLoading ? "Carregando" : "Voltar"}
                </BackButton>
              </div>
            </div>
          </Box>
        </Modal>
        <div className="professor-por-disciplina-content-midle">
          <DataGridForDisciplinas
            rows={stateDisciplinaArray}
            columns={columns}
          />
        </div>
      </Box>
    </div>
  );
}
