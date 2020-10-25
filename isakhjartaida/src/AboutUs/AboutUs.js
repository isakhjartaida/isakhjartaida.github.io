import React, { useState } from 'react';
import { Box, Typography, Paper } from '@material-ui/core';

export default function AboutUs() {
  return (
    <Box
      width="100%"
      marginTop={10}
    >
      <Paper>
        <Box padding={2}>
          <Typography paragraph>
            <span role="img" aria-label="revolving_hearts">💞</span>
            Efter 9 år tillsammans har vi bestämt oss för att gifta oss.
          </Typography>
          
          <Typography>
            För vissa av er kanske detta kommer som en chock, medan vissa tycker att det är hög tid!
          </Typography>
          <Typography paragraph>
            Oavsett vilket så vill vi att ni ska vara en del utav vår stora dag.
          </Typography>
          
          <Typography>
            <span role="img" aria-label="round_pushpin">📍</span>
            För oss har det länge varit självklart att vårt bröllop ska äga rum på Ängsholns folkpark.
          </Typography>
          <Typography paragraph>
            För det vackra läget, men också för alla fina sommarnätter vi spenderat här.
            Under flera år har sommarens höjdpunkt varit när parken har fyllt till bredden med härligt folk som dansat tills solen har gått upp. Vi hoppas kunna ta tillbaka den känslan för en kväll.
          </Typography>
          
          <Typography>
            Hela bröllopet kommer äga rum utomhus, både vigsel och fest, och vi ber till alla vädergudar att vädret kommer vara på vår sida.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
