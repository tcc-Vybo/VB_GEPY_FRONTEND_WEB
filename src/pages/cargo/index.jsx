import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import "./styles.css";
import { Box, Typography } from "@mui/material";
import { SearchButton } from "../../components/buttons/searchButton";
import SearchIcon from "@mui/icons-material/Search";
import DataGridForCargo from "../../components/dataGrids/dataGridForCargo";
import { useState } from "react";

export default function Cargo() {
  const [stateCargoArray, setStateCargoArray] = useState([]);
  const tempCargoArray = [];

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

  const handleListCargo = () => {
    const urlToListCargo = `https://vb-gepy-backend-web.onrender.com/cargo`;

    try {
      fetch(urlToListCargo)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
            tempCargoArray.push({
              id: data[index].id,
              nome: data[index].nome,
            });
          });
          setStateCargoArray(tempCargoArray);
          console.log(stateCargoArray);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  return (
    <div className="cargo-content">
      <Box sx={{ height: "80%", width: "100%" }}>
        <div className="cargo-content-top">
          <Typography id="modal-title" variant="h6" component="h2">
            Lista de Cargo
          </Typography>
          <SearchButton
            variant="outlined"
            startIcon={<SearchIcon />}
            onClick={handleListCargo}
          >
            Pesquisar Por Todos Cargo
          </SearchButton>
        </div>
        <div className="cargo-content-midle">
          <DataGridForCargo rows={stateCargoArray} columns={columns} />
        </div>
      </Box>
    </div>
  );
}
