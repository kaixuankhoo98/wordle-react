import { Box, Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { FC, useState } from "react";
import { GuessesSchema, WordSchema, useGetCorrectWord, wordSchema } from "./wordleHooks";
import Board from "./Board";

const WordleGame: FC = () => {
  const correctWord = useGetCorrectWord();

  const [guessNumber, setGuessNumber] = useState<number>(0);

  function submitWord(values: { word: string | null; }) {
    console.log(values.word ?? '');
  }

  const guesses: GuessesSchema = [
    { word: 'hello' },
    { word: 'hello' },
    { word: 'hello' },
    { word: null },
    { word: null },
    { word: null },
  ];

  return (
    <>
      <Board guesses={guesses}/>
      <Button
        variant="contained" 
        sx={{ marginLeft: '2rem'}}
        onClick={() => submitWord(guesses[0])}
      >
        Submit
      </Button>
      <Box > 
        {correctWord.word}
      </Box>
    </>
  )
}

export default WordleGame;