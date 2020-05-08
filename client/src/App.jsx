import React from 'react';
import Header from './Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Layout from './Layout';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d84315',
    },
    secondary: {
      main: '#f4511e',
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
