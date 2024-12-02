import "./style.css";

import React, { useState } from "react";

import DataGridForTurmas from "../../../components/dataGrids/dataGridForTurmas/index";
import { SearchButton } from "../../../components/buttons/searchButton";

import { Box, CircularProgress, Tooltip, Typography } from "@mui/material";
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
    field: "nomeTurma",
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

export default function BuscaTurmas() {
  const [stateTurmasArray, setStateTurmasArray] = useState([]);
  const tempTurmasArray = [];
  const [stateGetTurmaLoading, setStateGetTurmaLoading] = useState()

  const handleListTurmas = async () => {
    setStateGetTurmaLoading(true);
    const urlToGetDisciplina = `https://vb-gepy-backend-web.onrender.com/turma`;

    try {
      const response = await fetch(urlToGetDisciplina);
      const data = await response.json();

      data.map((item, index) => {
        tempTurmasArray.push({
          id: item.id,
          nomeTurma: item.nome,
        });
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
    <div className="busca-turma-content">
      <Box sx={{ height: "80%", width: "100%" }}>
        <div className="busca-turma-content-top">
          <Typography id="modal-title" variant="h6" component="h2">
            Lista de Turmas
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
            {stateGetTurmaLoading
              ? "Carregando..."
              : "Pesquisar Por turmas"}
          </SearchButton>
        </div>
        <div className="busca-turma-content-midle">
          <DataGridForTurmas rows={stateTurmasArray} columns={columns} />
        </div>
      </Box>
    </div>
  );
}
