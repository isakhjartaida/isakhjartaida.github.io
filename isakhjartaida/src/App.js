import React from 'react';

import { Box } from '@material-ui/core';
import { Favorite as FavoriteIcon } from '@material-ui/icons';

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
        <FavoriteIcon
          color="primary"
          style={{ fontSize: 56 }}
        />

        <Time />
      </Box>
    </Theme>
  );
}

export default App;
