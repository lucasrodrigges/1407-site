import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

export default function TitleTeam() {
  return (
    <Box sx={{
      width: {
        xs: '100%',
        sm: '80%',
      },
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Typography sx={{
        fontSize: 36,
        fontWeight: 600,
        color: 'green01',
        width: '100%',
      }}
      >
        NOSSA EQUIPE
      </Typography>
      <Divider sx={{
        width: '61px',
        border: '4px solid #01b2ea',
      }}
      />
    </Box>
  );
}
