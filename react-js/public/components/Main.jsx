import { Box } from '@mui/material'
import React from 'react'

const Main = ({ children }) => {
  return (
    <Box sx={{ width: '100%', minHeight: '400px', backgroundColor: '#121213'}}>
      {children}
    </Box>
  )
}

export default Main
