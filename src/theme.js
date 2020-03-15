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
        text: {
          '&:hover': {
            backgroundColor: blueGrey[50],
          },
        },
        contained: {
          borderRadius: 40,
          paddingLeft: 20,
          paddingRight: 20,
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
          transition:
            '250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          backgroundColor: '#ffbd80',
          color: blueGrey[900],
          '&:hover': {
            backgroundColor: '#FF9A3E',
          },
        },
      },
    },
  })
);
