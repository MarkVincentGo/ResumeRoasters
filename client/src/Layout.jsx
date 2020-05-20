import React from 'react';

import Header from './Header';
import TalkToUs from './TalkToUs';

const Layout = ({ children }) => {
  return (
    <div>
      <Header /> 
      {children}
      <TalkToUs />
    </div>
  )
}

export default Layout
