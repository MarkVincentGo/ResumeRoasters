import React from 'react';
import Header from './Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Layout from './Layout';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#df6843',
    },
    secondary: {
      main: '#e58668',
      grey: '#e1e1e1'
    },
  },
});



export default () => (
  <div>
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  </div>
  
);
