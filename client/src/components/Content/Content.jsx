import { Box } from '@mui/material'
import React from 'react'
import AppexChart from './AppexChart'
import CardList from './CardList'
import PopularProducts from './PopularProducts'
import SearchBar from './SearchBar'

const Content = () => {
  return (
    <Box sx={{width: '700px', pl: 2, pr: 2}}>
        <SearchBar/>
        <CardList/>
        <AppexChart/>
        <PopularProducts/>
    </Box>
  )
}

export default Content