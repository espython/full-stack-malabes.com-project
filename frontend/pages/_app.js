import App from 'next/app';
import React from 'react';
import Layout from '../components/layout';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MainApp;
