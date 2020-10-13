import React from 'react';
import { Box } from '@material-ui/core';

import image from 'assets/isak_ida_1.jpg';
//import FlowerLeft from 'assets/flower_left.png';
//import FlowerRight from 'assets/flower_right.png';

export default function HeaderImg() {

  return (
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
        
      </Box>

      <img
        style={{border: '5px solid #FFF'}}
        height={400}
        src={image}
        alt="Isak och Ida"
      />

      <Box
        marginLeft="-25px"
        height="100%"
        zIndex={2}
      >
        
      </Box>

    </Box>
  );
}
