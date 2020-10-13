import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Countdown from 'react-countdown';

const useStyles = makeStyles((theme) => ({
  countdown: {
    fontFamily: ['Peddana, Roboto'],
    fontSize: 42,
    lineHeight: 1,
    color: theme.palette.primary.dark,
  },
  bestDayEver: {
    fontFamily: ['Peddana, Roboto'],
    fontSize: 48,
    lineHeight: 1,
    color: theme.palette.primary.dark,
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
        marginBottom={4}
      >
        { days > 0 &&
          <Typography className={classes.countdown}>
            {days} days until
          </Typography>
        }
        <Typography className={classes.bestDayEver}>
          BEST DAY EVER
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
