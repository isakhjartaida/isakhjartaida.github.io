import React from 'react';

import { Container, Box } from '@material-ui/core';

import Theme from './Theme';
import Landing from './Landing';
import Time from './Time';
import NotifyMe from './NotifyMe';
import AddToCalendar from './AddToCalendar';
import AboutUs from './AboutUs';
import Update1 from './Update1';

function App() {
  return (
    <Theme>
      <Box overflow="hidden">
        <Container
          maxWidth="md"
        >
          <Landing />

          <Time />

          <Update1 />

          <AboutUs />

          <AddToCalendar />

          <NotifyMe />

          <Box marginTop={4}></Box>
        </Container>
      </Box>
    </Theme>
  );
}

export default App;
