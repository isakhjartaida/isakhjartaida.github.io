import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Paper, Typography, Avatar } from '@material-ui/core';

import filippa_img from 'assets/filippa.jpeg';
import julia_img from 'assets/julia.jpeg';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

export default function Toasts() {
  const classes = useStyles();

  return (
    <Box marginBottom={5}>
      <Paper>
        <Box padding={2}>
          <Typography variant="h5" component="div" paragraph>
            Våra toastmadames
          </Typography>
          <Typography component="div">
            Vi har tagit hjälp av två av våra fantastiska vänner för att förgylla vår dag!
          </Typography>
          <Typography component="div">
            Det är dessa personer som ni senare kommer kontakta om ni vill hålla tal eller liknande på vårt bröllop.
          </Typography>
          <Typography component="div" variant="">
            <Box fontStyle="italic">
              Mer om den informationen kommer senare.
            </Box>
          </Typography>
        </Box>
        
        <Grid
          container
          spacing={2}
        >
          <Grid item sx={12} md={6}>
            <Box padding={2}>
              <Box
                padding={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
                  className={classes.avatar}
                  alt="Filippa Jansson"
                  src={filippa_img}
                />
              </Box>
              
              <Typography paragraph>
                <Box fontWeight="fontWeightBold" textAlign="center">
                  Filippa Jansson
                </Box>
              </Typography>
              <Typography paragraph>
                Brudens barndomsvän som just nu pluggar till jurist i Uppsala.
                Ida och Filippa gick under högstadiet som helan och halvan.
              </Typography>
              <Typography>
                Filippa är en lättsam och glad person som har en förmåga att fånga ett helt rums uppmärksamhet.
                Hennes närvaro skapar en härlig stämning och alla har lite närmare till skratt när hon är med.
              </Typography>
            </Box>
          </Grid>
          <Grid item sx={12} md={6}>
            <Box padding={2}>
              <Box
                padding={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
                  className={classes.avatar}
                  alt="Julia Linnros"
                  src={julia_img}
                />
              </Box>
              <Typography paragraph>
                <Box fontWeight="fontWeightBold" textAlign="center">
                  Julia Linnros
                </Box>
              </Typography>
              <Typography paragraph>
                Brudparets barndomsvän som dansat sig genom livet via musikskolor och underhållningsjobb på varmare breddgrader.
                Julia är en varm och omtänksam person som alltid får andra att må bra.
              </Typography>
              <Typography>
                Med hennes erfarenhet av att stå på scenen är hon bra på att få med sig omgivningen
                på ett lättsamt men fängslande sätt som gör att hon passar perfekt till detta uppdrag!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
