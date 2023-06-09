import {
  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';

export default function TeamCard({ card }) {
  return (
    <Card
      key={card.title}
      sx={{
        width: {
          xs: '100%',
          sm: '45%',
          md: '30%',
          lg: '20%',
        },
        border: '1px solid #f1a902b2',
        transition: '0.5s',
        '&:hover': {
          cursor: 'pointer',
          transform: {
            xs: 'scale(1.1)',
            md: 'scale(1.1) translateX(-20px)',
            border: '1px solid #01b4ea5a',
            zIndex: 1,
          },
          transition: '0.5s',
        },
      }}
    >
      <CardActionArea
        onClick={() => window.open(card.path, '_blank')}
      >
        <CardMedia
          component="img"
          image={card.image}
          sx={{
            objectFit: 'cover',
            height: {
              xs: '200px',
              sm: '200px',
              md: '150px',
            },
          }}
        />
      </CardActionArea>
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
      </CardContent>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={() => window.open(card.path, '_blank')}
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
  );
}
