// CustomAccordion.js
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/system';

// Estilizando o Accordion com o styled do Material-UI
const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#f0f4c3',  // Cor de fundo personalizada
  color: '#333',               // Cor do texto
  border: '1px solid #ccc',     // Borda personalizada
  boxShadow: 'none',            // Remove a sombra padrão
  marginBottom: '8px',          // Margem inferior entre os accordions
  '&:before': {
    display: 'none',            // Remove o divisor entre accordions
  },
  '&.Mui-expanded': {
    marginBottom: 'none',             // Remover margem ao expandir
  },
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: '#ccc',   // Cor de fundo do header do Accordion
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)', // Personaliza o ícone quando expandido
  },
  '& .MuiTypography-root': {
    fontWeight: 'bold',         // Estilo personalizado do texto
  },
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: '#ccc',   // Cor de fundo dos detalhes
}));

export { CustomAccordion, CustomAccordionSummary, CustomAccordionDetails}