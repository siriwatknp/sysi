import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    borderRadius: 12,
    border: '1px solid',
    borderColor: palette.grey[100],
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    margin: '16px 0',
    textAlign: 'center',
  },
  extra: {
    fontWeight: 400,
    textAlign: 'center',
    letterSpacing: 1,
    margin: 0,
  },
  btn: {
    width: '100%',
    borderRadius: 40,
  },
}));

const LevelInfo = ({ title, extra, content, actions }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root} height={'100%'} bgcolor={'common.white'}>
      <Box color={'grey.700'}>
        <h3 className={styles.title}>{title}</h3>
      </Box>
      {!extra && <Divider />}
      {extra && (
        <Box
          bgcolor={'primary.main'}
          color={'common.white'}
          py={2}
          px={{ xs: 2, sm: 3 }}
        >
          <h4 className={styles.extra}>{extra}</h4>
        </Box>
      )}
      <Box
        pt={2}
        pb={4}
        px={{ xs: 2, sm: 3 }}
        color={'grey.600'}
        css={{ flex: 'auto' }}
      >
        <div>{content}</div>
      </Box>
      <Box pb={3} px={2}>
        <Grid container spacing={2}>
          {actions.map(({ label, className, ...props }) => (
            <Grid key={label} item xs={12} sm>
              <Button className={cx(styles.btn, className)} {...props}>
                {label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

LevelInfo.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
  content: PropTypes.node,
  list: PropTypes.arrayOf(PropTypes.node),
  actions: PropTypes.arrayOf(PropTypes.shape({})),
};
LevelInfo.defaultProps = {
  actions: [],
};

export default LevelInfo;
