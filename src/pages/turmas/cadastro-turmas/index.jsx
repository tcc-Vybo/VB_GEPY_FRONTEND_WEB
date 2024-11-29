import "./styles.css";

import { CircularProgress, MenuItem, Typography } from "@mui/material";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
} from "../../../components/customAccordion/index";

import { CustomTextField } from "../../../components/textFields/customTextField";
import { SubmitButton } from "../../../components/buttons/submitButton";
import { SaveOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";

export default function CadastroTurma() {
  const [stateNewNome, setStateNewNome] = useState("");

  const [statePanel1IsOpen, setStatePanel1IsOpen] = useState(true);
  const handleChange1 = () => (event, isExpanded) =>
    setStatePanel1IsOpen(isExpanded);
  const [stateInsertTurmaLoanding, setStateInsertTurmaLoanding] = useState(false)
  const objectTurmaData = {
    nome: stateNewNome
  }

  const handleInsertTurma = async () => {
    setStateInsertTurmaLoanding(true);
    const urlToInsertTurma = `https://vb-gepy-backend-web.onrender.com/turma`;

    try {
      await fetch(urlToInsertTurma, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objectTurmaData),
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (
          data.message === "Turma cadastrada com sucesso!!"
        ) {
          Swal.fire({
            position: "center",
            icon: "success",
            text: data.message,
            showConfirmButton: false,
            timer: 1800,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            text: data.message,
            showConfirmButton: false,
            timer: 1800,
          });
        }
      })
    } catch (err) {
      console.error("Erro ao buscar Funcionarios:", err);
      Swal.fire({
        position: "top-right",
        icon: "error",
        text: "Erro ao buscar Funcionarios!",
        showConfirmButton: false,
        timer: 2000,
      });
    }finally {
      setStateInsertTurmaLoanding(false); // Desativa o estado de loading
    }
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
            <Typography>{"Inserir Turma"}</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <div className="busca-recado-content">
              <div className="busca-recado-content-top">
                <CustomTextField
                  label="Nome"
                  value={stateNewNome}
                  onChange={(e) => {
                    setStateNewNome(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "60%" }}
                />
              </div>
              <div className="busca-recado-content-top">
              <SubmitButton
                  onClick={handleInsertTurma}
                  sx={{ mt: 2 }}
                  variant="outlined"
                  startIcon={
                    stateInsertTurmaLoanding ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <SaveOutlined />
                    )
                  }
                >
                  {stateInsertTurmaLoanding ? "Carregando" : "Gravar"}
                </SubmitButton>
              </div>
            </div>
          </CustomAccordionDetails>
        </CustomAccordion>
      </form>
    </div>
  );
}
