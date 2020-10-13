import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

import { ReactComponent as Logo } from 'assets/logga.svg';
import HeaderImg from './HeaderImg';

const useStyles = makeStyles((theme) => ({
  date: {
    fontFamily: ['Peddana, Roboto'],
    fontSize: '4.75rem',
    color: theme.palette.primary.dark,
  },
  logo: {
    fill: theme.palette.primary.main,
  },
}));

export default function NotifyMe() {
  const classes = useStyles();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width="100%"
    >
      <HeaderImg />

      <Logo className={classes.logo}/>

      <Typography
        variant="h2"
        className={classes.date}
      >
        2021-07-17
      </Typography>

    </Box>
  );
}
