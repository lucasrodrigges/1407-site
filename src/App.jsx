import { Box } from '@mui/material';
import React from 'react';
import Header from './components/Header/Index';
import Cross from './components/Cross/Index';
import OurTeam from './components/OurTeam/Index';

export default function App() {
  return (
    <Box sx={{
      width: '100vw',
      backgroundColor: 'black03',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}
    >
      <Header />
      <Cross />
      <OurTeam />
    </Box>
  );
}
