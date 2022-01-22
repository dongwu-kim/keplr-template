import createTheme from '@mui/material/styles/createTheme';

// example : font import
// import Compagnie2woff from "./fonts/Compagnie-II.woff";
import { palette } from './palette';

const theme = createTheme({
  typography: {
    fontFamily: 'Manrope, Compagnie3, Compagnie2, Arial',
  },
  components: {
    MuiCssBaseline: {},
    // font import example
    //   styleOverrides: `
    //     @font-face {
    //       font-family: 'Compagnie2';
    //       font-style: normal;
    //       font-weight: 400;
    //       src: url(${Compagnie2woff}) format('woff');
    //     }
    //   `,
    // },
  },
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
});

export default theme;
