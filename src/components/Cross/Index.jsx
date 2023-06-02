import { Box } from '@mui/material';
import React from 'react';
import WomanImageMobile from './Components/WomanImageMobile';
import Welcome from './Components/Welcome';
import WomanImageDesktop from './Components/WomanImageDesktop';
import CatchPhrases from './Components/CatchPhrases';

export default function Cross() {
  return (
    <Box sx={{
      height: {
        md: 'calc(100vh + 200px)',
      },
      width: '90%',
      maxWidth: '1368px',
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: 'row',
      },
      alignItems: 'center',
      gap: 6,
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
