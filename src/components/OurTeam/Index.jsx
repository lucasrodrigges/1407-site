import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography,
} from '@mui/material';
import React from 'react';
import ElsonImage from '../../assets/images/ElsonImage.jpg';
import RubensImage from '../../assets/images/RubensImage.jpg';
import JoednaImage from '../../assets/images/JoednaImage.jpg';
import LoohImage from '../../assets/images/LoohImage.jpg';
import AdelmoImage from '../../assets/images/AdelmoImage.jpg';

const cards = [{
  title: 'Joedna Leal',
  subtitle: 'CEO & Coach',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
  image: JoednaImage,
}, {
  title: 'Adelmo de Araujo',
  subtitle: 'Coach',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
  image: AdelmoImage,
}, {
  title: 'Rubens Silva',
  subtitle: 'Coach',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
  image: RubensImage,
}, {
  title: 'Elson Fonseca',
  subtitle: 'CEO',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
  image: ElsonImage,
}, {
  title: 'Looh',
  subtitle: 'Admnistração',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
  image: LoohImage,
}];

export default function OurTeam() {
  return (
    <Box sx={{
      height: '100vh',
      width: '80%',
      maxWidth: '1368px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
    }}
    >
      <Box width={1} mb={6}>
        <Typography sx={{
          fontSize: 30,
          fontWeight: 700,
          color: 'green01',
          width: '100%',
        }}
        >
          NOSSO TIME
        </Typography>
        <Divider sx={{
          width: '61px',
          height: '0px',
          border: '4px solid #01b2ea',
        }}
        />
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          // flexWrap: 'wrap',
          justifyContent: 'flex-start',
          gap: 2,
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.title}
            sx={{
              width: '360px',
            }}
          >
            <CardMedia
              component="img"
              image={card.image}
              sx={{
                objectFit: 'cover',
                height: '180px',
              }}
            />
            <CardContent>
              <Typography sx={{
                fontSize: 18,
                fontWeight: 700,
                fontStyle: 'italic',
                textTransform: 'uppercase',
              }}
              >
                {card.title}
              </Typography>

              <Typography sx={{
                fontSize: 13,
                fontWeight: 600,
                fontStyle: 'italic',
                textTransform: 'capitalize',
              }}
              >
                {card.subtitle}
              </Typography>

              <Typography sx={{
                fontSize: 12,
                fontWeight: 400,
                textAlign: 'justify',
                color: 'rgba(13, 13, 13, 0.36)',
              }}
              >
                {card.info}
              </Typography>
            </CardContent>
            <CardActions sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
            >
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: 'yellow01',
                  width: 'fit-content',
                  '&:hover': {
                    backgroundColor: 'blue01',
                  },
                }}
              >
                VER MAIS
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
