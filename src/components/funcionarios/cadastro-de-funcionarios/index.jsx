import { useState } from "react";
import "./style.css";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { CustomButton } from "../../submitButton/index";
import { CustomTextField } from "../../customTextField/index";
import MenuItem from "@mui/material/MenuItem";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    value: "Polícia Civil",
    label: "Polícia Civil",
  },
  {
    value: "DETRAN",
    label: "DETRAN",
  },
];

export default function CadastroFuncionarios() {
  //Dados Pessoais
  const [stateNewNome, setStateNewNome] = useState();
  const [stateNewDtNasc, setStateNewDtNasc] = useState();
  const [stateNewGenero, setStateNewGenero] = useState();
  const [stateNewTelefone, setStateNewTelefone] = useState();
  const [stateNewEmail, setStateNewEmail] = useState();

  //Dados Profissionais
  const [stateNewCargo, setStateNewCargo] = useState();
  const [stateNewDepartamento, setStateNewDepartamento] = useState();
  const [stateNewDtAdmissao, setStateNewDtAdmissao] = useState();

  //Dados Endereço
  const [stateNewCEP, setStateNewCEP] = useState();
  const [stateNewEndereco, setStateNewEndereco] = useState();
  const [stateNewNumero, setStateNewstateNewNumero] = useState();
  const [stateNewComplemento, setStateNewComplemento] = useState();
  const [stateNewBairro, setStateNewBairro] = useState();
  const [stateNewMunicipio, setStateNewMunicipio] = useState();
  const [stateNewUF, setStateNewUF] = useState();

  //Dados Registro
  const [stateNewRG, setStateNewRG] = useState();
  const [stateNewCPF, setStateNewCPF] = useState();
  const [stateNewDtExpedicao, setStateNewDtExpedicao] = useState();
  const [stateNewOrgaoExpedidor, setStateOrgaoExpedidor] = useState();

  //Accordion
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);  // Se expandir, marca o painel. Se fechar, define como false
  };

  const objectEmployeeData = {
    nomeCompleto: stateNewNome,
    dataNascimento: stateNewDtNasc,
    genero: stateNewGenero,
    telefone: stateNewTelefone,
    email: stateNewEmail,
    cargo: stateNewCargo,
    departamento: stateNewDepartamento,
    dataAdmissao: stateNewDtAdmissao,
    cep: stateNewCEP,
    endereco: stateNewEndereco,
    numero: stateNewNumero,
    complemento: stateNewComplemento,
    bairro: stateNewBairro,
    cidade: stateNewMunicipio,
    uf: stateNewUF,
    numeroRegistro: stateNewRG,
    cpf: stateNewCPF,
    dataEmissao: stateNewDtExpedicao,
    orgaoExpedidor: stateNewOrgaoExpedidor,
  };

  const handleInsertNewEmployee = () => {
    const urlInsertNewEmployee = `https://vb-gepy-backend-web.onrender.com/funcionario`;

    fetch(urlInsertNewEmployee, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectEmployeeData),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.message === "Funcionário cadastado com sucesso!!") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sucesso!",
            text: "Funcionário cadastado com sucesso!!",
            showConfirmButton: false,
            timer: 1800,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "ERRO!",
            text: "Erro ao cadastrar funcionário!!",
            showConfirmButton: false,
            timer: 1800,
          });
        }
        console.log("Success:", data);
      });
  };

  return (
    <div className="cadastro-container">
      <form method="POST">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{"Dados Pessoais"}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="cadastro-inputs">
              <CustomTextField
                label="Nome"
                onChange={(e) => {
                  setStateNewNome(e.target.value);
                }}
                type="text"
              />
              <CustomTextField
                label="Nascimento"
                variant="outlined"
                onChange={(e) => {
                  setStateNewDtNasc(e.target.value);
                }}
                type="text"
              />
              <CustomTextField
                label="Genero"
                variant="outlined"
                select
                sx={{ width: 200 }}
                onChange={(e) => {
                  setStateNewGenero(e.target.value);
                }}
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
                onChange={(e) => {
                  setStateNewTelefone(e.target.value);
                }}
                type="text"
              />

              <CustomTextField
                label="Email"
                variant="outlined"
                onChange={(e) => {
                  setStateNewEmail(e.target.value);
                }}
                type="text"
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>{"Dados Profissionais"}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="cadastro-inputs">
              <CustomTextField
                label="Cargo"
                variant="outlined"
                onChange={(e) => {
                  setStateNewCargo(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
              />
              <CustomTextField
                label="Departamento"
                variant="outlined"
                onChange={(e) => {
                  setStateNewDepartamento(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
              />
              <CustomTextField
                label="Data de Admissão"
                variant="outlined"
                onChange={(e) => {
                  setStateNewDtAdmissao(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>{"Endereço Residencial"}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="cadastro-inputs">
              <CustomTextField
                label="CEP"
                variant="outlined"
                onChange={(e) => {
                  setStateNewCEP(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
              />
              <CustomTextField
                label="Endereço"
                variant="outlined"
                onChange={(e) => {
                  setStateNewEndereco(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
              />
              <CustomTextField
                label="Nº"
                variant="outlined"
                onChange={(e) => {
                  setStateNewstateNewNumero(e.target.value);
                  console.log(e.target.value);
                }}
                type="number"
              />
              <CustomTextField
                label="Complemento"
                variant="outlined"
                onChange={(e) => {
                  setStateNewComplemento(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
              />
              <CustomTextField
                label="Bairro"
                variant="outlined"
                onChange={(e) => {
                  setStateNewBairro(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
              />
              <CustomTextField
                label="Município"
                variant="outlined"
                onChange={(e) => {
                  setStateNewMunicipio(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
              />
              <CustomTextField
                label="UF"
                variant="outlined"
                onChange={(e) => {
                  setStateNewUF(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography>{"Documentos"}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="cadastro-documentos-input">
              <div className="cadastro-documentos-input-left">
                <CustomTextField
                  label="RG"
                  variant="outlined"
                  onChange={(e) => {
                    setStateNewRG(e.target.value);
                    console.log(e.target.value);
                  }}
                  type="text"
                />
                <CustomTextField
                  label="CPF"
                  variant="outlined"
                  onChange={(e) => {
                    setStateNewCPF(e.target.value);
                    console.log(e.target.value);
                  }}
                  type="text"
                />
                <CustomTextField
                  label="Data de Expedição"
                  variant="outlined"
                  onChange={(e) => {
                    setStateNewDtExpedicao(e.target.value);
                    console.log(e.target.value);
                  }}
                  type="text"
                />

                <CustomTextField
                  label="Orgão Expeditor"
                  variant="outlined"
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
              <div className="cadastro-documentos-input-right">
                <CustomButton
                  variant="outlined"
                  endIcon={<SaveOutlinedIcon />}
                  onClick={handleInsertNewEmployee}
                >
                  Gravar
                </CustomButton>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </form>
    </div>
  );
}
