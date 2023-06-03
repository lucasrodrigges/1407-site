import { IconButton } from '@mui/material';
import React from 'react';

export default function SocialLinkCard({ link }) {
  return (
    <IconButton onClick={() => window.open(link.path, '_target')}>
      {link.icon}
    </IconButton>
  );
}
