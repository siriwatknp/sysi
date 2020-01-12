import Typography from 'typography';
import { blueGrey } from '@material-ui/core/colors';

export const headerFontFamily = [
  'Kanit',
  '-apple-system',
  'system-ui',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'sans-serif',
];
export const bodyFontFamily = [
  'Sarabun',
  '-apple-system',
  'system-ui',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'sans-serif',
];

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 2,
  scaleRatio: 2.4,
  headerFontFamily,
  bodyFontFamily,
  overrideStyles: () => ({
    'ul > li': {
      marginBottom: 0,
    },
    'h3, h4, h5, h6': {
      marginBottom: '1rem',
    },
    'h1, h2, h3, h4, h5, h6': {
      color: blueGrey[800],
    },
    body: {
      color: blueGrey[700],
    },
  }),
});
export default typography;
