// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff0000', 
    },
    secondary: {
      main: '#b4b4b4',
    },
    background: {
      default: '#000000', 
      paper: '#1a1a1a', 
    },
    text: {
      primary: '#ff0000', 
      secondary: '#b6b6b6',
    },
    divider: '#ff0000',
    icon: {
      main: '#ffffff',
      hover: '#ff0000'
    },
    info:{
      main:'#00ccff',
    },

  },
  typography: {
    fontFamily: '"Courier New", Courier, monospace', 
    h1: { fontWeight: 700, fontSize: '3rem', color: '#ff0000' },
    h2: { fontWeight: 700, fontSize: '2.5rem', color: '#ff0000' },
    h3: { fontWeight: 700, fontSize: '2rem', color: '#ff0000' },
    h4: { fontWeight: 700, fontSize: '1.75rem', color: '#ff0000' },
    h5: { fontWeight: 700, fontSize: '1.5rem', color: '#ff0000' },
    h6: { fontWeight: 700, fontSize: '1.25rem', color: '#ff0000' },
    body1: { color: '#ffffff' },
    body2: { color: '#cccccc' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
        contained: {
          backgroundColor: '#dd2121',
          color: '#ffffff',
          '&:hover': { backgroundColor: '#b30000' },
        },
        outlined: {
          borderColor: '#ff0000',
          color: '#ff0000',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': { color: '#ffffff' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#ff0000' },
            '&:hover fieldset': { borderColor: '#ff3333' },
            '&.Mui-focused fieldset': { borderColor: '#ff6666' },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          borderRadius: '12px',
        },
      },
    },
  },
});

export default theme;
