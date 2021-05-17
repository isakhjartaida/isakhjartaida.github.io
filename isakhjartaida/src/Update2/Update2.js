import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';

export default function Update2() {
  return (
    <Box width="100%" marginBottom={5}>
      <Paper>
        <Box padding={2}>
          <Typography component="div" variant="caption" paragraph>
            2021-05-17
          </Typography>
          <Typography component="div">
            Regeringen och folkhälsomyndigheten har gått ut med restriktionerna för sommaren.
          </Typography>
          <Typography component="div">
            Vi håller just nu på att se över hur vi ska få ihop vårt drömbröllop och samtidigt hålla oss inom lagen.
          </Typography>
          <Typography component="div">
            Håll utkik här, så kommer vi snart meddela er. Ta hand om er <span role="img" aria-label="red-heart">❤️</span>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
