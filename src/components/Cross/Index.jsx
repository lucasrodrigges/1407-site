import {
  Box, Button, IconButton, Typography,
} from '@mui/material';
import React from 'react';
import WomanImage from '../../assets/images/woman-cross.png';
import WomanMobileImage from '../../assets/images/woman-cross-mobile.png';
import ArrowButton from '../../assets/ArrowButton';

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
      height: {
        xs: 'calc(100vh + 100px)',
        md: 'calc(100vh + 200px)',
      },
      width: '90%',
      maxWidth: '1368px',
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: 'row',
      },
      gap: 6,
    }}
    >
       <Box sx={{
        width: '100%',
        '& img': {
          width: '100%',
        },
     }}>
     <img
        src={WomanMobileImage}
        alt=""
      />
     </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        width: '100%',
        maxWidth: '430px',
      }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '36px',
              md: '64px',
            },
            fontWeight: 600,
            color: 'green01',
            width: '100%',
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

     <Box sx={{
      display: {
        xs: 'none',
        md: 'block',
      },
      '& img': {
        width: '305px',
          height: '472px',
          borderRadius: '20px',
          objectFit: 'cover',
          transition: '0.8s',
      }
     }}>
     <img
        className='section_1_image'
        src={WomanImage}
        alt=""
      />
     </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 2,
      }}
      >
        {cards.map((card) => (
          <Box
            key={card.title}
            sx={{
              backgroundColor: 'black02',
              width: '90%',
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
