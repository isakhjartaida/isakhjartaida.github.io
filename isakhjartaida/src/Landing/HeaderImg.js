import React from 'react';
import { Box, Paper } from '@material-ui/core';

import image from 'assets/isak_ida_1.jpg';
import { ReactComponent as FlowerLeft } from 'assets/left_eucalyptus.svg';
import { ReactComponent as FlowerRight } from 'assets/right_eucalyptus.svg';

export default function HeaderImg() {

  return (
    <Box
      height={450}
      padding={2}
      display="flex"
      alignItems="center"
    >
      <Box
        marginRight="-112px"
        marginTop="-20px"
        height="100%"
        zIndex={2}
      >
        <FlowerLeft
          alt="flower-left"
          height={450}
          width={200}
        />
      </Box>

      <Paper>
        <Box padding={1}>
          <img
            height={400}
            width={270}
            src={image}
            alt="Isak och Ida"
          />
        </Box>
      </Paper>

      <Box
        marginLeft="-82px"
        marginTop="-63px"
        height="100%"
        zIndex={2}
      >
        <FlowerRight
          alt="flower-right"
          height={450}
          width={180}
        />
      </Box>
    </Box>
  );
}
