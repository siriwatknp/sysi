import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Mail from '@material-ui/icons/Mail';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';
import {
  Root,
  Header,
  Content,
  Footer,
  Sidebar,
  SidebarTrigger,
  SidebarTriggerIcon,
  ScreenConfigGenerator,
} from '@mui-treasury/layout';
import theme from './theme';
import logo from './images/sysi_logo.jpg';
import './fontawesmoe';

const config = ScreenConfigGenerator();
config.add('xs', screen => {
  screen.primarySidebar.setVariant('persistent').setWidth(300);
  screen.header
    .setClipped(false)
    .setOffsetHeight(56)
    .setPersistentBehavior('none');
  screen.content.setPersistentBehavior('flexible');
  screen.footer.setPersistentBehavior('flexible');
});
config.add('sm', screen => {
  screen.primarySidebar.setHidden(true).setVariant('permanent');
});

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  fab: {
    position: 'fixed',
    zIndex: 1300,
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
  },
  footer: {
    color: '#fff',
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
      marginLeft: 24,
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
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 40,
    '& .MuiButton-label': {
      fontWeight: 'normal',
    },
  },
  activeNavLink: {
    color: palette.primary.main,
  },
  register: {
    borderRadius: 40,
    marginLeft: 32,
    paddingLeft: 32,
    paddingRight: 32,
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

const App = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Root theme={theme} config={config.get()}>
      {({ opened, setOpened }) => (
        <StylesProvider>
          {styles => (
            <Box css={{ overflow: opened ? 'hidden' : 'initial' }}>
              <Header className={styles.header}>
                <Toolbar>
                  <SidebarTrigger>
                    <SidebarTriggerIcon />
                  </SidebarTrigger>
                  <Box
                    component={Link}
                    to={'/'}
                    width={200}
                    className={styles.logo}
                  >
                    <img src={logo} alt={'logo'} />
                  </Box>
                  <Box ml={'auto'}>
                    <Hidden only={'xs'}>
                      <Button
                        endIcon={<KeyboardArrowDown />}
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
                              <ListItem
                                button
                                activeClassName={styles.activeNavLink}
                                component={Link}
                                to={'/courses/rookie'}
                              >
                                ระดับเริ่มต้น • Rookie
                              </ListItem>
                              <ListItem
                                button
                                activeClassName={styles.activeNavLink}
                                component={Link}
                                to={'/courses/semi-pro'}
                              >
                                ระดับกลาง • Semi-Pro
                              </ListItem>
                              <ListItem
                                button
                                activeClassName={styles.activeNavLink}
                                component={Link}
                                to={'/courses/turn-pro'}
                              >
                                ระดับใกล้โปร • Turn-Pro
                              </ListItem>
                            </List>
                          </Paper>
                        </Grow>
                      </Button>
                      <Button
                        className={styles.navLink}
                        activeClassName={styles.activeNavLink}
                        component={Link}
                        to={'/about-us'}
                      >
                        เกี่ยวกับเรา
                      </Button>
                      <Button
                        className={styles.navLink}
                        activeClassName={styles.activeNavLink}
                        component={Link}
                        to={'/FAQ'}
                      >
                        ถาม-ตอบ
                      </Button>
                    </Hidden>
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
                  </Box>
                </Toolbar>
              </Header>
              <Fab
                className={cx(styles.fab, !opened && styles.fabHidden)}
                onClick={() => setOpened(false)}
              >
                <KeyboardArrowLeftRounded />
              </Fab>
              <Sidebar PaperProps={{ className: styles.sidebarPaper }}>
                <List>
                  <List subheader={<ListSubheader>โปรแกรม</ListSubheader>}>
                    <ListItem
                      className={styles.sidebarLevel2}
                      button
                      onClick={() => setOpened(false)}
                      component={Link}
                      to={'/courses/rookie'}
                    >
                      เริ่มต้น • Rookie
                    </ListItem>
                    <ListItem
                      className={styles.sidebarLevel2}
                      button
                      onClick={() => setOpened(false)}
                      component={Link}
                      to={'/courses/semi-pro'}
                    >
                      กลาง • Semi-Pro
                    </ListItem>
                    <ListItem
                      className={styles.sidebarLevel2}
                      button
                      onClick={() => setOpened(false)}
                      component={Link}
                      to={'/courses/turn-pro'}
                    >
                      ใกล้โปร • Turn-Pro
                    </ListItem>
                  </List>
                  <ListItem
                    button
                    component={Link}
                    to={'/about-us'}
                    onClick={() => setOpened(false)}
                  >
                    เกี่ยวกับเรา
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to={'/FAQ'}
                    onClick={() => setOpened(false)}
                  >
                    คำถามที่พบบ่อย
                  </ListItem>
                </List>
              </Sidebar>
              <Content>{children}</Content>
              <Footer className={styles.footer}>
                <Box pt={{ xs: 2, sm: 4, md: 5 }} pb={{ xs: 5, sm: 8, md: 10 }}>
                  <Grid container justify={'center'} spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box align={'center'} mt={1}>
                        <Button
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
                        <IconButton className={styles.social}>
                          <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </IconButton>
                        <IconButton className={styles.social}>
                          <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </IconButton>
                        <IconButton className={styles.social}>
                          <FontAwesomeIcon icon={['fab', 'medium']} />
                        </IconButton>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={5} md={2}>
                      <h5 className={styles.categoryHeading}>ทั่วไป</h5>
                      <Link className={styles.link} to={'/about-us'}>
                        เกี่ยวกับเรา
                      </Link>
                      <Link className={styles.link} to={'/FAQ'}>
                        คำถามที่พบบ่อย
                      </Link>
                    </Grid>
                    <Grid item xs={6} sm={5} md={2}>
                      <h5 className={styles.categoryHeading}>โปรแกรม</h5>
                      <Link className={styles.link} to={'/courses/rookie'}>
                        เริ่มต้น • Rookie
                      </Link>
                      <Link className={styles.link} to={'/courses/semi-pro'}>
                        กลาง • Semi-Pro
                      </Link>
                      <Link className={styles.link} to={'/courses/turn-pro'}>
                        ใกล้โปร • Turn-Pro
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Footer>
            </Box>
          )}
        </StylesProvider>
      )}
    </Root>
  );
};

App.propTypes = {
  location: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default App;
