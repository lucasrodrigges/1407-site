import { Box, Button, Typography } from '@mui/material';
import React from 'react';

import './Styles/DropDownCard.css';

export default function DropDownCard({ open, service }) {
  return (
    <Box
      className={open ? 'dropDownCardOpen' : 'dropDownCardClosed'}
      sx={{
        padding: 1,
        display: open ? 'flex' : 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: {
          xs: 'center',
          md: 'flex-start',
        },
        gap: 2,
      }}
    >
      <Typography sx={{
        fontSize: {
          xs: 12,
          sm: 14,
          md: 16,
          lg: 18,
        },
        fontWeight: 400,
        color: 'white01',
        textAlign: 'justify',
      }}
      >
        {service.description}
      </Typography>

      <Button
        variant="contained"
        onClick={() => window.open(service.path, '_blank')}
      >
        ENTRE EM CONTATO
      </Button>
    </Box>
  );
}
