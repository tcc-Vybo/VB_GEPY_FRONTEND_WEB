// CustomAccordion.js
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/system';

// Estilizando o Accordion com o styled do Material-UI
const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#ccc',  // Cor de fundo personalizada
  color: '#333',               // Cor do texto
  border: '1px solid #ccc',     // Borda personalizada
  borderRadius: '8px',
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
  borderRadius: '8px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)', // Personaliza o ícone quando expandido
  },
  '& .MuiTypography-root': {
    fontWeight: 'bold',         // Estilo personalizado do texto
  },
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: '#ccc',   // Cor de fundo dos detalhes
  borderRadius: '0px 0px 8px 8px',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
}));

export { CustomAccordion, CustomAccordionSummary, CustomAccordionDetails}