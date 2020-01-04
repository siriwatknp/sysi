import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    backgroundColor: palette.grey[50],
    borderRadius: 8,
    marginTop: 52,
    display: 'flex',
    flexDirection: 'column',
    [breakpoints.up('md')]: {
      height: '100%',
      flexDirection: 'row',
      marginTop: 0,
      alignItems: 'center',
      padding: '16px 0 16px 24px',
    },
    [breakpoints.up('lg')]: {
      padding: 32,
    },
  },
  iconContainer: {
    width: 104,
    height: 104,
    borderRadius: '50%',
    boxShadow: '0 2px 8px 0 hsla(207, 12%, 43%, .24)',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '-52px auto 0',
    flexShrink: 0,
    [breakpoints.up('md')]: {
      margin: 0,
      width: 144,
      height: 144,
      boxShadow: 'none',
      marginRight: 16,
    },
    [breakpoints.up('lg')]: {
      width: 184,
      height: 184,
    },
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
}));

const SupportInfo = ({ title, content }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.iconContainer} />
      <Box px={2} pt={3} maxWidth={320} mx={'auto'}>
        <h3 className={styles.title}>{title}</h3>
        <p>{content}</p>
      </Box>
    </div>
  );
};

SupportInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
SupportInfo.defaultProps = {};

export default SupportInfo;
