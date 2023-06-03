import { ArrowDropDownCircle, Cancel } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import DropDownCard from './DropDownCard';

export default function ServiceCard({ service }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{
      width: '100%',
    }}
    >
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          padding: {
            xs: 1,
            sm: 2,
          },
          backgroundColor: 'yellow01',
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'space-between',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        <Typography sx={{
          fontSize: {
            xs: 12,
            sm: 14,
            md: 16,
          },
          fontWeight: 600,
          color: 'black02',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          textAlign: 'left',
          width: '100%',
        }}
        >
          {service.icon}
          {service.title}
        </Typography>

        <IconButton onClick={() => setOpen(!open)}>
          {open ? (
            <Cancel sx={{
              color: 'white01',
            }}
            />
          ) : (
            <ArrowDropDownCircle sx={{
              color: 'white01',
            }}
            />
          )}
        </IconButton>
      </Box>

      <DropDownCard open={open} service={service} />
    </Box>
  );
}
