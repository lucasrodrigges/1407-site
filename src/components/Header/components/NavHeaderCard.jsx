import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-scroll';

export default function NavHeaderCard({ nav }) {
  return (
    <Link to={nav.path} smooth>
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
  );
}
