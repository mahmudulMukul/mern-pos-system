import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { flexBox } from '../../styles/styles'

const CardList = () => {
  return (
    <Box>
        <Typography variant='h6'>Overview</Typography>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            '& > :not(style)': {
            m: 1,
            width: 180,
            height: 128,
            },
        }}
        >
        <Paper variant="outlined" sx={{p:2}} square>
          <Box sx={flexBox} gutterBottom>
            <box-icon type='solid' color='#ee7d3d' name='shopping-bag'></box-icon>
            <Typography variant='h6' color='#29b170'>+24%</Typography>
          </Box>
          <Box sx={{mt:2}}>
            <Typography variant="h6">$27,340</Typography>
            <Typography variant="span" sx={{color: '#7c8db5', fontWeight: 500}}>Total Sales</Typography>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{p:2}} square>
          <Box sx={flexBox} gutterBottom>
            <box-icon type='solid' color='#ee7d3d' name='shopping-bag'></box-icon>
            <Typography variant='h6' color='#29b170'>+24%</Typography>
          </Box>
          <Box sx={{mt:2}}>
            <Typography variant="h6">$27,340</Typography>
            <Typography variant="span" sx={{color: '#7c8db5', fontWeight: 500}}>Total Sales</Typography>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{p:2}} square>
          <Box sx={flexBox} gutterBottom>
            <box-icon type='solid' color='#ee7d3d' name='shopping-bag'></box-icon>
            <Typography variant='h6' color='#29b170'>+24%</Typography>
          </Box>
          <Box sx={{mt:2}}>
            <Typography variant="h6">$27,340</Typography>
            <Typography variant="span" sx={{color: '#7c8db5', fontWeight: 500}}>Total Sales</Typography>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{p:2}} square>
          <Box sx={flexBox} gutterBottom>
            <box-icon type='solid' color='#ee7d3d' name='shopping-bag'></box-icon>
            <Typography variant='h6' color='#29b170'>+24%</Typography>
          </Box>
          <Box sx={{mt:2}}>
            <Typography variant="h6">$27,340</Typography>
            <Typography variant="span" sx={{color: '#7c8db5', fontWeight: 500}}>Total Sales</Typography>
          </Box>
        </Paper>
        </Box>
    </Box>
  )
}

export default CardList