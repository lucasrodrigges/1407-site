import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { Instagram, WhatsApp } from '@mui/icons-material';
import Logo from '../Header/components/Logo';
import SocialLinkCard from './components/SocialLinkCard';
import Location from './components/Location';

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
      mb: 4,
    }}
    >
      <Divider sx={{
        width: '100%',
        height: '1px',
        backgroundColor: 'white01',
      }}
      />

      <Box sx={{
        maxWidth: '1368px',
        display: 'flex',
        flexDirection: {
          xs: 'column',
        },
        justifyContent: 'center',
        alignItems: 'center',
        mb: {
        },
        gap: 1,
      }}
      >
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Logo />
            <Typography sx={{
              color: 'white01',
              fontSize: {
                xs: 12,
                sm: 14,
                md: 16,
              },
              textAlign: 'center',
              mb: 2,
            }}
            >
              Saúde & Condicionamento Físico: Cross | Nutrição | Consultório | FMI | AFM.
            </Typography>
          </Box>

          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            {socialLinks.map((link) => (
              <SocialLinkCard key={link.label} link={link} />
            ))}
          </Box>
        </Box>

        <Divider sx={{
          width: '100%',
          height: '1px',
          backgroundColor: 'white01',
        }}
        />

        <Location />
      </Box>

      <Divider sx={{
        width: '100%',
        height: '1px',
        backgroundColor: 'white01',
        mb: 4,
      }}
      />

      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
      >
        <Typography sx={{
          color: 'white01',
          fontSize: {
            xs: 12,
            md: 14,
          },
          textAlign: 'center',
        }}
        >
          © 2023 1407 Health & Fitness. Todos os direitos reservados.
        </Typography>

        <Typography
          sx={{
            color: 'white01',
            fontSize: {
              xs: 12,
              md: 14,
            },
            textAlign: 'center',
            '& a': {
              color: 'white01',
              textDecoration: 'underline',
              '&:hover': {
                cursor: 'pointer',
              },
            },
          }}
        >
          Desenvolvido por
          {' '}
          <a
            href="https://github.com/lucasrodrigges"
            target="_blank"
            rel="noreferrer"
          >
            Lucas Rodrigues.
          </a>
        </Typography>
      </Box>

    </Box>
  );
}
