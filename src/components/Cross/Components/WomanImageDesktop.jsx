import { Box } from '@mui/material';
import React from 'react';
import WomanImage from '../../../assets/images/woman-cross.png';

export default function WomanImageDesktop() {
  return (
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
      },
    }}
    >
      <img
        className="section_1_image"
        src={WomanImage}
        alt=""
      />
    </Box>
  );
}
