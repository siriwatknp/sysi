import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Mail from '@material-ui/icons/Mail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { levels, menus, socials } from '../data/app';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  footer: {
    color: '#fff',
    padding: '24px 16px 40px 16px',
    border: 'none',
    minHeight: 300,
    backgroundColor: palette.grey[900],
    '& *': {
      color: '#fff',
    },
  },
  socialWrapper: {
    textAlign: 'center',
    [breakpoints.up('sm')]: {
      textAlign: 'left',
    },
    [breakpoints.up('md')]: {
      textAlign: 'center',
    },
  },
  mail: {
    borderColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 40,
    '& .MuiButton-label': {
      textTransform: 'none',
      fontWeight: 400,
    },
  },
  social: {
    fontSize: 40,
    '&:not(:first-of-type)': {
      marginLeft: 16,
    },
  },
  categoryHeading: {
    margin: '16px 0',
    fontWeight: 400,
    opacity: 0.6,
  },
  link: {
    textDecoration: 'none',
    display: 'block',
    marginBottom: 8,
    '&:hover': {
      color: palette.primary.main,
    },
  },
}));

const Footer = () => {
  const styles = useStyles();
  return (
    <footer className={styles.footer}>
      <Box pt={{ xs: 2, sm: 4, md: 5 }} pb={{ xs: 5, sm: 8, md: 10 }}>
        <Grid container justify={'center'} spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box align={'center'} mt={1}>
              <Button
                component={'a'}
                href={'mailto:sysi.thailand@gmail.com'}
                target={'_blank'}
                className={styles.mail}
                variant={'outlined'}
                startIcon={<Mail />}
              >
                sysi.thailand@gmail.com
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box ml={{ sm: -2, md: 0 }} className={styles.socialWrapper}>
              {socials.map(social => (
                <IconButton
                  key={social.label}
                  aria-label={social.label}
                  className={styles.social}
                  component={'a'}
                  href={social.href}
                  rel={'noopener'}
                  target={'_blank'}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </IconButton>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} sm={5} md={2}>
            <h5 className={styles.categoryHeading}>ทั่วไป</h5>
            {menus.map(menu => (
              <Link key={menu.label} className={styles.link} to={menu.to}>
                {menu.label}
              </Link>
            ))}
          </Grid>
          <Grid item xs={6} sm={5} md={2}>
            <h5 className={styles.categoryHeading}>โปรแกรม</h5>
            {levels.map(lvl => (
              <Link className={styles.link} to={lvl.to}>
                {lvl.label}
              </Link>
            ))}
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
