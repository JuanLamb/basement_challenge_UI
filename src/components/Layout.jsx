import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
