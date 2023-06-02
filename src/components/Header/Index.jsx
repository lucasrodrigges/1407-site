import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/images/1407Logo2.png';

const navs = [{
  label: 'EQUIPE',
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
      height: {
        xs: '100px',
        md: '200px',
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
      <Box sx={{
        '& img': {
          height: {
            xs: '150px',
          }
        },
      }}>
        <img
          src={Logo}
          alt=""
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
                display: {
                  xs: 'none',
                  sm: 'block',
                },
                color: 'white01',
                transition: '0.5s',
                '&:hover': {
                  color: 'yellow01',
                  transition: '0.5s',
                  cursor: 'pointer',
                  transform: 'scale(1.1)',
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
