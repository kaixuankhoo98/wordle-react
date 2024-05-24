import { Box } from "@mui/material";
import { GuessesSchema, WordSchema } from "./wordleHooks";
import { FC } from "react";
import Row from "./Row";

type BoardProps = {
  guesses: GuessesSchema;
}

const Board: FC<BoardProps> = ({ guesses }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
      {
        guesses.map((guess: WordSchema, index: number) => (
          <Row key={index} word={guess.word ?? '     '} />
        ))
      }
    </Box>
  )
}

export default Board;