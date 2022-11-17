import { Icon, IconButton, InputBase, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {searchBar} from '../../styles/styles'

const SearchBar = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Paper component="form" sx={searchBar}>
        <IconButton>
            <box-icon name='search'></box-icon>
        </IconButton>
        
        <InputBase
          sx={{flex: 1, pl: 1 }}
          placeholder="Search"
        />
      </Paper>
    </Box>
  )
}

export default SearchBar