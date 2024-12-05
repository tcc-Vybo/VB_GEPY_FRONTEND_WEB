import "./styles.css";
import React, { useState } from "react";

import DataGridForFuncionarios from "../../../components/dataGrids/dataGridForFuncionarios/index";
import { SearchButton } from "../../../components/buttons/searchButton";

import { Box, Tooltip, Typography } from "@mui/material";
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
    field: "nomeFuncionario",
    headerName: "Nome",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
    flex: 4
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

export default function BuscaFuncionarios() {
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
    <div className="buscar-funcionarios-content">
      <Box sx={{ height: "85%", width: "100%" }}>
        <div className="buscar-funcionarios-content-top">
          <Typography id="modal-title" variant="h6" component="h2">
            Lista de Funcionários
          </Typography>
          <SearchButton
            variant="outlined"
            startIcon={<SearchIcon />}
            onClick={handleListFuncionarios}
          >
            Pesquisar Por Todos Funcionarios
          </SearchButton>
        </div>
        <div className="buscar-funcionarios-content-midle">
          <DataGridForFuncionarios rows={stateFuncionariosArray} columns={columns} />
        </div>
      </Box>
    </div>
  );
}
