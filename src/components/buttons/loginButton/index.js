import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const LoginButton = styled(Button)(({ theme }) => ({
    color: 'white', 
    borderColor: 'white',
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", 
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
    borderRadius: '20px', 
    height: '50px',
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderColor: 'white',
      color: 'black', 
    },
  }));