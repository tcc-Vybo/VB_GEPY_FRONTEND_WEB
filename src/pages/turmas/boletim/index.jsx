import "./style.css";
import React, { useState } from "react";

import DataGridForFuncionarios from "../../../components/dataGrids/dataGridForFuncionarios/index";
import { SearchButton } from "../../../components/buttons/searchButton";
import { SubmitButton } from "../../../components/buttons/submitButton";
import { BackButton } from "../../../components/buttons/backButton";
import { NewButton } from "../../../components/buttons/newButton";
import { CustomTheme } from "../../../assets/colorsPallete/colorsPallete";
import { CustomTextField } from "../../../components/textFields/customTextField";

import {
  Box,
  MenuItem,
  Modal,
  Typography,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";

export default function Boletim() {
  const [stateSearchTurma, setStateSearchTurma] = useState("");
  const [stateSearchAluno, setStateSerachAluno] = useState("");

  const [stateTurmaArray, setStateTurmaArray] = useState([]);
  const [stateGetTurmaLoading, setStateGetTurmaLoading] = useState(false);

  //ESTE LOADING
  const handleGetTurma = async () => {
    setStateGetTurmaLoading(true);
    const urlToListTurma = `https://vb-gepy-backend-web.onrender.com/turma`;

    try {
      const response = await fetch(urlToListTurma);
      if (!response.ok) {
        throw new Error("Erro ao buscar turmas");
      }
      const data = await response.json();

      const updatedTurmaArray = data.map((item) => ({
        id: item.id,
        nome: item.nome,
      }));

      setStateTurmaArray(updatedTurmaArray); // Atualiza o estado diretamente
    } catch (err) {
      console.error("Erro ao buscar turma:", err);
      Swal.fire({
        position: "top-right",
        icon: "error",
        text: "Erro ao buscar as turmas!",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setStateGetTurmaLoading(false); // Desativa o loading
    }
  };

  const [stateIdOfTurma, setStateIdOfTurma] = useState(0);
  const [stateAlunoOfTurmaArray, setStateAlunoOfTurmaArray] = useState([]);
  const [stateIdOfAlunoToUpdateBoletim, setStateIdOfAlunoToUpdateBoletim] =
    useState(0);
  const [stateGetAlunoOfTurmaLoading, setStateGetAlunoOfTurmaLoading] =
    useState(false);

  const handleGetAlunoOfTurma = async () => {
    setStateGetAlunoOfTurmaLoading(true);
    const urlToListAlunoOfTurma = `https://vb-gepy-backend-web.onrender.com/aluno-turma/buscar/${stateIdOfTurma}`;

    try {
      const response = await fetch(urlToListAlunoOfTurma);
      if (!response.ok) {
        throw new Error("Erro ao buscar alunos");
      }
      const data = await response.json();

      const updatedAlunoOfTurmaArray = data.map((item, index) => ({
        id: item.aluno.id,
        nome: item.aluno.nomeCompleto,
      }));
      setStateIdOfAlunoToUpdateBoletim(updatedAlunoOfTurmaArray.id);
      setStateAlunoOfTurmaArray(updatedAlunoOfTurmaArray);
      console.log(stateAlunoOfTurmaArray);
    } catch (err) {
      console.error("Erro ao buscar alunos:", err);
      Swal.fire({
        position: "top-right",
        icon: "error",
        text: "Erro ao buscar os alunos!",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setStateGetAlunoOfTurmaLoading(false); // Desativa o loading
    }
  };

  const [stateIdOfAluno, setStateIdOfAluno] = useState(0);
  const [stateBoletimAluno, setStateBoletimAluno] = useState([]);
  const [stateLoadingBoletim, setStateLoadingBoletim] = useState(false);

  const handleListBoletimOfAluno = async () => {
    setStateLoadingBoletim(true); // Ativa o estado de loading
    const urlToListBoletimOfAluno = `https://vb-gepy-backend-web.onrender.com/boletim/buscar/byAluno/${stateIdOfAluno}`;

    try {
      if (!stateSearchTurma || !stateSearchAluno) {
        Swal.fire({
          position: "top-right",
          icon: "warning",
          text: "É necessário selecionar o Aluno e a Turma!!",
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      }

      const response = await fetch(urlToListBoletimOfAluno);
      const data = await response.json();
      const tempBoletimArray = [];

      data.map((item, index) => {
        tempBoletimArray.push({
          id: item.id,
          idDisciplina: item.disciplina.id,
          disciplina: item.disciplina.nome,
          notaBim1: item.notaPrimeiroBim,
          notaBim2: item.notaSegundoBim,
          notaBim3: item.notaTerceiroBim,
          notaBim4: item.notaQuartoBim,
          situacao: item.situacao.nome,
        });
        setStateCurrentDisciplinaId(tempBoletimArray[index].idDisciplina);
      });

      setStateBoletimAluno(tempBoletimArray); // Atualiza os dados
      console.log(tempBoletimArray);
    } catch (err) {
      console.error("Erro ao buscar boletim:", err);
      Swal.fire({
        position: "top-right",
        icon: "error",
        text: "Erro ao buscar o boletim do aluno!",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setStateLoadingBoletim(false); // Desativa o estado de loading
    }
  };

  //MODAL
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenValidation = () => {
    if (!stateSearchTurma || !stateSearchAluno) {
      Swal.fire({
        position: "top-right",
        icon: "warning",
        text: "É necessário selecionar o Aluno e a Turma!!",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      setOpen(true);
    }
  };

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

  const [stateNotaPrimeiroBim, setStateNotaPrimeiroBim] = useState(0);
  const [stateNotaSegundoBim, setStateNotaSegundoBim] = useState(0);
  const [stateNotaTerceiroBim, setStateNotaTerceiroBim] = useState(0);
  const [stateNotaQuartoBim, setStateNotaQuartoBim] = useState(0);

  const [stateSituacao, setStateSituacao] = useState(3);

  const objectBoletimData = {
    aluno: {
      id: stateIdOfAluno,
    },
    disciplina: {
      id: stateDisciplinaId,
    },
    notaPrimeiroBim: stateNotaPrimeiroBim,
    faltaPrimeiroBim: 0,
    notaSegundoBim: stateNotaSegundoBim,
    faltaSegundoBim: 0,
    notaTerceiroBim: stateNotaTerceiroBim,
    faltaTerceiroBim: 0,
    notaQuartoBim: stateNotaQuartoBim,
    faltaQuartoBim: 0,
    situacao: {
      id: stateSituacao,
    },
  };

  const handleInsertBoletim = () => {
    const urlToPostBoletim = `https://vb-gepy-backend-web.onrender.com/boletim`;

    try {
      fetch(urlToPostBoletim, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objectBoletimData),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          if (data.message) {
            handleClose();

            Swal.fire({
              position: "center",
              icon: "success",
              text: data.message,
              showConfirmButton: false,
              timer: 1800,
            });
            handleListBoletimOfAluno();
          } else {
            handleClose();

            Swal.fire({
              position: "center",
              icon: "error",
              text: "Erro atualizar Boletim!!",
              showConfirmButton: false,
              timer: 1800,
            });

            handleListBoletimOfAluno();
          }
          console.log("Success:", data);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  const columns = [
    {
      field: "disciplina",
      headerName: "Disciplina",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "notaBim1",
      headerName: "Nota Bimestre 1",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "notaBim2",
      headerName: "Nota Bimestre 2",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "notaBim3",
      headerName: "Nota Bimestre 3",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "notaBim4",
      headerName: "Nota Bimestre 4",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "situacao",
      headerName: "Situação",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 2,
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
          <IconButton
            sx={{ color: CustomTheme.palette.tertiary.main, outline: "none" }}
            onClick={() => {
              handleGetDisciplina();
              handleFillModalWithRowData(params.row);
              setStateBoletimID(params.row.id);
              setStateOpenUpdateModal(true);
              handleCalculoSituacao();
              console.log(params.row.id);
            }}
          >
            <EditIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const [stateOpenUpdateModal, setStateOpenUpdateModal] = useState(false);
  const handleCloseUpdateModal = () => {
    setStateOpenUpdateModal(false);
    handleListBoletimOfAluno();
  };

  const [stateBoletimID, setStateBoletimID] = useState(0);
  const [stateNewNotaPrimeiroBim, setStateNewNotaPrimeiroBim] = useState(0);
  const [stateNewNotaSegundoBim, setStateNewNotaSegundoBim] = useState(0);
  const [stateNewNotaTerceiroBim, setStateNewNotaTerceiroBim] = useState(0);
  const [stateNewNotaQuartoBim, setStateNewNotaQuartoBim] = useState(0);
  const [stateCurrentDisciplinaId, setStateCurrentDisciplinaId] = useState(0);

  const [stateNewSituacao, setStateNewSituacao] = useState(0);

  const objectUpdateBoletimData = {
    aluno: {
      id: stateIdOfAluno,
    },
    disciplina: {
      id: stateCurrentDisciplinaId,
    },
    notaPrimeiroBim: stateNewNotaPrimeiroBim,
    faltaPrimeiroBim: 0,
    notaSegundoBim: stateNewNotaSegundoBim,
    faltaSegundoBim: 0,
    notaTerceiroBim: stateNewNotaTerceiroBim,
    faltaTerceiroBim: 0,
    notaQuartoBim: stateNewNotaQuartoBim,
    faltaQuartoBim: 0,
    situacao: {
      id: stateNewSituacao,
    },
  };

  const handleUpdateBoletimById = () => {
    const urlToUpdateBoletim = `https://vb-gepy-backend-web.onrender.com/boletim/alterar/${stateBoletimID}`;

    try {
      fetch(urlToUpdateBoletim, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objectUpdateBoletimData),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          if (data.message === "Boletim alterado com sucesso!!") {
            handleCloseUpdateModal();

            Swal.fire({
              position: "center",
              icon: "success",
              text: "Boletim atualizado!!",
              showConfirmButton: false,
              timer: 1800,
            });
            handleListBoletimOfAluno();
          } else {
            handleCloseUpdateModal();

            Swal.fire({
              position: "center",
              icon: "error",
              text: "Erro atualizar Boletim!!",
              showConfirmButton: false,
              timer: 1800,
            });
            handleListBoletimOfAluno();
          }
          console.log("Success:", data);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  const stateCalculoSituacao =
    (stateNewNotaPrimeiroBim +
      stateNewNotaSegundoBim +
      stateNewNotaTerceiroBim +
      stateNewNotaQuartoBim) /
    4;

  const handleCalculoSituacao = () => {
    if (stateCalculoSituacao < 5) {
      setStateNewSituacao(2);
    } else {
      setStateNewSituacao(1);
    }
  };

  const handleFillModalWithRowData = (row) => {
    setStateNewNotaPrimeiroBim(row.notaBim1);
    setStateNewNotaSegundoBim(row.notaBim2);
    setStateNewNotaTerceiroBim(row.notaBim3);
    setStateNewNotaQuartoBim(row.notaBim4);
    setStateCurrentDisciplinaId(row.idDisciplina); // Disciplina associada
    setStateBoletimID(row.id); // ID do boletim para identificar a edição
    setStateOpenUpdateModal(true); // Abre o modal de edição
  };

  console.log(stateCalculoSituacao);

  return (
    <div className="busca-boletim-content">
      <Box sx={{ height: "80%", width: "100%" }}>
        <div className="busca-boletim-content-top">
          <div className="busca-boletim-content-top-left">
            {/* AQUI */}
            <CustomTextField
              label="Selecione Turma"
              variant="outlined"
              select
              value={stateSearchTurma}
              onFocus={handleGetTurma}
              onChange={(e) => {
                setStateSearchTurma(e.target.value);
                setStateIdOfTurma(e.target.value);
              }}
              type="text"
              sx={{ width: "25%" }}
              InputProps={{
                endAdornment: stateGetTurmaLoading && (
                  <InputAdornment position="start">
                    <CircularProgress sx={{ marginRight: "10px" }} size={20} />
                  </InputAdornment>
                ),
              }}
            >
              {stateTurmaArray.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.nome}
                </MenuItem>
              ))}
            </CustomTextField>

            <CustomTextField
              label="Selecione o Aluno"
              variant="outlined"
              select
              value={stateSearchAluno}
              onFocus={() => {
                handleGetAlunoOfTurma();
              }}
              onChange={(e) => {
                setStateSerachAluno(e.target.value);
                setStateIdOfAluno(e.target.value);
              }}
              type="text"
              sx={{ width: "70%" }}
              InputProps={{
                endAdornment: stateGetAlunoOfTurmaLoading && (
                  <InputAdornment position="start">
                    <CircularProgress sx={{ marginRight: "10px" }} size={20} />
                  </InputAdornment>
                ),
              }}
            >
              {stateIdOfTurma ? (
                stateAlunoOfTurmaArray.map((option, index) => (
                  <MenuItem key={option.index} value={option.id}>
                    {option.nome}
                  </MenuItem>
                ))
              ) : (
                <MenuItem>
                  <Typography>{`Selecione A Turma`}</Typography>
                </MenuItem>
              )}
            </CustomTextField>
          </div>

          <div className="busca-boletim-content-top-right">
            <SearchButton
              variant="outlined"
              startIcon={
                stateLoadingBoletim ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <SearchIcon />
                )
              }
              onClick={handleListBoletimOfAluno}
              sx={{ width: "70%" }}
            >
              {stateLoadingBoletim
                ? "Carregando..."
                : "Pesquisar Boletim Aluno"}
            </SearchButton>
            <NewButton
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={handleOpenValidation}
              sx={{ width: "50%" }}
            >
              Novo Boletim
            </NewButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              sx={{
                backdropFilter: "blur(3px)", // Efeito de desfoque no fundo
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escurecido com opacidade
              }}
            >
              <Box sx={style}>
                <div className="boletim-modal-content">
                  <Typography
                    id="boletim-modal-content-title"
                    variant="h6"
                    component="h2"
                  >
                    Novo Boletim
                  </Typography>
                  <div className="boletim-modal-content-top">
                    <div className="boletim-modal-content-top-left">
                      <CustomTextField
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
                      >
                        {stateDisciplinaArray.map((option, index) => (
                          <MenuItem key={option.index} value={option.id}>
                            {option.nome}
                          </MenuItem>
                        ))}
                      </CustomTextField>
                    </div>
                    <div className="boletim-modal-content-top-right">
                      <CustomTextField
                        label="Nota Primeiro Bimestre"
                        variant="outlined"
                        value={stateNotaPrimeiroBim}
                        onChange={(e) => {
                          setStateNotaPrimeiroBim(e.target.value);
                        }}
                        type="number"
                        sx={{ width: "100%" }}
                      />
                      <CustomTextField
                        label="Nota Segundo Bimestre"
                        variant="outlined"
                        value={stateNotaSegundoBim}
                        onChange={(e) => {
                          setStateNotaSegundoBim(e.target.value);
                        }}
                        type="number"
                        sx={{ width: "100%" }}
                      />
                      <CustomTextField
                        label="Nota Terceiro Bimestre"
                        variant="outlined"
                        value={stateNotaTerceiroBim}
                        onChange={(e) => {
                          setStateNotaTerceiroBim(e.target.value);
                        }}
                        type="number"
                        sx={{ width: "100%" }}
                      />
                      <CustomTextField
                        label="Nota Quarto Bimestre"
                        variant="outlined"
                        value={stateNotaQuartoBim}
                        onChange={(e) => {
                          setStateNotaQuartoBim(e.target.value);
                        }}
                        type="number"
                        sx={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="boletim-modal-content-bottom">
                    <SubmitButton
                      onClick={handleInsertBoletim}
                      startIcon={<SaveOutlinedIcon />}
                      sx={{ mt: 2 }}
                      variant="outlined"
                    >
                      Gravar
                    </SubmitButton>
                    <BackButton
                      onClick={handleClose}
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

            {/* ESTE MODAL */}
            <Modal
              open={stateOpenUpdateModal}
              onClose={handleCloseUpdateModal}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              sx={{
                backdropFilter: "blur(3px)", // Efeito de desfoque no fundo
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escurecido com opacidade
              }}
            >
              <Box sx={style}>
                <div className="boletim-modal-content">
                  <Typography
                    id="boletim-modal-content-title"
                    variant="h6"
                    component="h2"
                  >
                    Atualizar Boletim
                  </Typography>
                  <div className="boletim-modal-content-top">
                    <div className="boletim-modal-content-top-left">
                      <CustomTextField
                        label="Selecione a Disciplina"
                        variant="outlined"
                        select
                        value={stateCurrentDisciplinaId}
                        disabled={true}
                        onChange={(e) => {
                          setStateCurrentDisciplinaId(e.target.value);
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
                    <div className="boletim-modal-content-top-right">
                      <CustomTextField
                        label="Nota Primeiro Bimestre"
                        variant="outlined"
                        value={stateNewNotaPrimeiroBim}
                        onChange={(e) => {
                          setStateNewNotaPrimeiroBim(e.target.value);
                        }}
                        type="number"
                        sx={{ width: "100%" }}
                      />
                      <CustomTextField
                        label="Nota Segundo Bimestre"
                        variant="outlined"
                        value={stateNewNotaSegundoBim}
                        onChange={(e) => {
                          setStateNewNotaSegundoBim(e.target.value);
                        }}
                        type="number"
                        sx={{ width: "100%" }}
                      />
                      <CustomTextField
                        label="Nota Terceiro Bimestre"
                        variant="outlined"
                        value={stateNewNotaTerceiroBim}
                        onChange={(e) => {
                          setStateNewNotaTerceiroBim(e.target.value);
                        }}
                        type="number"
                        sx={{ width: "100%" }}
                      />
                      <CustomTextField
                        label="Nota Quarto Bimestre"
                        variant="outlined"
                        value={stateNewNotaQuartoBim}
                        onChange={(e) => {
                          setStateNewNotaQuartoBim(e.target.value);
                        }}
                        type="number"
                        sx={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="boletim-modal-content-bottom">
                    <SubmitButton
                      onClick={handleUpdateBoletimById}
                      startIcon={<SaveOutlinedIcon />}
                      sx={{ mt: 2 }}
                      variant="outlined"
                    >
                      Gravar
                    </SubmitButton>
                    <BackButton
                      onClick={handleCloseUpdateModal}
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
          </div>
        </div>
        {/* DATA GRID */}
        <div className="busca-boletim-content-midle">
          <DataGridForFuncionarios rows={stateBoletimAluno} columns={columns} />
        </div>
      </Box>
    </div>
  );
}
