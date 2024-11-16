import "./style.css";
import React, { useState } from "react";

import DataGridForFuncionarios from "../../../components/dataGrids/dataGridForFuncionarios/index";
import { SearchButton } from "../../../components/buttons/searchButton";
import { SubmitButton } from "../../../components/buttons/submitButton";
import { NewButton } from "../../../components/buttons/newButton"
import { CustomTheme } from "../../../assets/colorsPallete/colorsPallete";
import { CustomTextField } from "../../../components/textFields/customTextField";

import { Box, MenuItem, Modal, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from '@mui/icons-material/Add';
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
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };


  //MODAL
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleOpenValidation = () => {
    if(!stateSearchTurma || !stateSearchAluno){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Erro!",
        text: "Selecione o Aluno e a Turma!!",
        showConfirmButton: false,
        timer: 1800,
      });
    }
    else{
      handleOpen()
    }
  }

  const handleOpen = () => setOpen(true);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-39%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  const handleInsertBoletim = () => {};

  return (
    <div className="busca-boletim-content">
      <Box sx={{ height: "80%", width: "100%" }}>
        <div className="busca-boletim-content-top">
          <div className="busca-boletim-content-top-left">
            <CustomTextField
              label="Selecione a Turma"
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
              {stateAlunoOfTurmaArray.map((option, index) => (
                <MenuItem key={option.index} value={option.id}>
                  {option.nome}
                </MenuItem>
              ))}
            </CustomTextField>
          </div>

          <div className="busca-boletim-content-top-right">
            <SearchButton
              variant="outlined"
              endIcon={<SearchIcon />}
              onClick={handleListBoletimOfAluno}
              sx={{width: "70%"}}
            >
              Pesquisar Por Boletim do Aluno
            </SearchButton>
            <NewButton
              variant="outlined"
              endIcon={<AddIcon />}
              onClick={handleOpenValidation}
              sx={{width: "50%"}}
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
                <Typography id="modal-title" variant="h6" component="h2">
                  Novo Boletim
                </Typography>
                
                <SubmitButton
                  onClick={handleClose}
                  endIcon={<SaveOutlinedIcon />}
                  sx={{ mt: 2 }}
                  variant="outlined"
                >
                  Gravar
                </SubmitButton>
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
