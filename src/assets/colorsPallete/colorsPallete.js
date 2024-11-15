import { createTheme } from '@mui/material/styles';

export const CustomTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    tertiary: {
      light: '#81c784',       
      main: '#4caf50',        
      dark: '#388e3c',        
      contrastText: '#fff',   
    },
  },
});
