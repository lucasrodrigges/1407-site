import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { Instagram, WhatsApp } from '@mui/icons-material';
import SocialLinkCard from './components/SocialLinkCard';
import Location from './components/Location';
import Logo from '../Header/components/Logo';

const socialLinks = [{
  label: 'Instagram',
  icon: <Instagram
    fontSize="large"
    sx={{
      color: 'white01',
    }}
  />,
  path: 'https://www.instagram.com/1407hf/',
}, {
  label: 'Whatsapp',
  icon: <WhatsApp
    fontSize="large"
    sx={{
      color: 'white01',
    }}
  />,
  path: 'https://api.whatsapp.com/send?phone=5579991201407&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Box%201407.%20Poderia%20me%20ajudar?',
}];

export default function Footer() {
  return (
    <Box sx={{
      width: {
        xs: '90%',
        sm: '75%',
        md: '80%',
      },
      maxWidth: '1368px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      mb: 1,
    }}
    >
      <Divider sx={{
        backgroundColor: 'white01',
        width: '100%',
        mb: 2,
      }}
      />

      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
      >
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {
            xs: 'row',
            sm: 'column',
          },
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <Logo />

          <Box>
            {socialLinks.map((link) => (
              <SocialLinkCard key={link.label} link={link} />
            ))}
          </Box>
        </Box>

        <Location />
      </Box>

      <Typography sx={{
        color: 'white01',
        textAlign: 'center',
        fontSize: {
          xs: 12,
        },
        mt: 1,
        mb: 1,
      }}
      >
        © 2023 1407 Health & Fitness. Todos os direitos reservados.
      </Typography>

    </Box>
  );
}
