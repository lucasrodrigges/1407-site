import {
  Box, Button, IconButton, Typography,
} from '@mui/material';
import React from 'react';
import WomanImage from '../../assets/images/woman-cross.jpeg';
import ArrowButton from '../../assets/ArrowButton';

import './Styles/Cross.css'

const CROSS_LINK_WPP = 'https://api.whatsapp.com/send?phone=5579991201407&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita.%20Quais%20dias%20e%20hor%C3%A1rios%20dispon%C3%ADveis?';

const cards = [{
  title: 'INSPIRE-SE',
  text: 'Desafie seus limites, encontre inspiração para enfrentar cada desafio e alcançar o que parecia impossível.',
}, {
  title: 'SUPERE-SE',
  text: 'Supere os obstáculos que surgirem em seu caminho, descubra sua força interior e torne-se a versão mais poderosa e resiliente de si mesmo.',
}];

export default function Cross() {
  return (
    <Box sx={{
      height: 'calc(100vh - 250px)',
      width: '80%',
      maxWidth: '1368px',
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
        justifyContent: 'space-between',
        gap: 2,
        maxWidth: '430px',
        height: '472px',
      }}
      >
        <Typography
          sx={{
            fontSize: 64,
            fontWeight: 600,
            color: 'green01',
          }}
        >
          CROSS
        </Typography>

        <Typography sx={{
          fontSize: 14,
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.36)',
          width: '100%',
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
          Descubra os benefícios do CrossFit e junte-se a nós para se tornar a melhor versão
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

      <img
        className='section_1_image'
        src={WomanImage}
        alt=""
        style={{
          width: '305px',
          height: '472px',
          borderRadius: '20px',
          objectFit: 'cover',
          transition: '0.8s',
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
              backgroundColor: 'black02',
              width: '100%',
              maxWidth: '335px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 2,
              p: 2,
              borderRadius: '10px',
              transition: '0.5s',
              '&:hover': {
                cursor: 'pointer',
                transform: 'scale(1.1) translateX(-30px)',
                transition: '0.5s',
              },
            }}
          >
            <Typography sx={{
              color: 'green01',
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
              <ArrowButton color='#01b2ea' />
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
