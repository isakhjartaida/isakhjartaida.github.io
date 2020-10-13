import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

import { ReactComponent as Logo } from 'assets/logga.svg';
import HeaderImg from 'assets/isak_ida_1.jpg';
import FlowerLeft from 'assets/flower_left.png';
import FlowerRight from 'assets/flower_right.png';

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
        height={450}
        padding={2}
        display="flex"
        alignItems="center"
      >
        <Box
          marginRight="-29px"
          height="100%"
          zIndex={2}
        >
          <img
            src={FlowerLeft}
            alt="flower-left"
            height={450}
          />
        </Box>

        <img
          style={{border: '5px solid #FFF'}}
          height={400}
          src={HeaderImg}
          alt="Isak och Ida"
        />

        <Box
          marginLeft="-25px"
          height="100%"
          zIndex={2}
        >
          <img
            src={FlowerRight}
            alt="flower-right"
            height={450}
          />
        </Box>

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
