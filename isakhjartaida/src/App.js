import React from 'react';
import axios from 'axios';

import { Container, Box } from '@material-ui/core';

import Theme from './Theme';
import Landing from './Landing';
import Time from './Time';
import NotifyMe from './NotifyMe';
import AddToCalendar from './AddToCalendar';
import AboutUs from './AboutUs';
import Toasts from './Toasts';
import Invitation from './Invitation';
import Brannboll from './Brannboll';

const base = () => {
  const req = axios.create({
    baseURL: "https://cors-is-bull.herokuapp.com/",
  });

  return req;
};

const ping = () => {
  const api = base();
  return api.get("/");
};

function App() {
  ping();

  return (
    <Theme>
      <Box overflow="hidden">
        <Container
          maxWidth="md"
        >
          <Landing />

          <Time />

          <AddToCalendar />

          <Brannboll />

          <Invitation />

          <Toasts />

          <AboutUs />

          <NotifyMe />

          <Box marginTop={4}></Box>
        </Container>
      </Box>
    </Theme>
  );
}

export default App;
