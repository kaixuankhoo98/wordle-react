import { Stack } from '@mui/material'
import Tile from './Tile'
import { useEffect, useState } from 'react'

const WordRow = ({ word, isSubmit }) => {
  const [letters, setLetters] = useState(['', '', '', '', '']);

  useEffect(() => {
    const delay = 300;
    let timeout = null;

    // TODO: do something based on whether it's submitted or not
    word.split('').forEach((letter, index) => {
      timeout = setTimeout(() => {
        setLetters((prevLetters) => {
          const newLetters = [...prevLetters];
          newLetters[index] = letter;
          return newLetters;
        });
      }, index * delay);
    });

    return () => clearTimeout(timeout);
  }, [word])

  return (
    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'center' }}>
      {letters.map((letter, index) => (
        <Tile key={index} letter={letter} />
      ))}
    </Stack>
  )
}

export default WordRow
