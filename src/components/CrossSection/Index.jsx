import {
  Box, Button, IconButton, Typography,
} from '@mui/material';
import React from 'react';
import WomanImage from '../../assets/images/woman-cross.png';
import ArrowButton from '../../assets/ArrowButton';

const CROSS_LINK_WPP = 'https://api.whatsapp.com/send?phone=5579991201407&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita.%20Quais%20dias%20e%20hor%C3%A1rios%20dispon%C3%ADveis?';

const cards = [{
  title: 'INSPIRE-SE',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringil. lacus eget consequat tincidunt, lectus ex.',
}, {
  title: 'DESAFIE-SE',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringil. lacus eget consequat tincidunt, lectus ex.',
}];

export default function CrossSection() {
  return (
    <Box sx={{
      height: 'calc(100% + 250px)',
      width: '80%',
      maxWidth: '1168px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 2,
    }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '430px',
      }}
      >
        <Typography
          sx={{
            fontSize: 64,
            fontWeight: 700,
            color: 'white01',
          }}
        >
          CROSS
        </Typography>

        <Typography sx={{
          fontSize: 14,
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.36)',
          width: '90%',
        }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          fringilla, lacus eget consequat tincidunt, lectus ex bibendum libero,
          eget iaculis quam arcu quis mauris. Donec ex neque, egestas in faucibus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: 'pink01',
            width: 'fit-content',
          }}
          onClick={() => window.open(CROSS_LINK_WPP, '_blank')}
        >
          ENTRE EM CONTATO
        </Button>
      </Box>

      <img
        src={WomanImage}
        alt=""
        style={{
          width: '305px',
          height: '440px',
          borderRadius: '20px',
        }}
      />

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
      >
        {cards.map((card) => (
          <Box
            key={card.title}
            sx={{
              backgroundColor: 'black03',
              width: '100%',
              maxWidth: '335px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 2,
              p: 2,
            }}
          >
            <Typography sx={{
              color: 'white01',
            }}
            >
              {card.title}
            </Typography>

            <Typography sx={{
              color: 'rgba(255, 255, 255, 0.36)',
            }}
            >
              {card.text}
            </Typography>

            <IconButton>
              <ArrowButton />
              <Typography sx={{
                color: 'white01',
                ml: 2,
              }}
              >
                Saiba Mais
              </Typography>
            </IconButton>
          </Box>
        ))}

      </Box>
    </Box>
  );
}
