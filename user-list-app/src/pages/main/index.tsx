import React from 'react'
import { Box, Typography } from '@mui/material'
import styles from './style.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <Box className={styles.info}>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    Main page
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                    This project was created by React, Typescript, Redux Toolkit, Redux-Saga
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    For styles there is Material Ui, CSS modules
                </Typography>
            </Box>
        </div>
    )
}

export default Main
