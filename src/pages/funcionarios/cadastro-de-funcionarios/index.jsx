import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import { SubmitButton } from "../../../components/buttons/submitButton";
import { ClearButton } from "../../../components/buttons/clearButton/index";
import { CustomTextField } from "../../../components/textFields/customTextField/index";
import { CustomAccordion } from "../../../components/customAccordion/index";
import { CustomAccordionSummary } from "../../../components/customAccordion/index";
import { CustomAccordionDetails } from "../../../components/customAccordion/index";

import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

import Swal from "sweetalert2";
import { format, parse } from "date-fns";

const ufArray = [
  {
    value: "SP",
    label: "SP",
  },
  {
    value: "DF",
    label: "DF",
  },
  {
    value: "RJ",
    label: "RJ",
  },
];

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

const corRacaArray = [
  {
    value: "Preto",
    label: "Preto",
  },
  {
    value: "Branco",
    label: "Branco",
  },
  {
    value: "Pardo",
    label: "Pardo",
  },
  {
    value: "Amarelo",
    label: "Amarelo",
  },
];

export default function CadastroFuncionarios() {
  const navigate = useNavigate();
  //Dados Pessoais
  const [stateNewNome, setStateNewNome] = useState();
  const [stateNewDtNasc, setStateNewDtNasc] = useState();
  const [stateNewDtNascFormatted, setStateNewDtNascFormatted] = useState();
  const [stateNewGenero, setStateNewGenero] = useState();
  const [stateNewTelefone, setStateNewTelefone] = useState();
  const [stateNewEmail, setStateNewEmail] = useState();
  const [stateNewCidadeNasc, setStateNewCidadeNasc] = useState();
  const [stateNewUfNasc, setStateNewUfNasc] = useState();
  const [stateNewNacionalidade, setStateNewNacionalidade] = useState();
  const [stateNewCorRaca, setStateNewCorRaca] = useState();

  //Dados Profissionais
  const [stateNewCargo, setStateNewCargo] = useState();
  const [stateNewDepartamento, setStateNewDepartamento] = useState();
  const [stateNewDtAdmissao, setStateNewDtAdmissao] = useState();
  const [stateNewDtAdmissaoFormatted, setStateNewDtAdmissaoFormatted] = useState();

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
  const [stateNewDtEmissao, setStateNewDtEmissao] = useState();
  const [stateNewDtEmissaoFormatted, setStateNewDtEmissaoFormatted] = useState("")
  const [stateNewOrgaoExpedidor, setStateOrgaoExpedidor] = useState();

  const handleDtAdmissaoChange = (e) => {
    const selectedDate = parse(e.target.value, "yyyy-MM-dd", new Date());
    setStateNewDtAdmissao(e.target.value);
    setStateNewDtAdmissaoFormatted(format(selectedDate, "dd/MM/yyyy"));
  };
  
  const handleDtNascChange = (e) => {
    const selectedDate = parse(e.target.value, "yyyy-MM-dd", new Date());
    setStateNewDtNasc(e.target.value);
    setStateNewDtNascFormatted(format(selectedDate, "dd/MM/yyyy"));
  };

  const handleDtEmissaoChange = (e) => {
    const selectedDate = parse(e.target.value, "yyyy-MM-dd", new Date());
    setStateNewDtEmissao(e.target.value);
    setStateNewDtEmissaoFormatted(format(selectedDate, "dd/MM/yyyy"));
  };

  const objectEmployeeData = {
    nomeCompleto: stateNewNome,
    dataNascimento: stateNewDtNascFormatted,
    genero: stateNewGenero,
    telefone: stateNewTelefone,
    email: stateNewEmail,
    cargo: stateNewCargo,
    departamento: stateNewDepartamento,
    dataAdmissao: stateNewDtAdmissaoFormatted,
    cep: stateNewCEP,
    endereco: stateNewEndereco,
    numero: stateNewNumero,
    complemento: stateNewComplemento,
    bairro: stateNewBairro,
    cidade: stateNewMunicipio,
    cidadeNascimento: stateNewCidadeNasc,
    ufNascimento: stateNewUfNasc,
    nacionalidade: stateNewNacionalidade,
    corRaca: stateNewCorRaca,
    uf: stateNewUF,
    numeroRegistro: stateNewRG,
    cpf: stateNewCPF,
    dataEmissao: stateNewDtEmissaoFormatted,
    orgaoExpedidor: stateNewOrgaoExpedidor,
  };

  const handleInsertNewEmployee = () => {
    const urlInsertNewEmployee = `https://vb-gepy-backend-web.onrender.com/funcionario`;

    if (!objectEmployeeData.dataNascimento) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Erro",
        text: `Campo vazio: ${objectEmployeeData.dataNascimento}`,
        showConfirmButton: true,
      });
    }else{
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
    }
  };

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

    // Dados Profissionais
    setStateNewCargo("");
    setStateNewDepartamento("");
    setStateNewDtAdmissao("");

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
    setStateNewDtEmissao("");
    setStateOrgaoExpedidor("");
  };

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
              <div className="cadastro-dados-pessoais-content-middle">
                <CustomTextField
                  label="Nascimento"
                  variant="outlined"
                  value={stateNewDtNasc}
                  onChange={handleDtNascChange}
                  type="date"
                  focused={true}
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
              <div className="cadastro-dados-pessoais-content-bottom">
                <CustomTextField
                  label="Cidade Nascimento"
                  variant="outlined"
                  value={stateNewCidadeNasc}
                  onChange={(e) => {
                    setStateNewCidadeNasc(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "50%" }}
                />
                <CustomTextField
                  label="UF Nascimento"
                  variant="outlined"
                  value={stateNewUfNasc}
                  onChange={(e) => {
                    setStateNewUfNasc(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "50%" }}
                />
                <CustomTextField
                  label="Nacionalidade"
                  variant="outlined"
                  value={stateNewNacionalidade}
                  onChange={(e) => {
                    setStateNewNacionalidade(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "50%" }}
                />
                <CustomTextField
                  label="Cor / Raça"
                  variant="outlined"
                  select
                  value={stateNewCorRaca}
                  onChange={(e) => {
                    setStateNewCorRaca(e.target.value);
                  }}
                  sx={{ width: "50%" }}
                >
                  {corRacaArray.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomTextField>
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
            <Typography>{"Dados Profissionais"}</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <div className="cadastro-dados-profissionais-content">
              <CustomTextField
                label="Cargo"
                variant="outlined"
                value={stateNewCargo}
                onChange={(e) => {
                  setStateNewCargo(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
                sx={{ width: "50%" }}
              />
              <CustomTextField
                label="Departamento"
                variant="outlined"
                value={stateNewDepartamento}
                onChange={(e) => {
                  setStateNewDepartamento(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
                sx={{ width: "25%" }}
              />
              <CustomTextField
                label="Data de Admissão"
                variant="outlined"
                value={stateNewDtAdmissao}
                onChange={handleDtAdmissaoChange}
                type="date"
                focused={true}
                sx={{ width: "25%" }}
              />
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
                >
                  {ufArray.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </div>
            </div>
          </CustomAccordionDetails>
        </CustomAccordion>

        <CustomAccordion
          expanded={statePanel4IsOpen}
          onChange={handleChange4()}
        >
          <CustomAccordionSummary
            expandIcon={
              statePanel4IsOpen === true ? <RemoveIcon /> : <AddIcon />
            }
            aria-controls="panel4a-content"
            id="panel4a-header"
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
                value={stateNewDtEmissao}
                onChange={handleDtEmissaoChange}
                type="date"
                focused={true}
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
            onClick={handleInsertNewEmployee}
          >
            Gravar
          </SubmitButton>
          <ClearButton
            variant="outlined"
            endIcon={<CleaningServicesIcon />}
            onClick={handleClear}
          >
            Limpar
          </ClearButton>
        </div>
      </form>
    </div>
  );
}
