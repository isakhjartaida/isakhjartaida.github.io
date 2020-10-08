import React from 'react';

import { Container, Box } from '@material-ui/core';
import { ReactComponent as Logo } from './assets/logga.svg';

import Theme from './Theme';
import Time from './Time';

function App() {
  return (
    <Theme>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        with="100vw"
        height="100vh"
        flexDirection="column"
      >
        <Container maxWidth="sm">
          <Logo />
        </Container>

        <Time />
      </Box>
    </Theme>
  );
}

export default App;
