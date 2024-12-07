import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const NewButton = styled(Button)(({ theme }) => ({
    color: 'blue', 
    borderColor: 'blue',
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", 
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', 
    height: '50px',
    "&:hover": {
      backgroundColor: "rgba(0, 0, 255, 0.1)",
      borderColor: 'blue',
      color: 'black', 
    },
  }));