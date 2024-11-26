import React from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';
import { BackButton } from "../buttons/backButton/index"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Estilos para o Modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-39%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

// Componente FloatingModal
export default function FloatingModal({ open, handleClose, recadosArray }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        backdropFilter: 'blur(3px)', // Efeito de desfoque no fundo
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escurecido com opacidade
      }}
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Lista de recados
        </Typography>
        {recadosArray ? recadosArray.map((item, index) => (
          <Typography key={index} id="modal-description" sx={{ mt: 2 }}>
            {`Id: ${item.id}`}
            {`Titulo: ${item.titulo}`}
          </Typography>
        )) : 
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Erro
        </Typography>
        }
        <BackButton 
        onClick={handleClose} 
        sx={{ mt: 2 }}
        startIcon={<ArrowBackIcon />}
        variant="outlined">
          Voltar
        </BackButton>
      </Box>
    </Modal>
  );
}
