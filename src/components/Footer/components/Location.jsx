import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Location() {
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      '& iframe': {
        border: 'none',
        borderRadius: '10px',
        width: '100%',
        height: {
          xs: '40%',
          md: '50%',
        },
        maxWidth: '570px',
      },
    }}
    >
      <Typography sx={{
        fontSize: {
          xs: 20,
          md: 24,
        },
        fontWeight: 600,
        color: 'white01',
        width: '100%',
        textAlign: 'center',
      }}
      >
        Endereço
      </Typography>

      <Typography sx={{
        fontSize: {
          xs: 12,
          md: 14,
        },
        fontWeight: 400,
        color: 'white01',
        width: '100%',
        textAlign: 'center',
      }}
      >
        Rua Dep. Carvalho Déda, 161 - Treze de Julho. Aracaju - SE.
      </Typography>

      <Typography sx={{
        fontSize: {
          xs: 20,
          md: 24,
        },
        fontWeight: 600,
        color: 'white01',
        width: '100%',
        textAlign: 'center',
      }}
      >
        Localização
      </Typography>

      <iframe
        title="Localização do mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1090.1392129632984!2d-37.053280064332334!3d-10.933826242380489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3c6634a7d31%3A0xaeb9c3933f83b145!2s1407%20-%20Health%20%26%20Fitness!5e0!3m2!1sen!2sbr!4v1685801772787!5m2!1sen!2sbr"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{
        }}
      />
    </Box>
  );
}
