import React from 'react';
import {
  Box, Typography,
} from '@mui/material';

const cards = [{
  title: 'Ambiente Climatizado',
  text: 'Nosso box é equipado com um sistema de ar-condicionado, garantindo uma temperatura ideal durante todas as suas sessões de exercícios. Aqui, você poderá se concentrar completamente nos seus treinos, sem se preocupar com o desconforto causado pelo calor excessivo ou frio intenso.',
}, {
  title: 'Profissionais Qualificados',
  text: 'Tenha a confiança de treinar em um box com coaches qualificados que trazem um vasto conhecimento e habilidades para orientar você em cada aspecto do seu treinamento. Eles estão comprometidos em ajudá-lo a atingir seus objetivos de forma segura e eficaz.',
}];

export default function Differentials() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: {
        xs: 'center',
        md: 'space-between',
      },
      alignItems: 'center',
      width: {
        xs: '90%',
        sm: '80%',
      },
      height: {
        md: '470px',
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
                md: 'scale(1.1) translateX(-20px)',
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
            fontSize: {
              xs: 14,
              lg: 16,
            },
          }}
          >
            {card.text}
          </Typography>

          {/* <IconButton>
            <ArrowButton color="#01b2ea" />
            <Typography sx={{
              color: 'white01',
              ml: 2,
            }}
            >
              Saiba Mais
            </Typography>
          </IconButton> */}
        </Box>
      ))}
    </Box>
  );
}
