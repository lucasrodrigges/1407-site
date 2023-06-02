import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/images/1407Logo2.png';

const navs = [{
  label: 'NOSSO TIME',
  path: '#team',
}, {
  label: 'PROGRAMAS',
  path: '#programs',
}, {
  label: 'PREÇOS',
  path: '#prices',
}, {
  label: 'SOBRE NÓS',
  path: '#about',
}, {
  label: 'CONTATO',
  path: '#contact',
}];

export default function Header() {
  return (
    <Box sx={{
      height: '250px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      maxWidth: '1368px',
      margin: '0 auto',
    }}
    >
      <Box>
        <img
          src={Logo}
          alt=""
          style={{
            height: '250px',
          }}
        />
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 2,
      }}
      >
        {navs.map((nav) => (
          <Link key={nav.label} to={nav.path}>
            <Typography
              variant="h6"
              fontWeight={400}
              fontSize={16}
              sx={{
                color: 'white01',
                transition: '0.5s',
                '&:hover': {
                  color: 'pink01',
                  transition: '0.5s',
                  cursor: 'pointer',
                },
              }}
            >
              {nav.label}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
