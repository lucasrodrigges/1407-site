import { Box } from '@mui/material';
import React from 'react';
import WomanImageMobile from './Components/WomanImageMobile';
import Welcome from './Components/Welcome';
import WomanImageDesktop from './Components/WomanImageDesktop';
import CatchPhrases from './Components/CatchPhrases';

export default function Cross() {
  return (
    <Box
      id="home"
      sx={{
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
        mb: 6,
      }}
    >
      <WomanImageMobile />
      <Welcome />
      <WomanImageDesktop />
      <CatchPhrases />
    </Box>
  );
}
