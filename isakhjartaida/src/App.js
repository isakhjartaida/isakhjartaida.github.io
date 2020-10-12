import React from 'react';

import { Container, Box } from '@material-ui/core';
import { ReactComponent as Logo } from './assets/logga.svg';
import HeaderImg from './assets/isak_ida_1.jpg';

import Theme from './Theme';
import Time from './Time';
import NotifyMe from './NotifyMe';

function App() {
  return (
    <Theme>
      <Container
        maxWidth="sm"
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          marginBottom={5}
        >
          <Box
            height={450}
            padding={2}
          >
            <img
              style={{border: '5px solid #FFF'}}
              height="100%"
              src={HeaderImg}
              alt="Isak och Ida"
            />
          </Box>
          <Logo />

          <Time />

          <NotifyMe />
        </Box>
      </Container>
    </Theme>
  );
}

export default App;
