import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Countdown from 'react-countdown';

const useStyles = makeStyles((theme) => ({
  peddana: {
    fontFamily: ['Peddana, Roboto'],
  },
  countdown: {
    fontFamily: ['Peddana, Roboto'],
    fontSize: 42,
    lineHeight: 1
  },
  bestDayEver: {
    fontFamily: ['Peddana, Roboto'],
    fontSize: 48,
  }
}));

export default function Time() {
  const classes = useStyles();
  
  const renderer = ({ days }) => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        { days > 0 &&
          <Typography className={classes.countdown}>
            {days} days until
          </Typography>
        }
        <Typography className={classes.bestDayEver}>
          BEST DAY EVER
        </Typography>

        <Typography variant="h1" component="h2" className={classes.peddana}>
          2020-07-17
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      <Countdown
        date={'2021-07-17'}
        renderer={renderer}
      />
    </Box>
  );
}
