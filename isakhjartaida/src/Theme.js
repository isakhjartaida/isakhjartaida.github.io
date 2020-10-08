import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    background: {
      default: '#a3b899',
    },
    primary: {
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
