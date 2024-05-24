'use client';

import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import '../animations.css';

const Tile = ({ letter, isSubmit }) => {
  if (!letter) {
    letter = ' ';
  }

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (isSubmit) {
      setIsFlipped(true);

      const timeout = setTimeout(() => {
        setIsFlipped(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isSubmit]);

  const tileStyle = {
    height: 40,
    width: 40,
    border: '2px solid white',
    margin: '3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#77DD77',
  };

  const tileClass = `tile ${isFlipped ? 'flip-horizontal-bottom' : ''}`;

  return (
    <Box
      className={tileClass}
      sx={tileStyle}
    >
      {letter}
    </Box>
  );
};

export default Tile;
