import React from 'react';
import Header from './Router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
    <h1>Hi Guys.</h1>
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  </div>
  
);
