import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { menuListItems } from '../../data/data'
import 'boxicons'

const MenuList = () => {
  return (
    <Box>
        {
            menuListItems.map((item) => {
                return(
                    <React.Fragment key={item.id}>
                        {
                        item.subdivision  ? 
                        (<>
                            <Box>
                                <Typography sx={{fontWeight: 700, mb:1, color: '#25396f'}}>{ item.text }</Typography>
                            </Box>
                        </>) 
                        : 
                        (
                            <Box variant='nav'>
                                <List sx={{ p: 0 }}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><box-icon type='solid' color="#7c8db5" name={item.icon}></box-icon></ListItemIcon>
                                            <ListItemText sx={{color: '#7c8db5'}} primary={item.text} />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Box>
                        )
                    }
                    </React.Fragment>
                )
            })
        }
    </Box>
  )
}

export default MenuList