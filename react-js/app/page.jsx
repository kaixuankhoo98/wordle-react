'use client';

import Main from '@/public/components/Main'
import WordRow from '@/public/components/WordRow'
import { Box, Button } from '@mui/material'
import { useState } from 'react';

export default function Home() {
  const [wordCount, setWordCount] = useState(0);
  const [words, setWords] = useState(['hello', '', '', '', '', '']);
  const [submittedWords, setSubmittedWords] = useState([0, 0, 0, 0, 0])

  const handleSubmit = (word) => {
    let wordArray = [...words]
    wordArray[wordCount] = word;
    setWords(wordArray);
    
    let submitArray = [...submittedWords];
    submitArray[wordCount] = 1;
    setSubmittedWords(submitArray);

    setWordCount(wordCount + 1);
  };

  return (
    <Main>
      <Box
        sx={{
          width: 350,
          height: 450, backgroundColor: 'gray',
          margin: '0 auto',
        }}
      >
        <Box 
          sx={{
            width: 240,
            height: 285, backgroundColor: 'lightgray',
            margin: '0 auto',
          }}
        >
          <WordRow isSubmit={submittedWords[0]} word={words[0]} />
          <WordRow word={words[1]} />
          <WordRow word={words[2]} />
          <WordRow word={words[3]} />
          <WordRow word={words[4]} />
          <WordRow word={words[5]} />
        </Box>
        <Box 
          sx={{
            width: 350,
            height: 150, backgroundColor: 'darkgray',
            margin: '0 auto',
          }}
        >
          Keyboard
          <Button onClick={() => handleSubmit('hello')}>
            Submit
          </Button>
        </Box>
      </Box>
    </Main>
  )
}
