import Typography from 'typography';

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
  baseLineHeight: 1.666,
  scaleRatio: 2.4,
  headerFontFamily,
  bodyFontFamily,
});
export default typography;
