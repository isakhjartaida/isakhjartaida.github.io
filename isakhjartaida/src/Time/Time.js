import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Countdown from 'react-countdown';

const cdUseStyles = makeStyles((theme) => ({
  root: {
    fontFamily: ['Peddana, Roboto'],
    fontSize: 24,
  },
}));

const bdeUseStyles = makeStyles((theme) => ({
  root: {
    fontFamily: ['Peddana, Roboto'],
    fontSize: 36,
  },
}));

export default function Time() {
  const cdClasses = cdUseStyles();
  const bdeClasses = bdeUseStyles();
  
  const renderer = ({ days }) => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        { days > 0 &&
          <Typography className={cdClasses.root}>
            {days} days until
          </Typography>
        }
        <Typography className={bdeClasses.root}>
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
