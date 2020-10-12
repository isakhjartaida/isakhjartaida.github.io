import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

import { ReactComponent as Logo } from 'assets/logga.svg';
import HeaderImg from 'assets/isak_ida_1.jpg';

const useStyles = makeStyles((theme) => ({
  date: {
    fontFamily: ['Peddana, Roboto'],
    fontSize: '4.75rem',
  },
}));

export default function NotifyMe() {
  const classes = useStyles();

  return (
    <Box
          minHeight="100vh"
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
        >
          <Box
            minHeight={450}
            height="50vh"
            padding={2}
          >
            <img
              style={{border: '5px solid #FFF'}}
              height="100%"
              src={HeaderImg}
              alt="Isak och Ida"
            />
          </Box>

          <Logo />

          <Typography
            variant="h2"
            className={classes.date}
          >
            2021-07-17
          </Typography>

        </Box>
  );
}
