import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    background: {
      default: '#fceee9',
    },
    primary: {
      light: '#dde6d5',
      main: '#a3b899',
      dark: '#667b68',
    },
    secondary: {
      light: '#fceee9',
      main: '#f8d3c5',
    },
  },
});

function Theme(props) {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
}

export default Theme;
