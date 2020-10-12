import React from 'react';

import { Container, Box } from '@material-ui/core';

import Theme from './Theme';
import Landing from './Landing';
import Time from './Time';
import NotifyMe from './NotifyMe';

function App() {
  return (
    <Theme>
      <Box overflow="hidden">
        <Container
          maxWidth="sm"
        >
          <Landing />

          <Time />

          <NotifyMe />

          <Box marginTop={4}></Box>
        </Container>
      </Box>
    </Theme>
  );
}

export default App;
