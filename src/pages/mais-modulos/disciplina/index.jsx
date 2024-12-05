import "./styles.css";
import { Box, Typography } from "@mui/material";
import { SearchButton } from "../../../components/buttons/searchButton";

import SearchIcon from "@mui/icons-material/Search";
import DataGridForDisciplina from "../../../components/dataGrids/dataGridForDisciplina";
import { useState } from "react";
export default function Disciplina() {
  const [stateDisciplinaArray, setStateDisciplinaArray] = useState([]);
  const tempDisciplinaArray = [];

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
      headerName: "Nome",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 4,
    },
  ];

  const handleListDisciplina = () => {
    const urlToListDisciplina = `https://vb-gepy-backend-web.onrender.com/disciplina`;

    try {
      fetch(urlToListDisciplina)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
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

  return (
    <div className="disciplina-content">
      <Box sx={{ height: "85%", width: "100%" }}>
        <div className="disciplina-content-top">
          <Typography id="modal-title" variant="h6" component="h2">
            Lista de Disciplina
          </Typography>
          <SearchButton
            variant="outlined"
            startIcon={<SearchIcon />}
            onClick={handleListDisciplina}
          >
            Pesquisar Por Todos Disciplina
          </SearchButton>
        </div>
        <div className="disciplina-content-midle">
          <DataGridForDisciplina rows={stateDisciplinaArray} columns={columns} />
        </div>
      </Box>
    </div>
  );
}
