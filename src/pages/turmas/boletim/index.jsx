import "./style.css";
import React, { useState } from "react";

import DataGridForFuncionarios from "../../../components/dataGrids/dataGridForFuncionarios/index";
import { SearchButton } from "../../../components/buttons/searchButton";
import { CustomTheme } from "../../../assets/colorsPallete/colorsPallete";
import { CustomTextField } from "../../../components/textFields/customTextField";

import { Box, MenuItem, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

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
  const [stateSearchTurma, setStateSearchTurma] = useState("")
  const [stateTurmaArray, setStateTurmaArray] = useState([])
  const tempTurmaArray = []

  const handleGetTurma = () => {
    
  }

  const [stateFuncionariosArray, setStateFuncionariosArray] = useState([]);
  const tempFuncionariosArray = [];

  const handleListFuncionarios = () => {
    const urlToListFuncionarios = `https://vb-gepy-backend-web.onrender.com/funcionario`;

    try {
      fetch(urlToListFuncionarios)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
            tempFuncionariosArray.push({
              id: data[index].id,
              nomeFuncionario: data[index].nomeCompleto,
              cargo: data[index].cargo,
            });
          });
          setStateFuncionariosArray(tempFuncionariosArray);
          console.log(stateFuncionariosArray);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  return (
    <div className="busca-aluno-content">
      <Box sx={{ height: "80%", width: "100%" }}>
        <div className="busca-aluno-content-top">
          <CustomTextField
            label="Destinatario"
            variant="outlined"
            select
            value={stateSearchTurma}
            onFocus={() => {
              handleGetTurma();
            }}
            onChange={(e) => {
              setStateSearchTurma(e.target.value);
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
          <Typography id="modal-title" variant="h6" component="h2">
            Boletim
          </Typography>
          <SearchButton
            variant="outlined"
            endIcon={<SearchIcon />}
            onClick={handleListFuncionarios}
          >
            Pesquisar Por Boletim do Aluno
          </SearchButton>
        </div>
        <div className="busca-aluno-content-midle">
          <DataGridForFuncionarios
            rows={stateFuncionariosArray}
            columns={columns}
          />
        </div>
      </Box>
    </div>
  );
}
