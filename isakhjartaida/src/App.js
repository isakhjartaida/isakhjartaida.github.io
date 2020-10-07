import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Box } from '@material-ui/core';
import { Favorite as FavoriteIcon } from '@material-ui/icons';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        with="100vw"
        height="100vh"
      >
        <FavoriteIcon
          color="primary"
          style={{ fontSize: 56 }}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
