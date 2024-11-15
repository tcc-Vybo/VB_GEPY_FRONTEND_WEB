import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const LoginTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#fff',        // Fundo branco
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',  // Sombra preta
  borderRadius: '20px',            // Bordas arredondadas
  borderColor: 'rgba(0, 0, 314, 0.7)',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',  // Remove a borda visível inicialmente
    },
    '&:hover fieldset': {
      borderColor: 'transparent',  // Remove a borda ao passar o mouse
      boxShadow: 'none',           // Remove a sombra ao passar o mouse
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(0, 0, 314, 0.7)',  // Animação da borda com sombra preta ao focar
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',  // Aumenta a sombra ao focar
      borderRadius: '20px'
    },
    
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: 'rgba(0, 0, 314, 0.7)',  // Cor do rótulo ao focar
    fontSize: '16px',
    fontWeight: 'bold'
  },
  '& .MuiInputBase-input': {
    fontSize: '16px',
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px #fff inset', // Altera a cor de fundo do autofill
      WebkitTextFillColor: '#000', // Cor do texto no autofill
      borderRadius: '20px'
    },
    '&:-webkit-autofill:hover, &:-webkit-autofill:focus': {
      WebkitBoxShadow: '0 0 0 100px #fff inset', // Estilo ao focar no campo autofill
      WebkitTextFillColor: '#000', // Estilo do texto ao focar no campo autofill
    },
  },
}));
