import React, { useState } from "react";
import { Box, Modal, Typography, Button } from "@mui/material";
import { BackButton } from "../buttons/backButton/index";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RecadoCard from "../../components/reacadoCard/index.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-39%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function FloatingModal({ open, handleClose, recadosArray }) {
  const [expandedCards, setExpandedCards] = useState({}); // Mapeia o estado de expansão

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id], // Alterna o estado do cartão específico
    }));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        backdropFilter: "blur(3px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Lista de recados
        </Typography>
        {/* ESSE AQUI */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "10px",
            height: "400px",
            maxHeight: "400px", // Altura máxima (ajuste conforme necessário)
            overflowY: "hidden", // Ativa o scroll vertical
            paddingRight: "10px", // Espaço extra para o scroll
          }}
          
        >
          {recadosArray.length > 0 ? (
            recadosArray.map((item) => (
              <RecadoCard
                key={item.id}
                id={item.id}
                titulo={item.titulo}
                descricao={item.descricao}
                dataMarcada={item.dataMarcada}
                dataEnvio={item.dataEnvio}
                destinatario={item.destinatario}
                remetenteCompleto={item.remetenteCompleto}
                remetenteInicial={item.remetenteInicial}
                tipoRecado={item.tipoRecado}
                expandedCards={expandedCards} // Estado atual de expansão
                toggleExpand={toggleExpand} // Função para alternar expansão
              />
            ))
          ) : (
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Nenhum recado encontrado
            </Typography>
          )}
        </Box>
        <BackButton
          onClick={handleClose}
          sx={{ mt: 2 }}
          startIcon={<ArrowBackIcon />}
          variant="outlined"
        >
          Voltar
        </BackButton>
      </Box>
    </Modal>
  );
}
