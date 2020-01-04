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
      },
      h2: {
        fontFamily: headerFontFamily.join(','),
      },
      h3: {
        fontFamily: headerFontFamily.join(','),
      },
      h4: {
        fontFamily: headerFontFamily.join(','),
      },
      h5: {
        fontFamily: headerFontFamily.join(','),
      },
      h6: {
        fontFamily: headerFontFamily.join(','),
      },
    },
  })
);
