import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import { SubmitButton } from "../../buttons/submitButton/index"
import { BackButton } from "../../buttons/backButton/index";
import { CustomTextField } from "../../textFields/customTextField/index";
import { CustomAccordion } from "../../customAccordion/index";
import { CustomAccordionSummary } from "../../customAccordion/index";
import { CustomAccordionDetails } from "../../customAccordion/index";

import MenuItem from "@mui/material/MenuItem";
import { Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

import Swal from "sweetalert2";

const generoArray = [
  {
    value: "Masculino",
    label: "Masculino",
  },
  {
    value: "Feminino",
    label: "Feminino",
  },
  {
    value: "Outro",
    label: "Outro",
  },
];

const orgaoExpedidor = [
  {
    value: "SSP",
    label: "SSP",
  },
  {
    value: "ITEP",
    label: "ITEP",
  },
  {
    value: "IFP",
    label: "IFP",
  },
  {
    value: "PC",
    label: "PC",
  },
  {
    value: "DETRAN",
    label: "DETRAN",
  },
];

export default function CadastroAlunos() {
  //Dados Pessoais
  const [stateNewNome, setStateNewNome] = useState();
  const [stateNewDtNasc, setStateNewDtNasc] = useState();
  const [stateNewGenero, setStateNewGenero] = useState();
  const [stateNewTelefone, setStateNewTelefone] = useState();
  const [stateNewEmail, setStateNewEmail] = useState();
  //Dados Endereço
  const [stateNewCEP, setStateNewCEP] = useState();
  const [stateNewEndereco, setStateNewEndereco] = useState();
  const [stateNewNumero, setStateNewNumero] = useState();
  const [stateNewComplemento, setStateNewComplemento] = useState();
  const [stateNewBairro, setStateNewBairro] = useState();
  const [stateNewMunicipio, setStateNewMunicipio] = useState();
  const [stateNewUF, setStateNewUF] = useState();

  //Dados Registro
  const [stateNewRG, setStateNewRG] = useState();
  const [stateNewCPF, setStateNewCPF] = useState();
  const [stateNewDtExpedicao, setStateNewDtExpedicao] = useState();
  const [stateNewOrgaoExpedidor, setStateOrgaoExpedidor] = useState();

  const [statePanel1IsOpen, setStatePanel1IsOpen] = useState(true);
  const [statePanel2IsOpen, setStatePanel2IsOpen] = useState(true);
  const [statePanel3IsOpen, setStatePanel3IsOpen] = useState(true);
  const [statePanel4IsOpen, setStatePanel4IsOpen] = useState(true);

  const handleChange1 = () => (event, isExpanded) => {
    setStatePanel1IsOpen(isExpanded); // Se expandir, marca o painel. Se fechar, define como false
  };

  const handleChange2 = () => (event, isExpanded) => {
    setStatePanel2IsOpen(isExpanded); // Se expandir, marca o painel. Se fechar, define como false
  };
  const handleChange3 = () => (event, isExpanded) => {
    setStatePanel3IsOpen(isExpanded); // Se expandir, marca o painel. Se fechar, define como false
  };
  const handleChange4 = () => (event, isExpanded) => {
    setStatePanel4IsOpen(isExpanded); // Se expandir, marca o painel. Se fechar, define como false
  };

  const handleClear = () => {
    // Dados Pessoais
    setStateNewNome("");
    setStateNewDtNasc("");
    setStateNewGenero("");
    setStateNewTelefone("");
    setStateNewEmail("");

    // Dados Endereço
    setStateNewCEP("");
    setStateNewEndereco("");
    setStateNewNumero(0);
    setStateNewComplemento("");
    setStateNewBairro("");
    setStateNewMunicipio("");
    setStateNewUF("");

    // Dados Registro
    setStateNewRG("");
    setStateNewCPF("");
    setStateNewDtExpedicao("");
    setStateOrgaoExpedidor("");
  };

  const handleInsertNewStudent = () => {
    console.log("TESTE")
  }

  return (
        <div className="cadastro-container">
          <form method="POST">
            <CustomAccordion
              expanded={statePanel1IsOpen}
              onChange={handleChange1()}
            >
              <CustomAccordionSummary
                expandIcon={
                  statePanel1IsOpen === true ? <RemoveIcon /> : <AddIcon />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{"Dados Pessoais"}</Typography>
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <div className="cadastro-dados-pessoais-content">
                  <div className="cadastro-dados-pessoais-content-top">
                    <CustomTextField
                      label="Nome"
                      value={stateNewNome}
                      onChange={(e) => {
                        setStateNewNome(e.target.value);
                      }}
                      type="text"
                      sx={{ width: "60%" }}
                    />
                    <CustomTextField
                      label="Email"
                      variant="outlined"
                      value={stateNewEmail}
                      onChange={(e) => {
                        setStateNewEmail(e.target.value);
                      }}
                      type="text"
                      sx={{ width: "40%" }}
                    />
                  </div>
                  <div className="cadastro-dados-pessoais-content-bottom">
                    <CustomTextField
                      label="Nascimento"
                      variant="outlined"
                      value={stateNewDtNasc}
                      onChange={(e) => {
                        setStateNewDtNasc(e.target.value);
                      }}
                      type="text"
                      sx={{ width: "50%" }}
                    />
                    <CustomTextField
                      label="Genero"
                      variant="outlined"
                      select
                      value={stateNewGenero}
                      onChange={(e) => {
                        setStateNewGenero(e.target.value);
                      }}
                      sx={{ width: "50%" }}
                    >
                      {generoArray.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </CustomTextField>
                    <CustomTextField
                      label="Telefone"
                      variant="outlined"
                      value={stateNewTelefone}
                      onChange={(e) => {
                        setStateNewTelefone(e.target.value);
                      }}
                      type="text"
                      sx={{ width: "50%" }}
                    />
                  </div>
                </div>
              </CustomAccordionDetails>
            </CustomAccordion>

            <CustomAccordion
              expanded={statePanel2IsOpen}
              onChange={handleChange2()}
            >
              <CustomAccordionSummary
                expandIcon={
                  statePanel2IsOpen === true ? <RemoveIcon /> : <AddIcon />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>{"Endereço Residencial"}</Typography>
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <div className="cadastro-endereco-residencial-content">
                  <div className="cadastro-endereco-residencial-content-top">
                    <CustomTextField
                      label="CEP"
                      variant="outlined"
                      value={stateNewCEP}
                      onChange={(e) => {
                        setStateNewCEP(e.target.value);
                        console.log(e.target.value);
                      }}
                      type="text"
                      sx={{ width: "20%" }}
                    />
                    <CustomTextField
                      label="Endereço"
                      variant="outlined"
                      value={stateNewEndereco}
                      onChange={(e) => {
                        setStateNewEndereco(e.target.value);
                        console.log(e.target.value);
                      }}
                      type="text"
                      sx={{ width: "70%" }}
                    />
                    <CustomTextField
                      label="Nº"
                      variant="outlined"
                      value={stateNewNumero}
                      onChange={(e) => {
                        setStateNewNumero(e.target.value);
                        console.log(e.target.value);
                      }}
                      type="number"
                      sx={{ width: "10%" }}
                    />
                  </div>
                  <div className="cadastro-endereco-residencial-content-bottom">
                    <CustomTextField
                      label="Complemento"
                      variant="outlined"
                      value={stateNewComplemento}
                      onChange={(e) => {
                        setStateNewComplemento(e.target.value);
                        console.log(e.target.value);
                      }}
                      type="text"
                      sx={{ width: "40%" }}
                    />
                    <CustomTextField
                      label="Bairro"
                      variant="outlined"
                      value={stateNewBairro}
                      onChange={(e) => {
                        setStateNewBairro(e.target.value);
                        console.log(e.target.value);
                      }}
                      type="text"
                      sx={{ width: "30%" }}
                    />
                    <CustomTextField
                      label="Município"
                      variant="outlined"
                      value={stateNewMunicipio}
                      onChange={(e) => {
                        setStateNewMunicipio(e.target.value);
                        console.log(e.target.value);
                      }}
                      type="text"
                      sx={{ width: "22%" }}
                    />
                    <CustomTextField
                      label="UF"
                      variant="outlined"
                      value={stateNewUF}
                      select
                      onChange={(e) => {
                        setStateNewUF(e.target.value);
                        console.log(e.target.value);
                      }}
                      type="text"
                      sx={{ width: "8%" }}
                    />
                  </div>
                </div>
              </CustomAccordionDetails>
            </CustomAccordion>

            <CustomAccordion
              expanded={statePanel3IsOpen}
              onChange={handleChange3()}
            >
              <CustomAccordionSummary
                expandIcon={
                  statePanel3IsOpen === true ? <RemoveIcon /> : <AddIcon />
                }
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>{"Documentos"}</Typography>
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <div className="cadastro-documentos-input">
                  <CustomTextField
                    label="RG"
                    variant="outlined"
                    value={stateNewRG}
                    onChange={(e) => {
                      setStateNewRG(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="text"
                    sx={{ width: "40%" }}
                  />
                  <CustomTextField
                    label="CPF"
                    variant="outlined"
                    value={stateNewCPF}
                    onChange={(e) => {
                      setStateNewCPF(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="text"
                    sx={{ width: "40%" }}
                  />
                  <CustomTextField
                    label="Data de Expedição"
                    variant="outlined"
                    value={stateNewDtExpedicao}
                    onChange={(e) => {
                      setStateNewDtExpedicao(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="text"
                  />

                  <CustomTextField
                    label="Org. Exped."
                    variant="outlined"
                    value={stateNewOrgaoExpedidor}
                    select
                    sx={{ width: 200 }}
                    onChange={(e) => {
                      setStateOrgaoExpedidor(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="text"
                  >
                    {orgaoExpedidor.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                </div>
              </CustomAccordionDetails>
            </CustomAccordion>
            <div className="cadastro-button-documentos">
              <SubmitButton
                variant="outlined"
                endIcon={<SaveOutlinedIcon />}
                onClick={handleInsertNewStudent}
              >
                Gravar
              </SubmitButton>
              <BackButton
                variant="outlined"
                endIcon={<CleaningServicesIcon />}
                onClick={handleClear}
              >
                Limpar
              </BackButton>
            </div>
          </form>
        </div>
  );
}
