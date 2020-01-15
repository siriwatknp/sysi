import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';
import Mail from '@material-ui/icons/Mail';
import theme from './theme';
import logo from './images/sysi_logo.jpg';
import { levels, menus, socials } from './data/app';
import './fontawesome';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  fab: {
    position: 'fixed',
    zIndex: 1500,
    top: 28,
    left: 300,
    transform: 'translateX(-50%) scale(1)',
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    backgroundColor: palette.grey[900],
    color: '#fff',
  },
  fabHidden: {
    transform: 'translateX(-50%) scale(0)',
  },
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 0 8px 0 rgba(0,0,0,0.38)',
  },
  sidebarPaper: {
    border: 'none',
    width: 300,
  },
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
  mail: {
    borderColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 40,
    '& .MuiButton-label': {
      textTransform: 'none',
      fontWeight: 400,
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
  logo: {
    overflow: 'hidden',
    width: 144,
    height: 56,
    [breakpoints.up('sm')]: {
      height: 64,
    },
    '& > img': {
      margin: 0,
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      display: 'inline-block',
    },
  },
  navLink: {
    color: palette.grey[700],
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 40,
    '& .MuiButton-label': {
      fontWeight: 'normal',
    },
    [breakpoints.up('md')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  activeNavLink: {
    color: palette.primary.main,
  },
  register: {
    borderRadius: 40,
    marginLeft: 8,
    paddingLeft: 16,
    paddingRight: 16,
    [breakpoints.up('md')]: {
      marginLeft: 16,
      paddingLeft: 32,
      paddingRight: 32,
    },
  },
  popoverPaper: {
    position: 'absolute',
    marginTop: 20,
    top: 40,
    left: 0,
    '& a': {
      whiteSpace: 'nowrap',
    },
  },
  sidebarLevel2: {
    paddingLeft: 32,
  },
}));

const StylesProvider = ({ children }) => {
  const styles = useStyles();
  return children(styles);
};

const App = ({ location, children }) => {
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        {styles => (
          <Box css={{ overflow: opened ? 'hidden' : 'initial' }}>
            <AppBar color={'default'} className={styles.header}>
              <Toolbar>
                <Hidden implementation="css" smUp>
                  <IconButton
                    aria-label="sidebar toggle"
                    edge={'start'}
                    onClick={() => setOpened(true)}
                  >
                    {opened ? <ArrowLeft /> : <MenuRounded />}
                  </IconButton>
                </Hidden>
                <Box
                  component={Link}
                  to={'/'}
                  width={200}
                  className={styles.logo}
                >
                  <img src={logo} alt={'logo'} />
                </Box>
                <Box ml={'auto'}>
                  <Hidden implementation="css" only={'xs'}>
                    <Button
                      endIcon={<KeyboardArrowDownRounded />}
                      className={styles.navLink}
                      onClick={() => setOpen(true)}
                      onFocus={() => setOpen(true)}
                      onMouseOver={() => setOpen(true)}
                      onMouseLeave={() => setOpen(false)}
                    >
                      โปรแกรม
                      <Grow in={open}>
                        <Paper
                          elevation={8}
                          className={cx(styles.popoverPaper)}
                        >
                          <List component={'div'}>
                            {levels.map(lvl => (
                              <ListItem
                                key={lvl.label}
                                button
                                activeClassName={styles.activeNavLink}
                                component={Link}
                                to={lvl.to}
                              >
                                {lvl.label}
                              </ListItem>
                            ))}
                          </List>
                        </Paper>
                      </Grow>
                    </Button>
                    {menus.map(menu => (
                      <Button
                        key={menu.label}
                        className={styles.navLink}
                        activeClassName={styles.activeNavLink}
                        component={Link}
                        to={menu.to}
                      >
                        {menu.label}
                      </Button>
                    ))}
                  </Hidden>
                  {location.pathname === '/' && (
                    <Button
                      component={ScrollLink}
                      to={'courses'}
                      smooth
                      offset={-56}
                      duration={800}
                      variant={'contained'}
                      color={'primary'}
                      className={styles.register}
                    >
                      สมัคร
                    </Button>
                  )}
                </Box>
              </Toolbar>
            </AppBar>
            <Fab
              aria-label="close sidebar"
              className={cx(styles.fab, !opened && styles.fabHidden)}
              onClick={() => setOpened(false)}
            >
              <KeyboardArrowLeftRounded />
            </Fab>
            <Drawer
              open={opened}
              onClose={() => setOpened(false)}
              PaperProps={{ className: styles.sidebarPaper }}
            >
              <List>
                <List subheader={<ListSubheader>โปรแกรม</ListSubheader>}>
                  {levels.map(lvl => (
                    <ListItem
                      key={lvl.label}
                      className={styles.sidebarLevel2}
                      button
                      onClick={() => setOpened(false)}
                      component={Link}
                      to={lvl.to}
                    >
                      {lvl.label}
                    </ListItem>
                  ))}
                </List>
                {menus.map(menu => (
                  <ListItem
                    key={menu.label}
                    button
                    component={Link}
                    to={menu.to}
                    onClick={() => setOpened(false)}
                  >
                    {menu.label}
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <main>
              <Box height={{ xs: 56, sm: 64 }} />
              {children}
            </main>
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
                    <Box
                      ml={{ sm: -2, md: 0 }}
                      className={styles.socialWrapper}
                    >
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
                      <Link
                        key={menu.label}
                        className={styles.link}
                        to={menu.to}
                      >
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
          </Box>
        )}
      </StylesProvider>
    </ThemeProvider>
  );
};

App.propTypes = {
  location: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default App;
