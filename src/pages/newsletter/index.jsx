import "./styles.css";

import { CircularProgress, MenuItem, Typography } from "@mui/material";
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
import { SaveOutlined } from "@mui/icons-material";

export default function NewsLetter() {
  const [stateNewTitulo, setStateNewTitulo] = useState("");
  const [stateNewImageUrl, setStateNewImageUrl] = useState("");
  const [stateNewTexto, setStateNewTexto] = useState("");
  const [stateNewSubtitulo, setStateNewSubtitulo] = useState("");

  const [statePanel1IsOpen, setStatePanel1IsOpen] = useState(true);

  const handleChange1 = () => (event, isExpanded) =>
    setStatePanel1IsOpen(isExpanded);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const objectNewsLetterData = {
    titulo: stateNewTitulo,
    subtitulo: stateNewSubtitulo,
    texto: stateNewTexto,
    imagemUrl: stateNewImageUrl
  }

  const [stateInsertNewsLetterLoading, setStateInsertNewsLetterLoading] = useState(false)

  const handleInsertNewsLetter = async () => {
    setStateInsertNewsLetterLoading(true);
    const urlToInsertNewsLetter = `https://vb-gepy-backend-web.onrender.com/news`;

    try {
      await fetch(urlToInsertNewsLetter, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objectNewsLetterData),
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (
          data.message === "Notícia postada com sucesso!!"
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
            text: "Erro ao postar notícia!!",
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
      setStateInsertNewsLetterLoading(false); // Desativa o estado de loading
    }
  }
  return (
    <div className="newsletter-content-parent">
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
            <div className="newsletter-content-children">
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
                  sx={{ width: "60%" }}
                />
                <CustomTextField
                  label="URL da Imagem"
                  variant="outlined"
                  value={stateNewImageUrl}
                  onChange={(e) => {
                    setStateNewImageUrl(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "40%" }}
                />
                
              </div>
              <div className="newsletter-content-middle">
                <SubmitButton
                  variant="outlined"
                  sx={{width: "100%"}}
                  onClick={handleInsertNewsLetter}
                  startIcon={
                    stateInsertNewsLetterLoading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <SaveOutlined />
                    )
                  }
                >
                  {stateInsertNewsLetterLoading ? "Carregando" : "Gravar"}
                </SubmitButton>
              </div>
            </div>
          </CustomAccordionDetails>
        </CustomAccordion>
      </form>
    </div>
  );
}
