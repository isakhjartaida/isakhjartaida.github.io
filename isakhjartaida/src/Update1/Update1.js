import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';

export default function Update1() {
  return (
    <Box width="100%" marginBottom={5}>
      <Paper>
        <Box padding={2}>
          <Typography component="div" variant="caption" paragraph>
            2021-02-20
          </Typography>
          <Typography component="div" paragraph>
            Tänk att nu är det mindre än 150 dagar kvar tills vi får säga JA.
          </Typography>
          <Typography component="div">
            På ett sätt så går tiden inte tillräckligt snabbt, men samtidigt går det på tok för snabbt.
            Vi vill gärna pausa tiden lite och låta vaccinet få sin verka så vi kan känna oss säkra
            att kunna genomföra vår dag utan massa oro.
          </Typography>
          <Typography component="div">
            Vi försöker hålla hoppet uppe och <Box fontWeight="fontWeightBold" display="inline"> planerar för att vårt bröllop ska kunna genomföras den tilltänka dagen. </Box>
          </Typography>
          <Typography component="div" paragraph>
            Som ni alla förstår så kan det, även för vår del att bli aktuellt att ändra på vårt koncept eller flytta fram, men vi vill fortfarande att alla ni låter vårt datum vara inbokat. Vi är inte beredda att kasta in någon handduk ännu. 
          </Typography>
          <Typography component="div" paragraph>
            Tips till alla er som inte registrerat eran mailadress är att göra det här nedan, för det är på den här sidan som vi kommer kunna uppdatera er kring våra tankar och planer småningom. 
            Om planen håller och vi kan genomföra vårt bröllop så kommer inom de närmaste månaderna komma ut information här om allt ni skulle behöva veta, samt även OSA. 
          </Typography>
          <Typography component="div" paragraph>
            Ta hand om er! Kram från Isak och Ida
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
