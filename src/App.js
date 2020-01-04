import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
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

const config = ScreenConfigGenerator();
config.add('xs', screen => {
  screen.primarySidebar
    .setVariant('persistent')
    .setAnchor('right')
    .setWidth(256);
  screen.secondarySidebar.setAnchor('left');
  screen.header.setClipped(false).setOffsetHeight(56);
  screen.content.setPersistentBehavior('flexible');
  screen.footer.setPersistentBehavior('flexible');
});
config.add('sm', screen => {
  screen.primarySidebar.setHidden(true).setVariant('flexible');
});

const App = ({ location, children }) => (
  <>
    <Root config={config.get()}>
      <Header>
        <Container>
          <Toolbar disableGutters>
            <SidebarTrigger style={{ marginLeft: 'auto' }}>
              <SidebarTriggerIcon />
            </SidebarTrigger>
          </Toolbar>
        </Container>
      </Header>
      <Sidebar>sidebar</Sidebar>
      <Content>{children}</Content>
      <Footer>footer</Footer>
    </Root>
  </>
);

App.propTypes = {
  location: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default App;
