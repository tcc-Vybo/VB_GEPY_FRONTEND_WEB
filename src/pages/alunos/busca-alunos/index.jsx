import "./style.css";
import React, { useState } from "react";

import DataGridForAlunos from "../../../components/dataGrids/dataGridForAlunos/index";
import { SearchButton } from "../../../components/buttons/searchButton";

import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { CustomTheme } from "../../../assets/colorsPallete/colorsPallete";


const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
    flex: 1
  },
  {
    field: "nomeAluno",
    headerName: "Nome",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
    flex: 4
  },
  {
    field: "nomeResponsavel",
    headerName: "Responsável",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
    flex: 3
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
  //       <IconButton
  //         sx={{ color: CustomTheme.palette.primary.main }}
  //         onClick={() => handleEdit(params.row.id)}
  //       >
  //         <EditIcon />
  //       </IconButton>

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

export default function BuscaAlunos() {
  const [stateAlunosArray, setStateAlunosArray] = useState([]);
  const tempAlunosArray = [];

  const handleListAlunos = () => {
    const urlToListAlunos = `https://vb-gepy-backend-web.onrender.com/aluno`;

    try {
      fetch(urlToListAlunos)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
            tempAlunosArray.push({
              id: data[index].id,
              nomeAluno: data[index].nomeCompleto,
              nomeResponsavel: data[index].nomeResponsavel,
            });
          });
          setStateAlunosArray(tempAlunosArray);
          console.log(stateAlunosArray);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  return (
    <div className="buscar-alunos-content">
      <Box sx={{ height: "85%", width: "100%" }}>
        <div className="buscar-alunos-content-top">
          <Typography id="modal-title" variant="h6" component="h2">
            Lista de Alunos
          </Typography>
          <SearchButton
            variant="outlined"
            startIcon={<SearchIcon />}
            onClick={handleListAlunos}
          >
            Pesquisar Por Todos Alunos
          </SearchButton>
        </div>
        <div className="buscar-alunos-content-midle">
          <DataGridForAlunos rows={stateAlunosArray} columns={columns} />
        </div>
      </Box>
    </div>
  );
}
