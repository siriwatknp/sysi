import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
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

const useStyles = makeStyles(({ palette }) => ({
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
}));

const StylesProvider = ({ children }) => {
  const styles = useStyles();
  return children(styles);
};

const App = ({ location, children }) => (
  <Root theme={theme} config={config.get()}>
    {({ opened, setOpened }) => (
      <StylesProvider>
        {styles => (
          <Box css={{ overflow: opened ? 'hidden' : 'initial' }}>
            <Header className={styles.header}>
              <Container>
                <Toolbar disableGutters>
                  <SidebarTrigger>
                    <SidebarTriggerIcon />
                  </SidebarTrigger>
                </Toolbar>
              </Container>
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
            <Footer className={styles.footer}></Footer>
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
