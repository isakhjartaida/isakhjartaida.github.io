import React from 'react';
import { Box } from '@material-ui/core';

import image from 'assets/isak_ida_1.jpg';
import { ReactComponent as FlowerLeft } from 'assets/flower_left.svg';
import { ReactComponent as FlowerRight } from 'assets/flower_right.svg';

export default function HeaderImg() {

  return (
    <Box
      height={450}
      padding={2}
      display="flex"
      alignItems="center"
    >
      <Box
        marginRight="-58px"
        height="100%"
        zIndex={2}
        style={{
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        <FlowerLeft
          alt="flower-left"
          height={450}
          width={170}
        />
      </Box>

      <img
        style={{border: '5px solid #FFF'}}
        height={400}
        width={270}
        src={image}
        alt="Isak och Ida"
      />

      <Box
        marginLeft="-63px"
        height="100%"
        zIndex={2}
        style={{
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        <FlowerRight
          alt="flower-right"
          height={450}
          width={150}
        />
      </Box>

    </Box>
  );
}
