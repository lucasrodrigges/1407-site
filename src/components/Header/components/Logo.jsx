import { Box } from '@mui/material';
import React from 'react';
import LogoImage from '../../../assets/images/1407Logo2.png';

export default function Logo() {
  return (
    <Box sx={{
      '& img': {
        height: {
          xs: '150px',
        },
      },
    }}
    >
      <img
        src={LogoImage}
        alt=""
      />
    </Box>
  );
}
