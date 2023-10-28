import { Stack } from '@mui/material'
import Tile from './Tile'

const WordRow = ({ word }) => {
  return (
    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'center' }}>
      <Tile letter={word[0]}/>
      <Tile letter={word[1]}/>
      <Tile letter={word[2]}/>
      <Tile letter={word[3]}/>
      <Tile letter={word[4]}/>
    </Stack>
  )
}

export default WordRow
