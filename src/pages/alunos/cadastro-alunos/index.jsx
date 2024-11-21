import { useState } from "react";
import "./style.css";

import { SubmitButton } from "../../../components/buttons/submitButton/index";
import { ClearButton } from "../../../components/buttons/clearButton/index";
import { CustomTextField } from "../../../components/textFields/customTextField/index";
import { CustomAccordion } from "../../../components/customAccordion/index";
import { CustomAccordionSummary } from "../../../components/customAccordion/index";
import { CustomAccordionDetails } from "../../../components/customAccordion/index";

import MenuItem from "@mui/material/MenuItem";
import { Typography, Box } from "@mui/material";
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

const relacaoArray = [
  {
    value: "Pai",
    label: "Pai",
  },
  {
    value: "Mãe",
    label: "Mãe",
  },
  {
    value: "Tio",
    label: "Tio",
  },
  {
    value: "Tia",
    label: "Tia",
  },
  {
    value: "Avô",
    label: "Avô",
  },
  {
    value: "Avó",
    label: "Avó",
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

const currentDate = new Date();
const formatedDate = format(currentDate, "dd/MM/yyyy");
const formatedDateForInput = format(currentDate, "yyyy-MM-dd");

export default function CadastroAlunos() {
  //Dados Pessoais
  const [stateNewNomeCompleto, setStateNewNomeCompleto] = useState("");
  const [stateNewCidadeNascimento, setStateNewCidadeNascimento] = useState("");
  const [stateNewDataNascimento, setStateNewDataNascimento] = useState("");
  const [stateNewDataNascimentoFormatted, setStateNewDataNascimentoFormatted] = useState("")
  const [stateNewUfNascimento, setStateNewUfNascimento] = useState("");
  const [stateNewNacionalidade, setStateNewNacionalidade] = useState("");
  const [stateNewGenero, setStateNewGenero] = useState("");
  const [stateNewCorRaca, setStateNewCorRaca] = useState("");
  const [stateNewNecessidades, setStateNewNecessidades] = useState("");
  const [stateNewTelefoneAluno, setStateNewTelefoneAluno] = useState("");

  //Dados Residenciais
  const [stateNewCep, setStateNewCep] = useState("");
  const [stateNewEndereco, setStateNewEndereco] = useState("");
  const [stateNewNumero, setStateNewNumero] = useState(0);
  const [stateNewComplemento, setStateNewComplemento] = useState("");
  const [stateNewBairro, setStateNewBairro] = useState("");
  const [stateNewMunicipio, setStateNewMunicipio] = useState("");
  const [stateNewUF, setStateNewUF] = useState("");

  //Dados Registro
  const [stateNewRG, setStateNewRG] = useState("");
  const [stateNewCPF, setStateNewCPF] = useState("");
  const [stateNewDtEmissao, setStateNewDtEmissao] = useState("");
  const [stateNewStateNewDtEmissaoFormatted, setStateNewStateNewDtEmissaoFormatted] = useState("")
  const [stateNewOrgaoExpedidor, setStateNewOrgaoExpedidor] = useState("");

  const [stateNewNomeResponsavel, setStateNewNomeResponsavel] = useState("");
  const [stateNewCpfResponsavel, setStateNewCpfResponsavel] = useState("");
  const [stateNewRelacao, setStateNewRelacao] = useState("");
  const [stateNewTelefoneResponsavel, setStateNewTelefoneResponsavel] =
    useState("");
  const [stateNewEmailResponsavel, setStateNewEmailResponsavel] = useState("");

  const [statePanel1IsOpen, setStatePanel1IsOpen] = useState(true);
  const [statePanel2IsOpen, setStatePanel2IsOpen] = useState(true);
  const [statePanel3IsOpen, setStatePanel3IsOpen] = useState(true);
  const [statePanel4IsOpen, setStatePanel4IsOpen] = useState(true);

  const handleDataNascimentoChange = (e) => {
    const selectedDate = parse(e.target.value, "yyyy-MM-dd", new Date());
    setStateNewDataNascimento(e.target.value);
    setStateNewDataNascimentoFormatted(format(selectedDate, "dd/MM/yyyy"));
  };

  const handleDtEmissaoChange = (e) => {
    const selectedDate = parse(e.target.value, "yyyy-MM-dd", new Date());
    setStateNewDtEmissao(e.target.value);
    setStateNewStateNewDtEmissaoFormatted(format(selectedDate, "dd/MM/yyyy"));
  };

  const objectStudentData = {
    // Dados Pessoais
    nomeCompleto: stateNewNomeCompleto,
    dataNascimento: stateNewDataNascimentoFormatted,
    cidadeNascimento: stateNewCidadeNascimento,
    ufNascimento: stateNewUfNascimento,
    nacionalidade: stateNewNacionalidade,
    genero: stateNewGenero,
    corRaca: stateNewCorRaca,
    necessidades: stateNewNecessidades,
    telefoneAluno: stateNewTelefoneAluno,

    // Dados Residenciais
    cep: stateNewCep,
    endereco: stateNewEndereco,
    numeroEndereco: stateNewNumero,
    complemento: stateNewComplemento,
    bairro: stateNewBairro,
    municipio: stateNewMunicipio,
    uf: stateNewUF,

    // Dados Registro
    numeroRegistro: stateNewRG,
    cpf: stateNewCPF,
    dataEmissao: stateNewStateNewDtEmissaoFormatted,
    orgaoExpedidor: stateNewOrgaoExpedidor,

    // Dados do Responsável
    nomeResponsavel: stateNewNomeResponsavel,
    cpfResponsavel: stateNewCpfResponsavel,
    relacao: stateNewRelacao,
    telefoneResponsavel: stateNewTelefoneResponsavel,
    emailResponsavel: stateNewEmailResponsavel,
  };
  const handleChange1 = () => (event, isExpanded) =>
    setStatePanel1IsOpen(isExpanded); // Se expandir, marca o painel. Se fechar, define como false  };

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
    // Sets para Dados Pessoais
    setStateNewNomeCompleto("");
    setStateNewDataNascimento("");
    setStateNewCidadeNascimento("");
    setStateNewUfNascimento("");
    setStateNewNacionalidade("");
    setStateNewGenero("");
    setStateNewCorRaca("");
    setStateNewNecessidades("");
    setStateNewTelefoneAluno("");

    // Sets para Dados Residenciais
    setStateNewCep("");
    setStateNewEndereco("");
    setStateNewNumero("");
    setStateNewComplemento("");
    setStateNewBairro("");
    setStateNewMunicipio("");
    setStateNewUF("");

    // Sets para Dados de Registro
    setStateNewRG("");
    setStateNewCPF("");
    setStateNewDtEmissao("");
    setStateNewOrgaoExpedidor("");

    // Sets para Dados do Responsável
    setStateNewNomeResponsavel("");
    setStateNewCpfResponsavel("");
    setStateNewRelacao("");
    setStateNewTelefoneResponsavel("");
    setStateNewEmailResponsavel("");
  };

  const handleInsertNewStudent = () => {
    console.log("CHAMANDO");
    const urlInsertNewStudent = `https://vb-gepy-backend-web.onrender.com/aluno`;

    fetch(urlInsertNewStudent, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectStudentData),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.message === "Aluno cadastrado com sucesso!!") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sucesso!",
            text: "Aluno cadastado com sucesso!!",
            showConfirmButton: false,
            timer: 1800,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "ERRO!",
            text: "Erro ao cadastrar Aluno!!",
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
                  label="Nome Completo"
                  value={stateNewNomeCompleto}
                  onChange={(e) => {
                    setStateNewNomeCompleto(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "60%" }}
                />
                <CustomTextField
                  label="Necessidades"
                  variant="outlined"
                  value={stateNewNecessidades}
                  onChange={(e) => {
                    setStateNewNecessidades(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "50%" }}
                />
              </div>
              <div className="cadastro-dados-pessoais-content-middle">
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
                  label="Data de Nasc."
                  variant="outlined"
                  value={stateNewDataNascimento}
                  onChange={handleDataNascimentoChange}
                  type="date"
                  focused={true}
                  sx={{ width: "40%" }}
                />
                <CustomTextField
                  label="Tel. Aluno"
                  variant="outlined"
                  value={stateNewTelefoneAluno}
                  onChange={(e) => {
                    setStateNewTelefoneAluno(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "50%" }}
                />
              </div>
              <div className="cadastro-dados-pessoais-content-bottom">
                <CustomTextField
                  label="Cidade de Nasc."
                  variant="outlined"
                  value={stateNewCidadeNascimento}
                  onChange={(e) => {
                    setStateNewCidadeNascimento(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "50%" }}
                />
                <CustomTextField
                  label="UF de Nasc."
                  variant="outlined"
                  value={stateNewUfNascimento}
                  onChange={(e) => {
                    setStateNewUfNascimento(e.target.value);
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
            <Typography>{"Endereço Residencial"}</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <div className="cadastro-endereco-residencial-content">
              <div className="cadastro-endereco-residencial-content-top">
                <CustomTextField
                  label="CEP"
                  variant="outlined"
                  value={stateNewCep}
                  onChange={(e) => {
                    setStateNewCep(e.target.value);
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
            <div className="cadastro-documentos-content">
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
                label="Data de Emissao"
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
                  setStateNewOrgaoExpedidor(e.target.value);
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
            <Typography>{"Dados Responsável"}</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <div className="cadastro-responsavel-content">
              <div className="cadastro-responsavel-content-top">
                <CustomTextField
                  label="Nome Responsável"
                  variant="outlined"
                  value={stateNewNomeResponsavel}
                  onChange={(e) => {
                    setStateNewNomeResponsavel(e.target.value);
                    console.log(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "60%" }}
                />
                <CustomTextField
                  label="Email Responsável"
                  variant="outlined"
                  value={stateNewEmailResponsavel}
                  sx={{ width: "40%" }}
                  onChange={(e) => {
                    setStateNewEmailResponsavel(e.target.value);
                    console.log(e.target.value);
                  }}
                  type="text"
                />
              </div>
              <div className="cadastro-responsavel-content-bottom">
                <CustomTextField
                  label="CPF Responsável"
                  variant="outlined"
                  value={stateNewCpfResponsavel}
                  onChange={(e) => {
                    setStateNewCpfResponsavel(e.target.value);
                    console.log(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "50%" }}
                />
                <CustomTextField
                  label="Relação"
                  variant="outlined"
                  select
                  value={stateNewRelacao}
                  onChange={(e) => {
                    setStateNewRelacao(e.target.value);
                    console.log(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "20%" }}
                >
                  {relacaoArray.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomTextField>
                <CustomTextField
                  label="Telefone Responsável"
                  variant="outlined"
                  value={stateNewTelefoneResponsavel}
                  sx={{ width: "30%" }}
                  onChange={(e) => {
                    setStateNewTelefoneResponsavel(e.target.value);
                    console.log(e.target.value);
                  }}
                  type="text"
                />
              </div>
            </div>
          </CustomAccordionDetails>
        </CustomAccordion>
        <div className="cadastro-button-documentos">
          <SubmitButton
            variant="outlined"
            startIcon={<SaveOutlinedIcon />}
            onClick={handleInsertNewStudent}
          >
            Gravar
          </SubmitButton>
          <ClearButton
            variant="outlined"
            startIcon={<CleaningServicesIcon />}
            onClick={handleClear}
          >
            Limpar
          </ClearButton>
        </div>
      </form>
    </div>
  );
}
