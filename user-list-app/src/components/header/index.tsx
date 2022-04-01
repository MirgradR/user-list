import React from 'react'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import { NavLink } from '../'
import styles from './style.module.css'

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={styles.navigation}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        RЯ
                    </IconButton>
                    <Box sx={{ display: 'flex' }}>
                        <NavLink title={'Main'} route={'/'} />
                        <NavLink title={'Users'} route={'/users'} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default Header
