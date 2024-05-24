import { Box, Grid } from "@mui/material";
import { FC } from "react";

type RowProps = {
  word: string;
};

const Row: FC<RowProps> = ({ word }) => {
  return (
    <Grid container>
      {
        word.split('').map((letter, letterIndex) => (
          <Grid item key={letterIndex}>
            <Box 
              sx={{
                border: 1,
                textAlign: 'center',
                width: 30,
                height: 30,
              }}
            >
              {letter.toUpperCase()}
            </Box>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Row;