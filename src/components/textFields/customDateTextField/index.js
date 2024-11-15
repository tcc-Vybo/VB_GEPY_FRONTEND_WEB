import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CustomDateTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#fff',        // Fundo branco
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',  // Sombra preta
  borderRadius: '4px',            // Bordas arredondadas
  borderColor: 'none',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',  // Remove a borda visível inicialmente
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(0, 0, 314, 0.7)',  // Animação da borda com sombra preta ao focar
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',  // Aumenta a sombra ao focar
    },
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: 'rgba(0, 0, 314, 0.7)',  // Cor do rótulo ao focar
  }
}));
