import {
  Box, Card, CardContent, CardMedia, Divider, Typography,
} from '@mui/material';
import React from 'react';
import ElsonImage from '../../assets/images/ElsonImage.jpg';

const cards = [{
  name: 'Elson',
  image: ElsonImage,
}];

export default function OurTeam() {
  return (
    <Box sx={{
      height: '100vh',
      width: '80%',
      maxWidth: '1168px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
    }}
    >
      <Box width={1}>
        <Typography sx={{
          fontSize: 30,
          fontWeight: 700,
          color: 'white01',
          width: '100%',
        }}
        >
          NOSSO TIME
        </Typography>
        <Divider sx={{
          width: '61px',
          height: '0px',
          border: '4px solid #59253E',
        }}
        />
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        width: '100%',
      }}
      >
        {cards.map((card) => (
          <Card
            key={card.name}
            sx={{
              width: '260px',
            }}
          >
            <CardMedia
              image={card.image}
              sx={{
                height: '174px',
                objectFit: 'cover',
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
                {card.name}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        ))}
      </Box>
    </Box>
  );
}
