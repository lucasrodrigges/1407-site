import React from 'react';
import { Box } from '@mui/material';
import ElsonImage from '../../assets/images/ElsonImage.jpg';
import RubensImage from '../../assets/images/RubensImage.jpg';
import JoednaImage from '../../assets/images/JoednaImage.jpg';
import LoohImage from '../../assets/images/LoohImage.jpg';
import AdelmoImage from '../../assets/images/AdelmoImage.jpg';
import TitleTeam from './components/TitleTeam';
import TeamCard from './components/TeamCard';

const cards = [{
  title: 'Joedna Leal',
  subtitle: 'Head Coach',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
  image: JoednaImage,
  path: 'https://www.instagram.com/joednalealcoach/',
}, {
  title: 'Elson Fonseca',
  subtitle: 'HeadCoach',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
  image: ElsonImage,
  path: 'https://www.instagram.com/elsonfonseca/',
}, {
  title: 'Adelmo de Araujo',
  subtitle: 'Coach',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
  image: AdelmoImage,
  path: 'https://www.instagram.com/ad3lmo/',
}, {
  title: 'Rubens Silva',
  subtitle: 'Coach',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
  image: RubensImage,
  path: 'https://www.instagram.com/rubensff73/',
}, {
  title: 'Nislainy Santos',
  subtitle: 'Admnistração',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
  image: LoohImage,
  path: 'https://www.instagram.com/looh_nislainy/',
}];

export default function OurTeam() {
  return (
    <Box
      id="team"
      sx={{
        height: {
          md: '100vh',
        },
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
        gap: {
          xs: 6,
        },
        mb: 6,
      }}
    >
      <TitleTeam />

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: {
            sm: 'wrap',
          },
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          justifyContent: 'center',
          alignItems: 'center',
          gap: {
            xs: 4,
            md: 2,
          },
        }}
      >
        {cards.map((card) => (
          <TeamCard key={card.title} card={card} />
        ))}
      </Box>
    </Box>
  );
}
