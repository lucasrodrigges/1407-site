import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

export default function ServicesTitle() {
  return (
    <Box sx={{
      width: {
        xs: '100%',
      },
      display: 'flex',
      flexDirection: 'column',
      mb: 6,
    }}
    >
      <Typography sx={{
        fontSize: 36,
        fontWeight: 600,
        color: 'green01',
        width: '100%',
        textAlign: 'left',
      }}
      >
        SERVIÇOS
      </Typography>
      <Divider sx={{
        width: '61px',
        border: '4px solid #01b2ea',
      }}
      />
    </Box>
  );
}
