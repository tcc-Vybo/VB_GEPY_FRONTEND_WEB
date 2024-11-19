import "./style.css";
import React, { useState } from "react";

import DataGridForFuncionarios from "../../../components/dataGrids/dataGridForFuncionarios/index";
import { SearchButton } from "../../../components/buttons/searchButton";
import { SubmitButton } from "../../../components/buttons/submitButton";
import { NewButton } from "../../../components/buttons/newButton";
import { CustomTheme } from "../../../assets/colorsPallete/colorsPallete";
import { CustomTextField } from "../../../components/textFields/customTextField";

import { Box, MenuItem, Modal, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";

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
          onClick={() => handleEdit(params.row.id)}
        >
          <SaveOutlinedIcon />
        </IconButton>
      </>
    ),
  },
];

export default function Boletim() {
  const [stateSearchTurma, setStateSearchTurma] = useState("");
  const [stateSearchAluno, setStateSerachAluno] = useState("");

  const [stateTurmaArray, setStateTurmaArray] = useState([]);
  const tempTurmaArray = [];

  const handleGetTurma = () => {
    const urlToListTurma = `https://vb-gepy-backend-web.onrender.com/turma`;

    try {
      fetch(urlToListTurma)
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

  const [stateIdOfTurma, setStateIdOfTurma] = useState(0);
  const [stateAlunoOfTurmaArray, setStateAlunoOfTurmaArray] = useState([]);
  const tempAlunoOfTurmaArray = [];

  const handleGetAlunoOfTurma = () => {
    const urlToListAlunoOfTurma = `https://vb-gepy-backend-web.onrender.com/aluno-turma/buscar/${stateIdOfTurma}`;

    try {
      if (stateIdOfTurma === 0) {
      } else {
        fetch(urlToListAlunoOfTurma)
          .then((response) => {
            console.log("Response received:", response);

            return response.json();
          })
          .then((data) => {
            data.map((item, index) => {
              tempAlunoOfTurmaArray.push({
                id: data[index].id,
                nome: data[index].aluno.nomeCompleto,
              });
            });
            setStateAlunoOfTurmaArray(tempAlunoOfTurmaArray);
            console.log(stateAlunoOfTurmaArray);
          });
      }
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  const [stateIdOfAluno, setStateIdOfAluno] = useState(0);
  const [stateBoletimAluno, setStateBoletimAluno] = useState([]);
  const tempBoletimAluno = [];

  const handleListBoletimOfAluno = () => {
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
      } else {
        fetch(urlToListBoletimOfAluno)
          .then((response) => {
            console.log("Response received:", response);

            return response.json();
          })
          .then((data) => {
            data.map((item, index) => {
              console.log(data[index]);
              tempBoletimAluno.push({
                id: data[index].id,
                disciplina: data[index].disciplina.nome,
                notaBim1: data[index].notaPrimeiroBim,
                notaBim2: data[index].notaSegundoBim,
                notaBim3: data[index].notaTerceiroBim,
                notaBim4: data[index].notaQuartoBim,
              });
            });
            setStateBoletimAluno(tempBoletimAluno);
            console.log(stateBoletimAluno);
          });
      }
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  //MODAL
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

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
  const tempDisciplinaArray = [];

  const handleGetDisciplina = () => {
    const urlToGetDisciplina = `https://vb-gepy-backend-web.onrender.com/disciplina`;

    try {
      fetch(urlToGetDisciplina)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
            console.log(data[index]);
            tempDisciplinaArray.push({
              id: data[index].id,
              nome: data[index].nome,
            });
          });
          setStateDisciplinaArray(tempDisciplinaArray);
          console.log(stateDisciplinaArray);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  const [stateNotaPrimeiroBim, setStateNotaPrimeiroBim] = useState(0);
  const [stateNotaSegundoBim, setStateNotaSegundoBim] = useState(0);
  const [stateNotaTerceiroBim, setStateNotaTerceiroBim] = useState(0);
  const [stateNotaQuartoBim, setStateNotaQuartoBim] = useState(0);
  const stateCalculoSituacao =
    (stateNotaPrimeiroBim +
      stateNotaSegundoBim +
      stateNotaTerceiroBim +
      stateNotaQuartoBim) /
    4;
  const [stateSituacao, setStateSituacao] = useState(
    stateCalculoSituacao < 5 ? "REPROVADO" : "APROVADO"
  );

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
    situacao: stateSituacao,
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
          if (data.message === "Boletim registrado com sucesso!!") {
            Swal.fire({
              position: "center",
              icon: "success",
              text: "Boletim atualizado!!",
              showConfirmButton: false,
              timer: 1800,
            });
            handleClose()
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              text: "Erro atualizar Boletim!!",
              showConfirmButton: false,
              timer: 1800,
            });
          }
          console.log("Success:", data);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  return (
    <div className="busca-boletim-content">
      <Box sx={{ height: "80%", width: "100%" }}>
        <div className="busca-boletim-content-top">
          <div className="busca-boletim-content-top-left">
            <CustomTextField
              label="Selecione Turma"
              variant="outlined"
              select
              value={stateSearchTurma}
              onFocus={() => {
                handleGetTurma();
              }}
              onChange={(e) => {
                setStateSearchTurma(e.target.value);
                setStateIdOfTurma(e.target.value);
              }}
              type="text"
              sx={{ width: "25%" }}
            >
              {stateTurmaArray.map((option, index) => (
                <MenuItem key={option.index} value={option.id}>
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
              endIcon={<SearchIcon />}
              onClick={handleListBoletimOfAluno}
              sx={{ width: "70%" }}
            >
              Pesquisar Por Boletim do Aluno
            </SearchButton>
            <NewButton
              variant="outlined"
              endIcon={<AddIcon />}
              onClick={handleOpenValidation}
              sx={{ width: "50%" }}
            >
              Novo Boletim do Aluno
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
                      endIcon={<SaveOutlinedIcon />}
                      sx={{ mt: 2 }}
                      variant="outlined"
                    >
                      Gravar
                    </SubmitButton>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
        <div className="busca-boletim-content-midle">
          <DataGridForFuncionarios rows={stateBoletimAluno} columns={columns} />
        </div>
      </Box>
    </div>
  );
}
