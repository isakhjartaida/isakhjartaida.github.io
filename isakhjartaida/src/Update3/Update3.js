import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';

export default function Update3() {
  return (
    <Box width="100%" marginBottom={5}>
      <Paper>
        <Box padding={2}>
          <Typography component="div" variant="caption" paragraph>
            2021-07-05
          </Typography>
          <Typography component="div">
            Våra toastmadames vill påminna er om att skicka in planerade tal och övriga spex via toastmadames@isakhjartaida.se senast fredag 9 juli.
          </Typography>
          <Typography component="div" paragraph>
            Detta för att underlätta planeringen för middagens körschema.
          </Typography>
          <Typography component="div">
            Läs mer under "Våra toastmadames" här nedan.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
