import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const CROSS_LINK_WPP = 'https://api.whatsapp.com/send?phone=5579991201407&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita.%20Quais%20dias%20e%20hor%C3%A1rios%20dispon%C3%ADveis?';

export default function Welcome() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: {
        xs: 'center',
        lg: 'space-between',
      },
      alignItems: {
        xs: 'center',
        sm: 'flex-start',
      },
      gap: {
        xs: 4,
        md: 2,
      },
      width: {
        xs: '100%',
        sm: '80%',
      },
      height: {
        md: '470px',
      },
    }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: 36,
          },
          fontWeight: 600,
          color: 'green01',
          width: '100%',
        }}
      >
        1407 - Health & Fitness
      </Typography>

      <Typography sx={{
        fontSize: {
          xs: 14,
        },
        fontWeight: 400,
        color: 'rgba(255, 255, 255, 0.36)',
        width: {
          xs: '100%',
          md: '80%',
          lg: '90%',
        },
        textAlign: 'justify',
      }}
      >
        Boas vindas ao 1407 - Health & Fitness, o lugar perfeito para você alcançar seus objetivos
        e se superar a cada treino! Aqui, oferecemos uma experiência única de treinamento
        funcional de alta intensidade, projetada para transformar seu corpo e sua mente.
        Com uma equipe preparada e apaixonada, você será bem guiado em cada etapa
        do caminho rumo à uma melhor qualidade de vida.
        Nossos treinos diversificados e desafiadores vão ajudar a melhorar sua resistência
        cardiovascular, construir força muscular e aumentar sua
        flexibilidade, tudo em um ambiente de comunidade inclusiva e motivadora.
        Descubra os benefícios do Cross e junte-se a nós para se tornar a melhor versão
        de si mesmo.
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: 'blue01',
          width: 'fit-content',
          transition: '0.5s',
          '&:hover': {
            backgroundColor: 'yellow01',
            transform: 'scale(1.1)',
            transition: '0.5s',
          },
        }}
        onClick={() => window.open(CROSS_LINK_WPP, '_blank')}
      >
        AGENDE UMA AULA EXPERIMENTAL
      </Button>
    </Box>
  );
}
