import React from 'react';
import { Grid, Box, Paper, Typography, Link } from '@material-ui/core';

import video from 'assets/ilovei.mp4';
import image from 'assets/video_still.jpg';

export default function AboutUs() {
  return (
    <Box width="100%" marginBottom={5}>
      <Grid
        container
        spacing={2}
      >
        <Grid item sx={12} md={6}>
          <Paper>
            <Box padding={2}>
              <Typography component="div" paragraph>
                <Box fontWeight="fontWeightBold">
                  <span role="img" aria-label="revolving_hearts">💞 </span>
                  Efter nästan 10 år tillsammans har vi bestämt att gifta oss!
                </Box>
              </Typography>
              
              <Typography>
                För vissa kanske det kommer som en chock, medan andra tycker att det är hög tid.
              </Typography>
              <Typography paragraph>
                Spela roll! Klart ni ska vara en del utav vår stora dag <span role="img" aria-label="smiling_face_with_hearts">🥰</span>
              </Typography>
              
              <Typography>
                <span role="img" aria-label="round_pushpin">📍 </span>
                För oss har det länge varit självklart att vårt bröllop ska äga rum på <Link target="_blank" href="https://goo.gl/maps/Huwiqukqsn8bX1vv9" color="inherit">Ängsholns folkpark</Link>.
              </Typography>
              <Typography>
                För det vackra läget, men också för alla fina sommarnätter vi spenderat här.
                Under flera år har sommarens höjdpunkt varit när parken fyllts till bredden med härligt folk som dansat tills solen gått upp.
              </Typography>
              <Typography paragraph>
                Vi hoppas kunna ta tillbaka den känslan för en kväll!
              </Typography>
              
              <Typography paragraph>
                Bröllopet kommer spenderas utomhus, både vigsel och fest. Vi ber till alla vädergudar att vädret kommer vara på vår sida <span role="img" aria-label="sun_with_face">🌞</span>
              </Typography>

              <Typography component="div" variant="h4" fontWeight="fontWeightBold">
                <Box textAlign="center">
                  #isakhjärtaida
                </Box>
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item sx={12} md={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Paper
              style={{height: "100%"}}
            >
              <Box
                height="100%"
                padding={1}
              >
                <video
                  poster={image}
                  disableremoteplayback="true"
                  autoPlay
                  playsInline
                  muted
                  loop
                  height="100%"
                  width="100%"
                  style={{
                    pointerEvents: "none",
                    objectFit: "cover",
                  }}
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
