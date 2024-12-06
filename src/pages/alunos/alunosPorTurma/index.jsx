import "./styles.css";

import React, { useState } from "react";

import DataGridForTurmas from "../../../components/dataGrids/dataGridForTurmas/index";
import { SearchButton } from "../../../components/buttons/searchButton";

import { Box, CircularProgress, InputAdornment, MenuItem, Modal, Tooltip, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


import { CustomTheme } from "../../../assets/colorsPallete/colorsPallete";
import { NewButton } from "../../../components/buttons/newButton";
import { CustomTextField } from "../../../components/textFields/customTextField";
import { SubmitButton } from "../../../components/buttons/submitButton";
import { BackButton } from "../../../components/buttons/backButton";
import Swal from "sweetalert2";

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
    field: "nomeTurma",
    headerName: "Turma",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
    flex: 4,
  },
  {
    field: "nomeAluno",
    headerName: "Aluno",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
    flex: 4,
  },
  // {
  //   field: "actions",
  //   headerName: "Ações",
  //   headerAlign: "center",
  //   align: "center",
  //   sortable: false,
  //   flex: 1,
  //   renderCell: (params) => (
  //     <>
  //     <Tooltip>
  //       <IconButton
  //         sx={{ color: CustomTheme.palette.tertiary.main }}
  //         onClick={() => handleEdit(params.row.id)}
  //       >
  //         <EditIcon />
  //       </IconButton>
  //     </Tooltip>
  //       <IconButton
  //         sx={{ color: CustomTheme.palette.secondary.main }}
  //         onClick={() => handleDelete(params.row.id)}
  //       >
  //         <DeleteIcon />
  //       </IconButton>
  //     </>
  //   ),
  // },
];

export default function BuscaTurmas() {
  const [stateTurmasArray, setStateTurmasArray] = useState([]);
  const tempTurmasArray = [];

  const [stateIdOfAluno, setStateIdOfAluno] = useState(0)
  const [stateIdOfTurma, setStateIdOfTurma] = useState(0)

  const [stateGetTurmaLoading, setStateGetTurmaLoading] = useState();
  const [stateTurmaArray, setStateTurmaArray] = useState([]);
  const [stateSearchTurma, setStateSearchTurma] = useState("");
  

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };

  const objectVinculoData = {
    aluno: {
      id: stateIdOfAluno
    },
    turma: {
      id: stateIdOfTurma
    }
  }

  const handleInsertVinculo = async () => {
    const urlToInsertVinculo = `https://vb-gepy-backend-web.onrender.com/aluno-turma`;

    try {
      fetch(urlToInsertVinculo, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objectVinculoData),
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
          } else {
            handleClose();

            Swal.fire({
              position: "center",
              icon: "error",
              text: "Erro Inserir vínculo!!",
              showConfirmButton: false,
              timer: 1800,
            });
          }
          console.log("Success:", data);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  }
  
  const [stateSearchAluno, setStateSearchAluno] = useState("");
  const [stateGetAlunoLoading, setStateGetAlunoLoading] = useState(false)
  const [stateAlunoArray, setStateAlunoArray] = useState([])
  const tempAlunosArray = []
  

  const handleGetAluno = async () => {
    setStateGetAlunoLoading(true);
    const urlToGetAlunos = `https://vb-gepy-backend-web.onrender.com/aluno`;

    try {
      const response = await fetch(urlToGetAlunos);
      const data = await response.json();

      data.map((item, index) => {
        console.log(item);
        tempAlunosArray.push({
          id: item.id,
          nomeAluno: item.nomeCompleto,
        });

        console.log(item.nomeCompleto);
      });

      setStateAlunoArray(tempAlunosArray);
      console.log(stateAlunoArray);
    } catch (err) {
      console.error("Erro ao buscar Alunoss:", err);
      Swal.fire({
        position: "top-right",
        icon: "error",
        text: "Erro ao buscar Alunoss!",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setStateGetAlunoLoading(false); // Desativa o estado de loading
    }
  };

  const handleListTurmas = async () => {
    setStateGetTurmaLoading(true);
    const urlToGetTurmas = `https://vb-gepy-backend-web.onrender.com/aluno-turma`;

    try {
      const response = await fetch(urlToGetTurmas);
      const data = await response.json();

      data.map((item, index) => {
        console.log(item);
        tempTurmasArray.push({
          id: item.id,
          nomeTurma: item.turma.nome,
          nomeAluno: item.aluno.nomeCompleto,
        });

        console.log(item.turma.nome);
        console.log(item.aluno.nomeCompleto);
      });

      setStateTurmasArray(tempTurmasArray);
      console.log(stateTurmasArray);
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
      setStateGetTurmaLoading(false); // Desativa o estado de loading
    }
  };
  return (
    <div className="busca-aluno-turma-content">
      <Box sx={{ height: "70%", width: "100%" }}>
        <div className="busca-aluno-turma-content-top">
          <Typography id="modal-title" variant="h6" component="h2">
            Vincular alunos as turmas
          </Typography>
          <SearchButton
            variant="outlined"
            onClick={handleListTurmas}
            startIcon={
              stateGetTurmaLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <SearchIcon />
              )
            }
            sx={{ width: "100%" }}
          >
            {stateGetTurmaLoading ? "Carregando..." : "Pesquisar Por turmas"}
          </SearchButton>

          <NewButton
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleOpen}
            sx={{ width: "100%" }}
          >
            Novo Vínculo
          </NewButton>
        </div>

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
                    sx={{ width: "100%" }}
                    InputProps={{
                      endAdornment: stateGetTurmaLoading && (
                        <InputAdornment position="start">
                          <CircularProgress
                            sx={{ marginRight: "10px" }}
                            size={20}
                          />
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
                </div>
                <div className="boletim-modal-content-top-right">
                <CustomTextField
                    label="Selecione o Aluno"
                    variant="outlined"
                    select
                    value={stateSearchAluno}
                    onFocus={handleGetAluno}
                    onChange={(e) => {
                      setStateSearchAluno(e.target.value);
                      setStateIdOfAluno(e.target.value);
                    }}
                    type="text"
                    sx={{ width: "100%" }}
                    InputProps={{
                      endAdornment: stateGetAlunoLoading && (
                        <InputAdornment position="start">
                          <CircularProgress
                            sx={{ marginRight: "10px" }}
                            size={20}
                          />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {stateAlunoArray.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.nomeAluno}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                </div>
              </div>
              <div className="boletim-modal-content-bottom">
                <SubmitButton
                  onClick={handleInsertVinculo}
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
        <div className="busca-aluno-turma-content-midle">
          <DataGridForTurmas rows={stateTurmasArray} columns={columns} />
        </div>
      </Box>
    </div>
  );
}
