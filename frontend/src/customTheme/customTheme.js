import { createTheme } from '@mui/material';
import "typeface-orbitron";

export const themeMain = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#d610ea',
      light: '#ff00fb',
      contrastText:'#ec7037'
    },
    secondary: {
      main: '#f50057',
      light: '#37daec'
    },
    background: {
      default: '#B9EDDD',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2ec1e4',
      secondary: '#dc3ca1',
    },
    success: {
      main: '#FFABAB',
    },
    info: {
      main: '#8d08cb', 
    },
  },
  typography: {
    h1: {
      fontSize: '5rem',
      fontWeight: 'bold'
    }, 
    h2: {
      fontSize: '3rem',
      fontWeight: 'bold'
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 'bold'
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 'bold' 
    },
    h6: {
      fontSize: '0.8rem',
      fontWeight: 'bold' 
    },
    textBg: {
      fontSize: '2rem',
      fontWeight: 'light'
    },
    textMd: {
      fontSize: '0.8rem',
      fontWeight: 'light'
    },
    textSm: {
      fontSize: '0.5rem',
      fontWeight: 'light'
    },
    fontFamily: 'orbitron',
    fontSize: 8,
  },
});

