import React from 'react';
import { Box } from '@mui/material';
import WomanMobileImage from '../../../assets/images/woman-cross-mobile.png';

export default function WomanImageMobile() {
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        width: {
          xs: '100%',
          sm: '80%',
        },
      },
    }}
    >
      <img
        src={WomanMobileImage}
        alt=""
      />
    </Box>
  );
}
