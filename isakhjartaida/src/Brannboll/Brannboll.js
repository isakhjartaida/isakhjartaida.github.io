import React from 'react';
import { Box, Paper, Typography, Link, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Brannboll() {
  return (
    <Box width="100%" marginBottom={5}>
      <Paper>
        <Box padding={2}>
          <Typography component="div" variant="h5" paragraph>
            Brännboll inför Bröllopsdagen
          </Typography>

          <Typography component="div">
            Hejsan allesammans!
          </Typography>
          <Typography component="div" paragraph>
            För att njuta och få ut så mycket av bröllopshelgen som möjligt kommer den som vill att på fredagen kunna spela brännboll och umgås.
            Grill kommer att finnas på plats, ta med egen dricka och mat om ni vill grilla!
          </Typography>
          <Typography component="div">
            Vi hoppas på att kunna tillbringa denna stund på Ängsholn, men plats kan komma att ändras.
            Gå med i facebook-eventet för uppdaterad info.
          </Typography>
          <Typography component="div" paragraph>
            Vi hoppas på fint väder och en rolig kväll tillsammans!
          </Typography>

          <Link variant="h6" target="_blank" href="https://www.facebook.com/events/508542733824698">
            <Button
              size="large"
              variant="contained"
              startIcon={<FacebookIcon />}
              color="primary"
            >
              Eventet
            </Button>
          </Link>
          <Typography component="div" variant="caption">
            Saknar du inbjudan till eventet, kontakta Linda Nellfors.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
