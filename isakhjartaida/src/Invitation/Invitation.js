import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cormorant: {
    fontFamily: [
      'Cormorant SC',
      'serif'
    ].join(','),
  },
  dancing: {
    fontFamily: [
      'Dancing Script',
      'cursive'
    ].join(','),
  },
  flower: {
    transform: 'rotate(-90deg)',
  },
}));

export default function Invitation() {
  const classes = useStyles();

  return (
    <Box width="100%" marginBottom={10}>
      <Paper>
        <Box width="100%" padding={2}>
          <Typography className={classes.cormorant} variant="h5" component="div" align="center" paragraph>
            Välkommen till vigsel mellan
          </Typography>
          <Typography className={classes.cormorant} variant="h6" component="div" align="center">
            Isak Karlsson
          </Typography>
          <Typography className={classes.dancing} component="div" align="center">
            &
          </Typography>
          <Typography className={classes.cormorant} variant="h6" component="div" align="center" paragraph>
            Ida Nellfors
          </Typography>

          <Typography className={classes.cormorant} component="div" align="center">
            Lördagen den 17 juli, 2021
          </Typography>
          <Typography className={classes.cormorant} component="div" align="center">
            Klockan 15:30
          </Typography>
          <Typography className={classes.cormorant} component="div" align="center">
            Ängsholns folkpark
          </Typography>
          <Typography className={classes.cormorant} component="div" align="center" paragraph>
            Klädsel: Kavaj
          </Typography>

          <Typography className={classes.cormorant} variant="h5" component="div" align="center" paragraph>
            Följs av bröllopsfest med middag
          </Typography>

          <Typography className={classes.cormorant} component="div" align="center">
            Barn förgyller många av våras liv och är välkomna på vigseln men undanbedes från middag och fest.
          </Typography>
          <Typography className={classes.cormorant} component="div" align="center" paragraph>
            Vänligen meddela oss i förväg så vi vet antal deltagande.
          </Typography>

          <Typography className={classes.cormorant} component="div" align="center">
            Vill du hålla tal, spexa eller hitta på andra upptåg under middagen?
          </Typography>
          <Typography className={classes.cormorant} component="div" align="center" paragraph>
            Kontakta våra formidabla toastmadames på toastmadames@isakhjartaida.se
          </Typography>

          <Typography className={classes.cormorant} component="div" align="center">
            Den största gåva ni kan ge oss är att delta på vårt bröllop.
          </Typography>
          <Typography className={classes.cormorant} component="div" align="center" paragraph>
            Om ni önskar ge ytterligare en gåva, kontakta Sussie Nellfors på 073 - 755 38 08 för önskelista.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
