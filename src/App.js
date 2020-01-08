import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
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
    position: 'absolute',
    zIndex: 1300,
    top: 28,
    left: 300,
    transform: 'translateX(-50%) scale(1)',
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
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
    margin: 0,
    height: 40,
  },
}));

const StylesProvider = ({ children }) => {
  const styles = useStyles();
  return children(styles);
};

const App = ({ children }) => (
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
                <img className={styles.logo} src={logo} alt={'logo'} />
              </Toolbar>
            </Header>
            <Fab
              className={cx(styles.fab, !opened && styles.fabHidden)}
              onClick={() => setOpened(false)}
            >
              <KeyboardArrowLeftRounded />
            </Fab>
            <Sidebar PaperProps={{ className: styles.sidebarPaper }}>
              sidebar
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
                    <Link className={styles.link}>เกี่ยวกับเรา</Link>
                    <Link className={styles.link}>คำถามที่พบบ่อย</Link>
                  </Grid>
                  <Grid item xs={6} sm={5} md={2}>
                    <h5 className={styles.categoryHeading}>โปรแกรม</h5>
                    <Link className={styles.link}>เริ่มต้น • Rookie</Link>
                    <Link className={styles.link}>กลาง • Semi-Pro</Link>
                    <Link className={styles.link}>ใกล้โปร • Turn-Pro</Link>
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

App.propTypes = {
  location: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default App;
