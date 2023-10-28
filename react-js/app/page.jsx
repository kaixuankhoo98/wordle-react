import Main from '@/public/components/Main'
import WordRow from '@/public/components/WordRow'
import { Box, Button } from '@mui/material'

export default function Home() {
  let wordCount = 0;

  const words = ['', '', '', '', '', '']

  const handleSubmit = (word) => {
    words[wordCount] = word;

    wordCount++;
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
          <WordRow word={words[0]} />
          <WordRow word={words[1]} />
          <WordRow word={words[2]} />
          <WordRow word={words[3]} />
          <WordRow word={words[4]} />
          <WordRow word={words[5]} />
        </Box>
        <Box 
          sx={{
            width: 240,
            height: 150, backgroundColor: 'darkgray',
            margin: '0 auto',
          }}
        >
          Keyboard
          <Button onClick={handleSubmit()}>
            Submit
          </Button>
        </Box>
      </Box>
    </Main>
  )
}
