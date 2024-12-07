import "./styles.css";
import { Box, CircularProgress, InputAdornment, MenuItem, Modal, Typography } from "@mui/material";
import { SearchButton } from "../../../components/buttons/searchButton";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DataGridForPerfilPorServidor from "../../../components/dataGrids/dataGridForPerfilPorServidor";
import { useState } from "react";
import { NewButton } from "../../../components/buttons/newButton";
import { CustomTextField } from "../../../components/textFields/customTextField";
import { SubmitButton } from "../../../components/buttons/submitButton";
import { BackButton } from "../../../components/buttons/backButton";
import Swal from "sweetalert2";
export default function PerfilPorServidor() {
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


  const [statePerfilPorServidorArray, setStatePerfilPorServidorArray] = useState([]);
  const tempPerfilPorServidorArray = [];

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
      headerName: "Funcionario",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 4,
    },
    {
      field: "cargo",
      headerName: "Cargo",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 4,
    },
  ];

  const handleListPerfilPorServidor = () => {
    const urlToListPerfilPorServidor = `https://vb-gepy-backend-web.onrender.com/perfil-vinculo`;

    try {
      fetch(urlToListPerfilPorServidor)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
            tempPerfilPorServidorArray.push({
              id: data[index].id,
              nome: data[index].funcionario.nomeCompleto,
              cargo: data[index].cargo.nome
            });
          });
          setStatePerfilPorServidorArray(tempPerfilPorServidorArray);
          console.log(statePerfilPorServidorArray);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };
  
  const [stateSearchCargo, setStateSearchCargo] = useState([]);
  const [stateCargoArray, setStateCargoArray] = useState([]);
  const tempCargoArray = [];
  const [stateCargoLoading, setStateCargoLoading] = useState(false)

  const [stateIdOfCargo, setStateIdOfCargo] = useState(0)
  const [stateIdOfFuncionario, setStateIdOfFuncionario] = useState(0)

  const handleGetCargo = async () => {
    setStateCargoLoading(true)
    const urlToListCargo = `https://vb-gepy-backend-web.onrender.com/cargo`;

    try {
      await fetch(urlToListCargo)
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
    }finally{
      setStateCargoLoading(false)
    }
  };
  const [stateSearchFuncionarios, setStateSearchFuncionarios] = useState([]);
  const [stateFuncionariosArray, setStateFuncionariosArray] = useState([]);
  const tempFuncionariosArray = [];
  const [stateFuncionariosLoading, setStateFuncionariosLoading] = useState(false)

  const handleGetFuncionarios = async () => {
    setStateFuncionariosLoading(true)
    const urlToListFuncionarios = `https://vb-gepy-backend-web.onrender.com/funcionario`;

    try {
      await fetch(urlToListFuncionarios)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
            tempFuncionariosArray.push({
              id: data[index].id,
              nome: data[index].nomeCompleto,
            });
          });
          setStateFuncionariosArray(tempFuncionariosArray);
          console.log(stateFuncionariosArray);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }finally{
      setStateFuncionariosLoading(false)
    }
  };

  const objectVinculoData = {
    cargo: {
      id: stateIdOfCargo
    },
    funcionario: {
      id: stateIdOfFuncionario
    }
  }

  const handleInsertVinculo = () => {
    const urlToInsertVinculo = `https://vb-gepy-backend-web.onrender.com/perfil-vinculo`
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
  

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="perfil-servidor-content">
      <Box sx={{ height: "70%", width: "100%" }}>
        <div className="perfil-servidor-content-top">
          <Typography id="modal-title" variant="h6" component="h2">
            Lista de Perfil por Servidor
          </Typography>
          <SearchButton
            variant="outlined"
            startIcon={<SearchIcon />}
            onClick={handleListPerfilPorServidor}
          >
            Pesquisar Por Todos os vinculos
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
                Novo Vínculo
              </Typography>
              <div className="boletim-modal-content-top">
                <div className="boletim-modal-content-top-left">
                <CustomTextField
                    label="Selecione Cargo"
                    variant="outlined"
                    select
                    value={stateSearchCargo}
                    onFocus={handleGetCargo}
                    onChange={(e) => {
                      setStateSearchCargo(e.target.value);
                      setStateIdOfCargo(e.target.value);
                    }}
                    type="text"
                    sx={{ width: "100%" }}
                    InputProps={{
                      endAdornment: stateCargoLoading && (
                        <InputAdornment position="start">
                          <CircularProgress
                            sx={{ marginRight: "10px" }}
                            size={20}
                          />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {stateCargoArray.map((option) => (
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
                    value={stateSearchFuncionarios}
                    onFocus={handleGetFuncionarios}
                    onChange={(e) => {
                      setStateSearchFuncionarios(e.target.value);
                      setStateIdOfFuncionario(e.target.value);
                    }}
                    type="text"
                    sx={{ width: "100%" }}
                    InputProps={{
                      endAdornment: stateFuncionariosLoading && (
                        <InputAdornment position="start">
                          <CircularProgress
                            sx={{ marginRight: "10px" }}
                            size={20}
                          />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {stateFuncionariosArray.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.nome}
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
        <div className="perfil-servidor-content-midle">
          <DataGridForPerfilPorServidor rows={statePerfilPorServidorArray} columns={columns} />
        </div>
      </Box>
    </div>
  );
}
