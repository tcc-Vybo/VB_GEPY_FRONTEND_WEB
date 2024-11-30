import "./styles.css";

import { MenuItem, Typography } from "@mui/material";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove"
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

import { ClearButton } from "../../components/buttons/clearButton/index.js"; 
import { SubmitButton } from "../../components/buttons/submitButton/index";
import {
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
} from "../../components/customAccordion/index";

import { CustomTextField } from "../../components/textFields/customTextField";
import { CustomDateTextField } from "../../components/textFields/customDateTextField"

import Swal from "sweetalert2";

export default function NewsLetter() {
  const [stateNewTitulo, setStateNewTitulo] = useState("");
  const [stateNewDescricao, setStateNewDescricao] = useState("");
  const [stateNewSubtitulo, setStateNewSubtitulo] = useState("");
  const [stateNewTexto, setStateNewTexto] = useState("");
  const [stateNewTipoRecado, setStateNewTipoRecado] = useState("");

  const [statePanel1IsOpen, setStatePanel1IsOpen] = useState(true);

  const handleChange1 = () => (event, isExpanded) =>
    setStatePanel1IsOpen(isExpanded);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClear = () => {
    
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
            <Typography>{"Inserir Recado"}</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <div className="newsletter-content">
              <div className="newsletter-content-top">
                <CustomTextField
                  label="Título"
                  value={stateNewTitulo}
                  onChange={(e) => {
                    setStateNewTitulo(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "60%" }}
                />
                <CustomTextField
                  label="Subtitulo"
                  variant="outlined"
                  value={stateNewSubtitulo}
                  onFocus={() => {
                    handleGetFuncionario();
                  }}
                  onChange={(e) => {
                    setStateNewSubtitulo(e.target.value);
                    console.log(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "50%" }}
                />
              </div>
              <div className="newsletter-content-middle">
                <CustomTextField
                  label="Descrição"
                  variant="outlined"
                  value={stateNewDescricao}
                  onChange={(e) => {
                    setStateNewDescricao(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "60%" }}
                />
                <CustomTextField
                  label="Texto"
                  variant="outlined"
                  value={stateNewTexto}
                  onFocus={() => {
                    handleGetTurma();
                  }}
                  onChange={(e) => {
                    setStateNewTexto(e.target.value);
                    console.log(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "40%" }}
                />
              </div>
              <div className="newsletter-content-middle">
                <SubmitButton
                  variant="outlined"
                  startIcon={<SaveOutlinedIcon />}
                  sx={{width: "100%"}}
                >
                  Gravar
                </SubmitButton>
              </div>
            </div>
          </CustomAccordionDetails>
        </CustomAccordion>
      </form>
    </div>
  );
}
