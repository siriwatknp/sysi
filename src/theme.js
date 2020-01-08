import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import { headerFontFamily, bodyFontFamily } from './typography';

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#FF9A3E',
      },
      grey: blueGrey,
    },
    typography: {
      fontFamily: bodyFontFamily.join(','),
      h1: {
        fontFamily: headerFontFamily.join(','),
        color: blueGrey[700],
      },
      h2: {
        fontFamily: headerFontFamily.join(','),
        color: blueGrey[700],
      },
      h3: {
        fontFamily: headerFontFamily.join(','),
        color: blueGrey[700],
      },
      h4: {
        fontFamily: headerFontFamily.join(','),
        color: blueGrey[700],
      },
      h5: {
        fontFamily: headerFontFamily.join(','),
        color: blueGrey[700],
      },
      h6: {
        fontFamily: headerFontFamily.join(','),
        color: blueGrey[700],
      },
      button: {
        fontFamily: headerFontFamily.join(','),
        fontWeight: 'bold',
        fontSize: '1rem',
        letterSpacing: 1,
      },
    },
    overrides: {
      MuiButton: {
        contained: {
          backgroundColor: blueGrey[50],
          color: blueGrey[600],
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          color: '#fff',
        },
      },
    },
  })
);
