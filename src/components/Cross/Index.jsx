import { Box } from '@mui/material';
import React from 'react';
import WomanImageMobile from './Components/WomanImageMobile';
import Welcome from './Components/Welcome';
import WomanImageDesktop from './Components/WomanImageDesktop';
import Differentials from './Components/Differentials';

export default function Cross() {
  return (
    <Box
      id="home"
      sx={{
        height: {
          md: 'calc(100vh - 150px)',
          lg: 'calc(100vh - 150px)',
        },
        width: {
          xs: '90%',
          md: '80%',
        },
        maxWidth: '1368px',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        alignItems: 'center',
        gap: {
          xs: 6,
          md: 4,
        },
        mb: {
          xs: 6,
          lg: 0,
        },
      }}
    >
      <WomanImageMobile />
      <Welcome />
      <WomanImageDesktop />
      <Differentials />
    </Box>
  );
}
