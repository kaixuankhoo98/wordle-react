'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
import '../animations.css';

const Tile = ({ letter }) => {
  if (!letter) {
    letter = ' ';
  }

  const [isFlipped, setIsFlipped] = useState(false);

  const handleTileClick = () => {
    setIsFlipped(!isFlipped);
  };

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
      onClick={handleTileClick}
      sx={tileStyle}
    >
      {/* {!isFlipped? ' ' : letter} */}
      {letter}
    </Box>
  );
};

export default Tile;
