import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <main>
      <Box height={{ xs: 56, sm: 64 }} />
      {children}
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
Layout.defaultProps = {};

export default Layout;
