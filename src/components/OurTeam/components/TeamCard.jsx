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
          sm: '80%',
          md: '30%',
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
              sm: '350px',
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
