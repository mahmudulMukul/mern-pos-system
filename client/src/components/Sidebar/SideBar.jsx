import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {sideBarWrapper, userProfile} from '../../styles/styles'
import MenuList from './MenuList'


const SideBar = () => {
  return (
    <Box sx={sideBarWrapper}>
        <Box sx={userProfile}>
            <Avatar sx={{ mr: 2 }} src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png'/>
            <Typography variant='h6' sx={{color: '#347ae2'}}>Mukul</Typography>
        </Box>
        <MenuList/>
    </Box>
  )
}

export default SideBar