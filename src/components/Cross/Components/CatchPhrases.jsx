import React from 'react';
import {
  Box, IconButton, Typography,
} from '@mui/material';
import ArrowButton from '../../../assets/ArrowButton';

const cards = [{
  title: 'INSPIRE-SE',
  text: 'Desafie seus limites, encontre inspiração para enfrentar cada desafio e alcançar o que parecia impossível.',
}, {
  title: 'SUPERE-SE',
  text: 'Supere os obstáculos que surgirem em seu caminho, descubra sua força interior e torne-se a versão mais poderosa e resiliente de si mesmo.',
}];

export default function CatchPhrases() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: {
        xs: '100%',
        sm: '80%',
      },
      gap: 2,
    }}
    >
      {cards.map((card) => (
        <Box
          key={card.title}
          sx={{
            backgroundColor: 'black02',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 2,
            p: 2,
            borderRadius: '10px',
            transition: '0.5s',
            '&:hover': {
              cursor: 'pointer',
              transform: {
                xs: 'scale(1.1)',
                md: 'scale(1.1) translateX(-30px)',
              },
              transition: '0.5s',
            },
          }}
        >
          <Typography sx={{
            color: 'green01',
            fontWeight: 600,
          }}
          >
            {card.title}
          </Typography>

          <Typography sx={{
            color: 'rgba(255, 255, 255, 0.36)',
            textAlign: 'justify',
          }}
          >
            {card.text}
          </Typography>

          <IconButton>
            <ArrowButton color="#01b2ea" />
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
  );
}
