import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff914c',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#383838',
    },
    text: {
      primary: '#424242',
    },
    background: {
      default: '#f7f7f7'
    }
  },
  // palette: {
  //   type: 'dark',
  //   primary: {
  //     main: '#00bcd4',
  //     contrastText: '#ffffff',
  //   },
  //   secondary: {
  //     main: '#f9a825',
  //   },
  //   text: {
  //     primary: '#e0e0e0',
  //   },
  // },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
