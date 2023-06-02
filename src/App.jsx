import { Box } from '@mui/material';
import React from 'react';
import Header from './components/Header/Index';
import CrossSection from './components/CrossSection/Index';

export default function App() {
  return (
    <Box sx={{
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black03',
    }}
    >
      <Header />
      <CrossSection />
    </Box>
  );
}
