import { Box } from '@mui/material';
import React from 'react';
import Logo from './components/Logo';
import NavHeaderCard from './components/NavHeaderCard';

const navs = [
  {
    label: 'HOME',
    path: 'home',
  },
  // {
  //   label: 'PROGRAMAS',
  //   path: '#programs',
  // },
  // {
  //   label: 'PREÇOS',
  //   path: '#prices',
  // },
  {
    label: 'EQUIPE',
    path: 'team',
  },
  // {
  //   label: 'CONTATO',
  //   path: '#contact',
  // },
];

export default function Header() {
  return (
    <Box sx={{
      height: {
        xs: '100px',
        md: '150px',
      },
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: {
        xs: '100%',
        sm: '80%',
      },
      maxWidth: '1368px',
    }}
    >
      <Logo />

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 2,
      }}
      >
        {navs.map((nav) => (
          <NavHeaderCard key={nav.label} nav={nav} />
        ))}
      </Box>
    </Box>
  );
}
