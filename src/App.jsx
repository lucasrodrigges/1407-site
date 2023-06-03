import { Box } from '@mui/material';
import React from 'react';
import Header from './components/Header/Index';
import Cross from './components/Cross/Index';
import OurTeam from './components/OurTeam/Index';
import Services from './components/Services/Index';
// import Footer from './components/Footer/Index';

export default function App() {
  return (
    <Box sx={{
      width: '100vw',
      backgroundColor: 'black03',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
    }}
    >
      <Header />
      <Cross />
      <Services />
      <OurTeam />
      {/* <Footer /> */}

    </Box>
  );
}
