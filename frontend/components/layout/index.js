// \src/components/Layout.js
import React from 'react';
import { withRedux } from '../../config/with-redux-store';

import { ThemeProvider } from 'styled-components';

import Meta from './MetaComp';
import AdvertiseBar from '../advertise-bar/AdvertiseBarComp';
import Header from './header-comp/HeaderComp';

import { theme, Inner, GlobalStyle } from './GlobalTheme';
import Footer from './FooterComp';

import Register from '../registration-comp';
function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <GlobalStyle />
      <AdvertiseBar />
      <Header />
      <Register />
      <Inner className="container">{children}</Inner>
      <Footer />
    </ThemeProvider>
  );
}

export default withRedux(Layout);
