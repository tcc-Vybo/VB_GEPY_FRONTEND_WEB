import "./styles.css";
import { Box, Typography } from "@mui/material";
import { SearchButton } from "../../../components/buttons/searchButton";
import DataGridForTipoRecado from "../../../components/dataGrids/dataGridForTipoRecado";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
export default function TipoRecado() {
  const [stateTipoRecadoArray, setStateTipoRecadoArray] = useState([]);
  const tempTipoRecadoArray = [];

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

  const handleListTipoRecado = () => {
    const urlToListTipoRecado = `https://vb-gepy-backend-web.onrender.com/tipo-recado`;

    try {
      fetch(urlToListTipoRecado)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
            tempTipoRecadoArray.push({
              id: data[index].id,
              nome: data[index].nome,
            });
          });
          setStateTipoRecadoArray(tempTipoRecadoArray);
          console.log(stateTipoRecadoArray);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  return (
    <div className="tipo-recado-content">
      <Box sx={{ height: "80%", width: "100%" }}>
        <div className="tipo-recado-content-top">
          <Typography id="modal-title" variant="h6" component="h2">
            Lista de Tipos de Recado
          </Typography>
          <SearchButton
            variant="outlined"
            startIcon={<SearchIcon />}
            onClick={handleListTipoRecado}
          >
            Pesquisar Por Todos Tipos de Recado
          </SearchButton>
        </div>
        <div className="tipo-recado-content-midle">
          <DataGridForTipoRecado rows={stateTipoRecadoArray} columns={columns} />
        </div>
      </Box>
    </div>
  );
}
